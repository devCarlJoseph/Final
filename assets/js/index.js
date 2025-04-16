const header = document.getElementById('headerContent');
const headerOpen = document.getElementById('headerButton');
const headerClose = document.getElementById('headerClose');

headerOpen.addEventListener("click", () => {
    header.classList.remove('hidden');
})

headerClose.addEventListener("click", () => {
    header.classList.add('hidden');
})

// const faq = document.getElementById('faqContent');
// const faqTwo = document.getElementById('faqContentTwo');
// const faqThree = document.getElementById('faqContentThree');
// const faqFour = document.getElementById('faqContentFour');
// const faqOpen = document.getElementById('faqOpen');
// const faqOpenTwo = document.getElementById('faqOpenTwo');
// const faqOpenThree = document.getElementById('faqOpenThree');
// const faqOpenFour = document.getElementById('faqOpenFour');

// faqOpen.addEventListener("click", () => {
//     faqOpen.classList.toggle('fa-plus');
//     faqOpen.classList.toggle('fa-minus');
//     faq.classList.toggle('hidden');
// });

// faqOpenTwo.addEventListener("click", () => {
//     faqOpenTwo.classList.toggle('fa-plus');
//     faqOpenTwo.classList.toggle('fa-minus');
//     faqTwo.classList.toggle('hidden');
// });

// faqOpenThree.addEventListener("click", () => {
//     faqOpenThree.classList.toggle('fa-plus');
//     faqOpenThree.classList.toggle('fa-minus');
//     faqThree.classList.toggle('hidden');
// });

// faqOpenFour.addEventListener("click", () => {
//     faqOpenFour.classList.toggle('fa-plus');
//     faqOpenFour.classList.toggle('fa-minus');
//     faqFour.classList.toggle('hidden');
// });

$(document).ready(function() {
    $('.js-faq-btn').on('click', function(e) {
        e.preventDefault();

        const changeIcon = $(this);
        const content = changeIcon.data('content');

        changeIcon.toggleClass('fa-plus fa-minus');

        $('.' + content).toggleClass('hidden');
    });
});


$(document).ready(function () {
    $('.video-btn').on('click', function(e) {
        e.preventDefault();

        const video = $(this).attr('video-content');    
        $('.' + video).toggleClass('hidden');
    });

    $('.v-close-btn').on('click', function(e) {
        e.preventDefault();

        const closeVideo = $(this).attr('video-close');
        $('.' + closeVideo).toggleClass('hidden');
    })
});



