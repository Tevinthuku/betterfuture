if (Meteor.isClient) {

}

if (Meteor.isServer) {

}


// main ytemplate

Router.route('/', {
    name: 'home',
    template: 'home'
});


//layout template
Router.configure({
    layoutTemplate: 'main'
});


// the vision template
Router.route('/vision');

// route for the work template

Router.route('/work');

// route for the contact page

Router.route('/contact');