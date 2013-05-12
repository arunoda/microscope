Notifications = new Meteor.Collection('notifications');

Notifications.allow({
    update: function(userId, doc) {
        return doc.to == userId;
    }
})

createNotificationForComment = function(comment) {

    var post = Posts.findOne(comment.postId);
    Notifications.insert({
        to: post.userId,
        comment: comment,
        read: false
    });
};