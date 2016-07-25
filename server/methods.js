Meteor.methods({
  'imageupload':function(img){
    var Future = require('fibers/future');
    var future = new Future();
    upload(img,function(res){
      future["return"](res);
    })
    return future.wait();
  }
})
