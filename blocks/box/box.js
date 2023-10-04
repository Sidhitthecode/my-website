import { createOptimizedPicture } from '../../scripts/lib-franklin.js';

export default function decorate(block) {
    const ul = document.createElement('ul');
    ul.className = 'box';

    [...block.children].forEach((row) => {
        const li = document.createElement('li');
        li.className = 'box-card';

        const icon = document.createElement('i');
        li.appendChild(icon);

        while (row.firstElementChild) li.append(row.firstElementChild);
        [...li.children].forEach((div) => {
            if (div.children.length === 1 && div.querySelector('picture')) {
                div.className = 'box-card-image';
            } else {
                div.className = 'box-card-body';
            }
        });

        ul.append(li);
    });

    ul.querySelectorAll('.box-card-image img').forEach((img) => {
        const picture = img.closest('picture');
        picture.replaceWith(createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }]));
    });

    block.textContent = '';
    block.append(ul);
}