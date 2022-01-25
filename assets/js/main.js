

    function submit_search(){
        setTimeout(()=>{window.location = `/q.html?name=${el.value}`;}, 2500)
        const el = document.getElementById('call-to-action-input');
        console.time();


        // title ------------------------------------------------------------------------
        gsap.to(".title", {duration:.75,  opacity:0,  x: -200,  ease: "ease.in(0.7, 0.7, false)"})
        gsap.to(".subtitle-description", { delay:0.75, duration: .75, opacity:0, x:-100, ease: "ease.in(1, 1, false)", stagger: 0.20})
    // ------------------------------------------------------------------------ title

    // search ----------------------------------------------------------------------
        gsap.to("#call-to-action-btn", { delay:1.5, duration: .75, x:-100, opacity:0,  ease: "ease.in(0.2, 1, false)"})
        gsap.to("#call-to-action-input", { delay:1.5, duration: .75,  x:100, opacity:0, ease: "ease.in(0.2, 1, false)"})
    // logo ------------------------------------------------------------------------
        gsap.to(".logo-item", {duration: 1.0, opacity:0., y:-100, ease: "ease.in(0.7, 0.7, false)", stagger: 0.2})
    // ------------------------------------------------------------------------ logo
        var navLink = Array.prototype.slice.call(document.querySelectorAll(".nav-link")).reverse();

        gsap.to(navLink, { delay:0.25, duration: .75,  y:-100, opacity:0, ease: "ease.in(0.2, 1, false)", stagger: .1})
        
    // ---------------------------------------------------------------------- search

        console.log(console.timeEnd());
    }