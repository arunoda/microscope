Meteor.methods({
    "post": function(postData) {
        var user = Meteor.user();

        if(!postData.url || !postData.title) {
            throw new Meteor.Error(422, "URL and Title must exists!");
        }

        if(!user) {
            throw new Meteor.Error(401, "Unauthorized!");
        }

        var existingPostWithUrl = Posts.findOne({url: postData.url});
        if(existingPostWithUrl) {
            throw new Meteor.Error(302, "URL already exists", existingPostWithUrl._id);
        }

        var post = _.extend(_.pick(postData, 'url', 'title', 'message'), {
            author: user.username, 
            userId: user._id,
            submitted: Date.now()
        });

        var postId = Posts.insert(post);
        return postId;
    }
});