Template.startFundingIndex.onCreated(function(){
  Session.set('imgs',[]);
})
Template.startFundingIndex.helpers({
  imgs:function(){
    return Session.get('imgs'); 
  }
})
Template.startFundingIndex.events({
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
  'submit #start-founding': function(e, t) {
    e.preventDefault();
    var tags =  $('#f-tags').val();
    tags = tags.split(',');
    var doc = {
      title: $('#f-title').val(),
      address: $('#f-address').val(),
      name: $('#f-name').val(),
      amount: $('#f-amount').val()*1,
      startTime: $('#start-time').val(),
      endTime: $('#end-time').val(),
      in: 0,
      tags:tags ,
      detail: $('#f-detail').val(),
      img: Session.get('imgs'),
      createdAt: new Date()
    }
    Founding.insert(doc, function(err, res) {
      if (err) {
        throw err }
      FlowRouter.go('/')
        // body...
    });
  }
})
