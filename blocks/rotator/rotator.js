export default function decorate(block) {
    const container = document.createElement('div');
    container.style.display = "flex";
    container.style.alignItems = "center";

    const beforeText = document.createElement('span');
    beforeText.textContent = "We are Hit The Code, We";
    beforeText.style.marginRight = "10px";
    beforeText.style.fontWeight = "bold";
    const ul = document.createElement('ul');
    ul.style.width = "80px";
    ul.style.height = "50px";
    ul.style.background = "#519d58";
    ul.style.color = "white";
    ul.style.listStyleType = "none";
    ul.style.padding = "0";
    ul.style.display = "flex";
    ul.style.alignItems = "center";
    ul.style.justifyContent = "center";

    const afterText = document.createElement('span');
    afterText.textContent = "Solution";
    afterText.style.marginLeft = "10px";
    afterText.style.fontWeight = "bold";

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
        li.textContent = words[currentIndex];
        currentIndex = (currentIndex + 1) % words.length;
    }

    setInterval(updateText, 1000); // Set an interval to update the text every 1000ms (1 second)

    updateText();
}