//Timers

// function navdetect() {
//     setTimeout(navdetect2, 400);
// }
//
// function homenavdetect() {
//     setTimeout(homenavdetect2, 350);
// }
//
// //Detectors / change css
// function navdetect2() {
//     $("#home").css("background", "rgba(0,0,0,.4)");
// }
//
// function homenavdetect2() {
//     $("#home").css("background-color", "#03090b");
// }
//
// function autohome() {
//     data = $(event.target).closest('.autodetect').find('#home')
//     $("#home").css("background-color", "#03090b");
//     autohome();
// }

window.onload = function scrollspynav() {
    
    new SmoothScroll('a[href*="#"]');

    const section = document.getElementsByClassName("scrollspy");
    const sections = {};
    let i = 0;
    let c = true;

    [...section].forEach(e => {
        sections[e.id] = e.offsetTop;
    });

    window.onscroll = () => {
        const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
        c = true;
        for (i in sections) {
            if (sections[i] <= scrollPosition + 80) {
                const active = document.getElementsByClassName('active')[0];
                if (active) {
                    active.classList.remove('active');
                }
                document.querySelector('a[href*=' + i + ']').setAttribute('class', 'active', 'navinbody');
                c = false;

                $("#home").css("background", "rgba(0,0,0,.4)");
            }
        }
        if (c) {
            const active = document.getElementsByClassName('active')[0];
            if (active) {
                active.classList.remove('active');
            }
            document.querySelector('a[href*=home]').setAttribute('class', 'active', 'navatheader');

            $("#home").css("background-color", "#03090b");
        }
    }
    autohome();
};




