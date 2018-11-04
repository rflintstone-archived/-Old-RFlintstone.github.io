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

// My JS knowledge is limited but I know the basics of it. -Ruben

(function scrollspynav() {

    new SmoothScroll('a[href*="#"]'); // <-- Will look for an idea with this prefix within CSS to eventually execute functions below

    const section = document.getElementsByClassName("scrollspy"); // Needs class scrollspy to execute this script
    const home = document.getElementById("home");

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
                const active = document.getElementsByClassName('active')[0]; // Wants to look for and eventually add class active (specified in style.css) so it can add the color and italic text)
                if (active) {
                    active.classList.remove('active'); //removes class active when needed
                }
                document.querySelector('a[href*=' + i + ']').setAttribute('class', 'active', 'navinbody'); //adds classes when needed
                c = false;

                home.style.backgroundColor = "rgba(0,0,0,.4)";
            }
        }
        if (c) {
            const active = document.getElementsByClassName('active')[0];
            if (active) {
                active.classList.remove('active');
            }
            document.querySelector('a[href*=home]').setAttribute('class', 'active', 'navatheader'); //Will add classes when needed

            home.style.backgroundColor = "#03090b";
        }
    }
})();
