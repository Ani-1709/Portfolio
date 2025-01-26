document.addEventListener('DOMContentLoaded', () => {
    const options = {
        strings: ["a Software Developer", "a Frontend Developer", "a UI/UX Designer"],
        typeSpeed: 50, // Speed of typing
        backSpeed: 45, // Speed of erasing
        backDelay: 1500, // Delay before backspacing
        loop: true // Keep looping through the strings
    };

    new Typed(".text", options);
});
