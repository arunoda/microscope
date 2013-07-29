Template.notifications.helpers({

    notificationCount: function() {
        return Notifications.find({to: Meteor.userId()}).count();
    }, 

    notifications: function() {
        return Notifications.find({to: Meteor.userId()});
    }
});