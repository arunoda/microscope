Meteor.methods({
    "comment": function(postId, body) {
        var user = Meteor.user();
        if(!user) {
            throw new Meteor.Error(401, "Unauthorized");
        }

        var post = Posts.findOne({_id: postId});
        if(!post) {
            throw new Meteor.Error(404, "Comment is not attached to a valid post");
        }

        var comment = {
            body: body,
            postId: postId,
            author: user.username, 
            userId: user._id,
            submitted: Date.now()
        };

        Comments.insert(comment);
        Posts.update({_id: postId}, {$inc: {commentsCount: 1}});
        createNotificationForComment(comment);
    }
});