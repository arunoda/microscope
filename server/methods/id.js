Meteor.methods({
    "serverId": function() {
        if(!Meteor.serverId) {
            Meteor.serverId = Random.id();
        }
        return Meteor.serverId;
    }
});