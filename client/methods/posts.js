Meteor.methods({
    "post": function(postData) {
        postData.submitted = Date.now();
        Posts.insert(postData)
    }
});