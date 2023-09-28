export default function decorate(block) {
    const container = document.createElement('div');
    container.classList.add('rotator-container');

    const beforeText = document.createElement('span');
    beforeText.textContent = "We are Hit The Code, We";
    beforeText.classList.add('before-text');

    const ul = document.createElement('ul');
    ul.classList.add('rotator-ul');

    const afterText = document.createElement('span');
    afterText.textContent = "Solution";
    afterText.classList.add('after-text');

    const li = document.createElement('li');
    li.textContent = "Find";
    ul.appendChild(li);

    container.appendChild(beforeText);
    container.appendChild(ul);
    container.appendChild(afterText);
    block.append(container);

    const words = ["Find", "Build", "Deliver"];
    let currentIndex = 0;

    function updateText() {
        ul.style.width = "0"; // Reduce the width to zero
        setTimeout(() => {
            li.textContent = words[currentIndex];
            currentIndex = (currentIndex + 1) % words.length;
            ul.style.width = "80px"; // Restore the width
        }, 300); // Set a timeout to change the text and restore the width after 300ms (0.3s)
    }

    setInterval(updateText, 1000); // Set an interval to update the text every 1000ms (1 second)

    updateText();
}
