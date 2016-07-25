Template.crowdfundingIndex.onCreated(function(){
  

})
Template.crowdfundingIndex.helpers({
  founds:function(){
    return Founding.find().fetch();
  }
})
