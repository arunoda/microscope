Meteor.publish('posts', function() {
    // return Posts.find({}, {sort: {submitted: -1}});
    return Posts.find({});
});

Meteor.publish('comments', function(postId) { 
    return Comments.find({postId: postId});
});