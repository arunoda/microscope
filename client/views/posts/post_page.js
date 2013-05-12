Template.postPage.helpers({
    currentPost: function() {
        var id = Session.get('currentPostId');
        var post = Posts.findOne(id);
        if(post) {
            post.fromPostPage = true;
        }
        return post;
    },

    comments: function() {
        var postId = Session.get('currentPostId');
        var comments = Comments.find({postId: postId}, {sort: {submitted: -1}});
        return comments;
    }
});
