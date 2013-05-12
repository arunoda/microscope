Template.comment.helpers({
    submittedText: function() {
        var date = new Date(this.submitted);
        return date.toString();
    }
});