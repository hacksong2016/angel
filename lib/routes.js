FlowRouter.route('/', {
    action: function(params) {
        BlazeLayout.render("mainLayout", {main: "siteIndex"});
    }
});
FlowRouter.route('/live', {
    action: function(params) {
        BlazeLayout.render("mainLayout", {main: "liveIndex"});
    }
});
