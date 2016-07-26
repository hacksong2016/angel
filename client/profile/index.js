Template.profileIndex.onCreated(function (argument) {

})
Template.profileIndex.helpers({
	donates:function () {
		return Donate.find({userid:Meteor.userId()}).fetch();
	},
	contributes:function () {
		return Contribute.find({userid:Meteor.userId()}).fetch();
	},
	cover:function (arr) {
		return arr.pop();
	}
})