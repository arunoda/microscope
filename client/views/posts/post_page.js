Template.postPage.helpers({
    currentPost: function() {
        var id = Session.get('currentPostId');
        var post = Posts.findOne(id);
        if(post) {
            post.fromPostPage = true;
        }
        return post;
    }
});