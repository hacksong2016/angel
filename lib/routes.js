FlowRouter.route('/', {
  action: function(params) {
    BlazeLayout.render("mainLayout", { main: "siteIndex" });
  }
});
FlowRouter.route('/crowd-funding', {
  action: function(params) {
    BlazeLayout.render("mainLayout", { main: "crowdfundingIndex" });
  }
});
FlowRouter.route('/crowd-funding/:id', {
  action: function(params) {
    BlazeLayout.render("mainLayout", { main: "crowdfundingDetail" });
  }
});
FlowRouter.route('/live', {
  action: function(params) {
    BlazeLayout.render("mainLayout", { main: "liveIndex" });
  }
});
FlowRouter.route('/report', {
  action: function(params) {
    BlazeLayout.render("mainLayout", { main: "reportIndex" });
  }
});
FlowRouter.route('/contribute', {
  action: function(params) {
    BlazeLayout.render("mainLayout", { main: "contributeIndex" });
  }
});
FlowRouter.route('/profile', {
  action: function(params) {
    BlazeLayout.render("mainLayout", { main: "profileIndex" });
  }
});
FlowRouter.route('/market', {
  action: function(params) {
    BlazeLayout.render("mainLayout", { main: "marketIndex" });
  }
});
FlowRouter.route('/post', {
  action: function(params) {
    BlazeLayout.render("mainLayout", { main: "postIndex" });
  }
});
FlowRouter.route('/book', {
  action: function(params) {
    BlazeLayout.render("mainLayout", { main: "bookIndex" });
  }
});
FlowRouter.route('/start-funding', {
  action: function(params) {
    BlazeLayout.render("mainLayout", { main: "startFundingIndex" });
  }
});
