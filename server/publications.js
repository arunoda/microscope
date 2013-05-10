Meteor.publish('posts', function() {
    return Posts.find({}, {sort: {submitted: -1}});
});