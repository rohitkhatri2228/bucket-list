
document.addEventListener('DOMContentLoaded', () => {
    const mainImage = document.querySelector('#main-image');
    const thumbnails = document.querySelectorAll('.thumb');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            mainImage.src = thumbnail.src;
        });
    });
});
