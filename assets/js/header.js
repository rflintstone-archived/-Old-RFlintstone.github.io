//Scrollspy

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

// End Scrollspy

// Typewriter

var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 4000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function() {
        that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    css.innerHTML = ".typewrite > .wrap { text-align: center;}";
    document.body.appendChild(css);
};

// End Typewriter