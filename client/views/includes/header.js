Template.header.helpers({
    serverId: function() {
        return Session.get('serverId');
    }
});

Meteor.startup(function() {
    Meteor.call("serverId", function(err, id) {
        Session.set('serverId', id);
    });
});