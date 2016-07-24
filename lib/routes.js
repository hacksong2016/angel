FlowRouter.route('/', {
    action: function(params) {
        BlazeLayout.render("mainLayout", {main: "siteIndex"});
    }
});