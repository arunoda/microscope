Template.postEdit.helpers({
    post: function() {
        return Posts.findOne(Session.get('currentPostId'));
    }
});

Template.postEdit.events({

    "submit form": function(e) {
        e.preventDefault();
        var postData = {
            url: $('[name=url]', e.target).val(),
            title: $('[name=title]', e.target).val()
        };

        var postId = Session.get('currentPostId');
        Posts.update({_id: postId}, {$set: postData}, function(err) {
            if(err) {
                throwError(err.reason);
            } else {
                Meteor.Router.to('postPage', {_id: postId});
            }
        });
    },

    "click .delete": function(e) {
        e.preventDefault();
        var postId = Session.get('currentPostId');
        Posts.remove({_id: postId});
        Meteor.Router.to('postsList');
    }
});