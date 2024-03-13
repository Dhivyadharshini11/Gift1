function openBox() {
    const lid = document.getElementById('lid');
    const boxBody = document.getElementById('boxBody');
    const giftImage = document.getElementById('giftImage');

    // Simulate opening animation
    lid.style.transform = 'rotateX(-90deg)';
    boxBody.style.opacity = '0';

    // Replace "your-image.jpg" with the path to your desired image
    setTimeout(() => {
        giftImage.src = "gift1.jpg";
    }, 500); // Set a timeout to change the image after the animation is complete

    // Simulate closing animation after a delay
    setTimeout(() => {
        lid.style.transform = 'rotateX(0)';
        boxBody.style.opacity = '1';
    }, 1000); // Adjust the timing as needed
}
