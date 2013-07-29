Comments = new Meteor.Collection('comments');

Comments.allow({
    remove: function() {
        return true;
    }
});