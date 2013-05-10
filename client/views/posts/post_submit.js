Template.postSubmit.events({
    "submit form": function(event) {
        event.preventDefault();

        var post = {
            url: $("[name=url]", event.target).val(),
            title: $('[name=title]', event.target).val(),
            message: $('[name=message]', event.target).val()
        };

        Meteor.call('post', post, function(err, id) {

            if(err) {
                alert(err.reason);
            } else {
                post._id = id;
                Meteor.Router.to('postPage', post);
            }
        });
    }
});