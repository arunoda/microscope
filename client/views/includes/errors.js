Template.errors.helpers({
    errors: function() {
        return Errors.find();
    }
});

Template.error.rendered = function() {
    var error = this.data;
    
    Errors.update(error, {$set: {seen: true}});
};