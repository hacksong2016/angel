Template.siteIndex.helpers({
	founds:function () {
		return Founding.find().fetch();
	},
	foundeds:function () {
		return Founding.find().fetch();
	},
	percent:function (a,b) {
		return (a/b)*100;
	}
})