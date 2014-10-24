/*****************************************************************************/
/* Home: Event Handlers and Helpers */
/*****************************************************************************/
Template.Home.events({
  /*
   * Example: 
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.Home.helpers({
  /*
   * Example: 
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*****************************************************************************/
/* Home: Lifecycle Hooks */
/*****************************************************************************/
Template.Home.created = function () {
  if(Meteor.isCordova) {
    var builder = new Builder();
    builder.build();
  } else {
    var builder = new Builder();
    builder.build();
  }
};

Template.Home.rendered = function () {
};

Template.Home.destroyed = function () {
};
