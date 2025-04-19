const header = document.getElementById('headerContent');
const headerOpen = document.getElementById('headerButton');
const headerClose = document.getElementById('headerClose');

headerOpen.addEventListener("click", () => {
    header.classList.remove('hidden');
})

headerClose.addEventListener("click", () => {
    header.classList.add('hidden');
})

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



