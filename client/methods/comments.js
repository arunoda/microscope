Meteor.methods({
    comment: function(postId, body) {
        var user = Meteor.user();
        var comment = {
            body: body,
            postId: postId,
            author: user.username, 
            userId: user._id,
            submitted: Date.now()
        };

        Comments.insert(comment);
        Posts.update({_id: postId}, {$inc: {commentsCount: 1}});
    }
});