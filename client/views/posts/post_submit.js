Template.postSubmit.events({
    "submit form": function(event) {
        event.preventDefault();

        var post = {
            _id: Meteor.uuid(),
            url: $("[name=url]", event.target).val(),
            title: $('[name=title]', event.target).val(),
            message: $('[name=message]', event.target).val()
        };

        Meteor.call('post', post, function(err, id) {
            if(err) {
                throwError(err.reason);
                if(err.error == 302) {
                    Meteor.Router.to('postPage', err.details);
                }
            }
        });
        
        var pendingPostId = Session.get('pendingPostId');
        Meteor.Router.to('postPage', pendingPostId);
    }
});