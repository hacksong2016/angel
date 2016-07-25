Template.reportIndex.helpers({
  reports:function(){
    return Report.find().fetch();
  }
})
Template.reportIndex.events({
  'submit #report-form':function(e,t){
    e.preventDefault();
    var doc = {
      unit:$('#accept-unit').val(),
      address:$('#accept-address').val(),
      name:$('#accept-name').val(),
      number:$('#accept-number').val(),
      amount:$('#accept-amount').val(),
      time:$('#accept-time').val(),
      userid:Meteor.userId(),
      username:Meteor.user().username,
      createdAt:new Date()
    }
    Report.insert(doc,function(err,res){
      $("#report-form").trigger('reset')
    });
  }
})
