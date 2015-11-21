if(Meteor.isClient){
    
    Template.contact.rendered = function() {
        $('.materialboxed').materialbox();
         $('.modal-trigger').leanModal();
         new Clipboard('.btn');
    }
}