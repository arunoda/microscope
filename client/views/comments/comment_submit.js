Template.commentSubmit.events({
    "submit form": function(e) {
        clearErrors();
        e.preventDefault();

        var elBody = $('[name=body]', e.target);
        var body = elBody.val();
        var user = Meteor.user();
        var postId = Session.get('currentPostId');

        if(body && body.trim() != "") {
            Meteor.call('comment', postId, body, function(err) {
                if(err) {
                    throwError(err.reason);
                }
            });
            elBody.val("");
        } else {
            throwError('Please add a comment text!')
        }
    }
});