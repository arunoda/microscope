var posts = [
    {
        title: "Arunoda's Home Page",
        author: "Arunoda Susiripala",
        url: "http://arunoda.me"
    },
    {
        title: 'Introducing Telescope',
        author: 'Sacha Greif',
        url: 'http://sachagreif.com/introducing-telescope/'
    }, 
    {
        title: 'Meteor',
        author: 'Tom Coleman',
        url: 'http://meteor.com'
    }, 
    {
        title: 'The Meteor Book',
        author: 'Tom Coleman',
        url: 'http://themeteorbook.com'
    }
];

Template.postsList.helpers({
    posts: posts
});