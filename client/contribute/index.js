Template.contributeIndex.onCreated(function() {
  Session.set('imgs', []);
});
Template.contributeIndex.helpers({
  imgs: function() {
    return Session.get('imgs');
  }
})
Template.contributeIndex.events({
  'change #fileupload': function(e, t) {
    var fileList = e.target.files;
    rFilter = /^(?:image\/bmp|image\/cis\-cod|image\/gif|image\/ief|image\/jpeg|image\/jpeg|image\/jpeg|image\/pipeg|image\/png|image\/svg\+xml|image\/tiff|image\/x\-cmu\-raster|image\/x\-cmx|image\/x\-icon|image\/x\-portable\-anymap|image\/x\-portable\-bitmap|image\/x\-portable\-graymap|image\/x\-portable\-pixmap|image\/x\-rgb|image\/x\-xbitmap|image\/x\-xpixmap|image\/x\-xwindowdump)$/i;

    for (let i = 0; i < fileList.length; i++) {
      oFReader = new FileReader();
      oFReader.readAsDataURL(fileList[i]);
      oFReader.onload = function(oFREvent) {
        Meteor.call('imageupload', oFREvent.target.result, function(err, res) {
          var imgs = Session.get("imgs");
          imgs.push(res);
          Session.set('imgs', imgs);
        });
      };
    }
  },
  'submit #contribute-form': function(e, t) {
    e.preventDefault();
    var doc = {
      userid: Meteor.userId(),
      username: $('#c-username').val(),
      address: $("#c-address").val(),
      name: $('#c-name').val(),
      amount: $('#c-amount').val() * 1,
      imgs: Session.get('imgs'),
      content:$('#c-detail').val()
    }
    Contribute.insert(doc, function(err, res) {
      if (err) {
        throw err;
      }
      FlowRouter.go('/market/' + res);
      $('#contribute-form').trigger('reset');
    });
  }
})
