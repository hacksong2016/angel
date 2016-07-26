Template.marketIndex.helpers({
  goods: function() {
    return Contribute.find().fetch();
  },
  cover:function (arr) {
  	return arr.pop();
  }
})
