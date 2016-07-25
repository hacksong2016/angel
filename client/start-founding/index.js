Template.startFundingIndex.events({
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
      img: $('#f-img').val(),
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
