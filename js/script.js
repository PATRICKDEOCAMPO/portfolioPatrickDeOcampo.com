/* TYPE JS */
const typed = new Typed('.multiple-text', {
    strings: ['👨‍💻Front-End Web Developer', '🌐Network Administrator', '🦹‍♂️System Administrator', '🚀Graphic Designer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 100,
    loop: true
});

const typed1 = new Typed('.multiple-text-hireMe', {
    strings: ['🤖Hire Me', '🌝Hire Me', '🛰️Hire Me', '🛸Hire Me'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 100,
    loop: true
});

const typed2 = new Typed('.multiple-text-downloadCV', {
    strings: ['📝Download CV', '👨‍⚕️Download CV', '📲Download CV', '🚀Download CV'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 100,
    loop: true
});

/* SCROLL REVEAL JS */
ScrollReveal({ 
    reset: true,
    distance: '90px',
    duration: '900',
    delay: 500
});
/* HOME SECTION SCROLL */
ScrollReveal().reveal('#home div h1, h2, p, #home div a i', {origin: 'top'});
ScrollReveal().reveal('#home div a i', {origin: 'left'});
ScrollReveal().reveal('#home div img', {origin: 'right'});
ScrollReveal().reveal('#home button', {origin: 'right'});

/* ABOUT SECTION SCROLL */
ScrollReveal().reveal('#about h1, #about .lead', {origin: 'top'});
ScrollReveal().reveal('#about .lead', {origin: 'left'});
ScrollReveal().reveal('#about img', {origin: 'right'});


/* EXPERIENCE SECTION SCROLL */

// ScrollReveal().reveal('#experience div .card', {origin: 'bottom', reset: true, distance: '90px', duration: '1000', delay: 400}); 
// scroll reveal for experience div .card disable due to hovering issue..

ScrollReveal().reveal('#experience div .card-header .networkAdministration', {origin: 'left'});
ScrollReveal().reveal('#experience div .card-header .ITOperations', {origin: 'top'});
ScrollReveal().reveal('#experience div .card-header .webDevelopment', {origin: 'right'});
ScrollReveal().reveal('#experience div .card-header .ITSystemAdministration', {origin: 'left'});
ScrollReveal().reveal('#experience div .card-header .graphicDesign', {origin: 'right'});

ScrollReveal().reveal('#experience div .card-body', {origin: 'bottom', reset: true, distance: '90px', duration: '1500', delay: '800'});

ScrollReveal().reveal('#experience div .card-footer .networkAdministration', {origin: 'left'});
ScrollReveal().reveal('#experience div .card-footer .ITOperations', {origin: 'bottom'});
ScrollReveal().reveal('#experience div .card-footer .webDevelopment', {origin: 'right'});
ScrollReveal().reveal('#experience div .card-footer .ITSystemAdministration', {origin: 'left'});
ScrollReveal().reveal('#experience div .card-footer .graphicDesign', {origin: 'right'});

/* CONTACT SECTION SCROLL */
ScrollReveal().reveal('#contact h1', {origin: 'top'}); // contact me header
ScrollReveal().reveal('#contact div .fullName', {origin: 'left'}); // class: fullName
ScrollReveal().reveal('#contact div .emailAddress', {origin: 'right'}); // class: emailAddress
ScrollReveal().reveal('#contact div .mobileNumber', {origin: 'left'}); // class: mobileNumber
ScrollReveal().reveal('#contact div .aaddress', {origin: 'right'}); // class: aaddress
ScrollReveal().reveal('#contact div .my-1', {origin: 'bottom'}); // for textarea
ScrollReveal().reveal('#contact div .my-3', {origin: 'bottom'}); // for submit button








 
