jQuery(document).ready(function(){
    //Click event for About
    jQuery('#about-me-tab').on('click',function(){
        console.log('about');
        jQuery('#about-me').show();
        jQuery('#projects').hide();
        jQuery('#contact-me').hide();
    });

    //Click event for Projects
    jQuery('#projects-tab').on('click',function(){
        console.log('projects');
        jQuery('#about-me').hide();
        jQuery('#projects').show();
        jQuery('#contact-me').hide();
    });

    //Click event for Contact Me
    jQuery('#contact-tab').on('click',function(){
        console.log('contact');
        jQuery('#about-me').hide();
        jQuery('#projects').hide();
        jQuery('#contact-me').show();
    });
});