Template.notifications.helpers({

    notificationCount: function() {
        return Notifications.find().count();
    }, 

    notifications: function() {
        return Notifications.find();
    }
});