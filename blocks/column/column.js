export default function decorate(block) {
    // Create a container element dynamically
    const container = document.createElement('div');
    container.classList.add('column-container'); // Add a class to the container for styling

    // Your existing column setup code
    const cols = [...block.firstElementChild.children];
    block.classList.add(`column-${cols.length}-cols`);

    // setup image column
    [...block.children].forEach((row) => {
        [...row.children].forEach((col) => {
            const pic = col.querySelector('picture');
            if (pic) {
                const picWrapper = pic.closest('div');
                if (picWrapper && picWrapper.children.length === 1) {
                    // picture is only content in column
                    picWrapper.classList.add('column-img-col');
                }
            }
        });
    });

    // Create an iframe element for the map
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10110.29127397713!2d10.9073126!3d50.6907539!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ad587f15369341%3A0x77a0cbf69e2eca6!2shit%20the%20code%20GmbH!5e0!3m2!1sen!2sde!4v1696245424052!5m2!1sen!2sde`;
    iframe.width = '100%'; // Set width
    iframe.height = '400'; // Set height (you can adjust this as needed)
    iframe.frameborder = '0'; // Remove border
    iframe.allowfullscreen = ''; // Enable fullscreen mode
    iframe.setAttribute('aria-hidden', 'false'); // Accessibility attribute
    iframe.title = 'Google Map'; // Set a title for accessibility

    // Append the iframe to the container
    container.appendChild(iframe);

    // Append the columns and map container to the block
    cols.forEach((col) => {
        container.appendChild(col);
    });
    block.textContent = '';
    block.append(container);
}