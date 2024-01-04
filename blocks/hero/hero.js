export default function decorate(block) {
    const container = document.createElement('div');
    container.className = 'hero block';

    // Create the video element
    const video = document.createElement("iframe");

    video.setAttribute("data-t", "video-lp-hero");
    video.src = "https://drive.google.com/file/d/1sEg72ZXafxSgr6lIL0EQ8DfoYklg0ptw/preview";
    video.allow = "autoplay; fullscreen; encrypted-media; picture-in-picture";
    video.muted = true;
    video.allowFullscreen = true;
    video.className = "your-video-embed-class";

    container.appendChild(video);
    const textOverlay = document.createElement('div');
    textOverlay.className = 'text-overlay';
    textOverlay.innerHTML = '<h1>Hit the code</h1>';

    container.appendChild(textOverlay);
    document.body.appendChild(container);

    const targetElement = document.querySelector('.hero.block');

    if (targetElement) {
        targetElement.appendChild(container);
    } else {
        console.error('Target element not found. Make sure your selector is correct.');
    }
    return container;
}
