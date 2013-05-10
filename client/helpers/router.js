Meteor.Router.add({
    "/": "postsList",
    "/posts/:_id": {
        to: "postPage",
        and: function(id) {
            Session.set('currentPostId', id);
        }
    },
    "/posts/:_id/edit": {
        to: "postEdit",
        and: function(id) {
            Session.set('currentPostId', id);
        }
    },
    "/submit": "postSubmit"
});

Meteor.Router.filters({
    "checkLogin": function(page) {
        if(Meteor.userId()) {
            return page;
        } else if(Meteor.loggingIn()) {
            return "loading";
        } else {
            return "accessDenied";
        }
    }
});

Meteor.Router.filter("checkLogin", {only: "postSubmit"});