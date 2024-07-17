document.addEventListener('DOMContentLoaded', function () {
    const fypItems = document.querySelectorAll('.fyp-item');

    fypItems.forEach(item => {
        const title = item.querySelector('.fyp-title');
        const content = item.querySelector('.fyp-content');

        title.addEventListener('click', function () {
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
        });
    });
});
