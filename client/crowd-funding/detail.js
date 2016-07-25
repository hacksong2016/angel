Template.crowdfundingDetail.helpers({
	found:function () {
		return Founding.findOne({_id:FlowRouter.getParam("id")})
	}
})