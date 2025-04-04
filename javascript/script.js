document.addEventListener("DOMContentLoaded", function () {
    const observers = document.querySelectorAll('.home-wrapper, .home-wrapperReverse');

    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                obs.unobserve(entry.target);
            }
        });
    }, observerOptions);

    observers.forEach(section => {
        observer.observe(section);
    });
});
