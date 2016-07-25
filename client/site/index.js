Template.siteIndex.helpers({
	founds:function (argument) {
		return Founding.find().fetch();
	},
	percent:function (a,b) {
		return (a/b)*100;
	}
})