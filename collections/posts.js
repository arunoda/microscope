Posts = new Meteor.Collection('posts');

Posts.allow({
    insert: function(userId, doc) {
        return !!userId;
    },
    update: ownsDocument,
    remove: ownsDocument
});

Posts.deny({
    update: function(userId, doc, fieldList) {
        var restFields = _.without(fieldList, 'url', 'title');
        return restFields.length > 0;
    }
});

function ownsDocument(userId, doc) {
    return doc && doc.userId == userId;
}
