Meteor.methods({
    "post": function(postData) {
        postData.submitted = Date.now();
        var id = Posts.insert(postData)
        Session.set('pendingPostId', id);
    }
});