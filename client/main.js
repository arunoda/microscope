Template.hello.greeting = function() {
    return "Hello World to Microscope!";
};

Template.hello.events({
    'click input': function() {
        console.log("You clicked a button via Microscope");        
    }
});