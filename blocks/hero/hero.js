export default function decorate(block) {
    const container = document.createElement('div');

    // Create the video element
    const video = document.createElement("video");

    video.setAttribute("data-t", "video-lp-hero");
    video.src = "https://drive.google.com/uc?id=1FpMxRRLlKAYvYjCNG3nT9avxb3827me-";
    video.autoplay = true;
    video.loop = true;
    video.controls = true;
    video.className = "your-video-embed-class";

    container.appendChild(video);

    const targetElement = document.querySelector('.hero.block');

    // Check if the target element is found before appending
    if (targetElement) {
        targetElement.appendChild(container);
    } else {
        console.error('Target element not found. Make sure your selector is correct.');
    }
    return container;
}
