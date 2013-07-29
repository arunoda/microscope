Meteor.publish('posts', function() {
    var sub = this;
    
    var handle = Posts.find({}).observe({
        added: function(doc) {
            sub.added('posts', doc._id, doc);
        },

        changed: function(newDoc, oldDoc) {
            sub.changed('posts', oldDoc._id, newDoc);
        },

        removed: function(oldDoc) {
            sub.removed('posts', oldDoc._id);
        }
    });

    sub.ready();
    sub.onStop(function() {
        handle.stop();
    });
});

Meteor.publish('comments', function(postId) { 
    return Comments.find({postId: postId});
});

Meteor.publish('notifications', function() {
    return Notifications.find({to: this.userId, read: false});
});