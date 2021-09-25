const sliders = document.querySelectorAll('.slide-in');
const appearOptions = {
    threshold: 0,
    rootMargin: "0% 0% -30% 0%"
}

const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
    entries.forEach(entry => {
        // Checking if the entry is intersecting don't toggle class
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    })
},
    appearOptions);

sliders.forEach(slider => {
    appearOnScroll.observe(slider);
})

// Audio effects
const audio = document.getElementById("fade-audio-top-1");

document.getElementById("fade-img-top-1").onmouseover = () => audio.play();
