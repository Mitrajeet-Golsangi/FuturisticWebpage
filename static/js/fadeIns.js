const sliders = document.querySelectorAll('.slide-in');
const appearOptions = {
    threshold: 0,
    rootMargin: "0% 0% -30% 0%"
}
const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
    entries.forEach(entry => {

        let audio = entry.target.querySelectorAll('audio')[0];

        // Checking if the entry is intersecting don't toggle class

        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            console.log(audio);
            audio.play();
            setTimeout(() => {
                document.getElementsByTagName("img")[0].style.opacity = 0;
            }, 2000);
            appearOnScroll.unobserve(entry.target);
        }
    })
},
    appearOptions);

sliders.forEach(slider => {
    appearOnScroll.observe(slider);
})
