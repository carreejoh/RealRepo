const circularBar = document.querySelectorAll('.favSkills');

// const circularBar1 = document.querySelector('#circularSkills1');
// const circularBar2 = document.querySelector('#circularSkills2');
// const circularBar3 = document.querySelector('#circularSkills3');
// const circularBar4 = document.querySelector('#circularSkills4');



const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

circularBar.forEach((el) => observer.observe(el));