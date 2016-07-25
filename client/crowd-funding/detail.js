Template.crowdfundingDetail.onCreated(function(){
  Session.set('imgs',[]);
})
Template.crowdfundingDetail.helpers({
  found:function () {
    return Founding.findOne({_id:FlowRouter.getParam("id")})
  },
  imgs:function(){
    return Session.get('imgs');
  },
  donates:function(){
    return Donate.find({cfid:FlowRouter.getParam("id")}).fetch();
  }
})
Template.crowdfundingDetail.events({
  'change #fileupload':function(e,t){
    var fileList = e.target.files;
    rFilter = /^(?:image\/bmp|image\/cis\-cod|image\/gif|image\/ief|image\/jpeg|image\/jpeg|image\/jpeg|image\/pipeg|image\/png|image\/svg\+xml|image\/tiff|image\/x\-cmu\-raster|image\/x\-cmx|image\/x\-icon|image\/x\-portable\-anymap|image\/x\-portable\-bitmap|image\/x\-portable\-graymap|image\/x\-portable\-pixmap|image\/x\-rgb|image\/x\-xbitmap|image\/x\-xpixmap|image\/x\-xwindowdump)$/i;

    for(let i =0;i<fileList.length;i++) {
      oFReader = new FileReader();
      oFReader.readAsDataURL(fileList[i]);
      oFReader.onload = function (oFREvent) {
        Meteor.call('imageupload',oFREvent.target.result,function(err,res){
          var imgs = Session.get("imgs");
          imgs.push(res);
          Session.set('imgs',imgs);
        });
      };
    }
  },
  'submit #donate-form':function(e,t){
    e.preventDefault();
    var doc = {
      userid:Meteor.userId(),
      username:Meteor.user().username,
      name:$("#d-name").val(),
      amount:$('#d-amount').val()*1,
      cfid:FlowRouter.getParam("id"),
      imgs:Session.get('imgs')
    }
    const amount = $('#d-amount').val()*1;
    $("#d-name").val("");
    $('#d-amount').val("");
    Session.set('imgs',[])
      $('#fileupload').val("")
      Donate.insert(doc,function(err,res){
        if(err) { throw err;}
        Founding.update({_id:FlowRouter.getParam("id")},{$inc:{
          in:amount
        }})
      });

  }
})
