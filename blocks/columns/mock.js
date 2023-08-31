export default function decorate(block) {
    // Stub: Get the columns from the block's first child element
    const cols = [...block.firstElementChild.children];

    // Stub: Add a class to the block based on the number of columns
    block.classList.add(`columns-${cols.length}-cols`);

    // Stub: Loop through each row and column in the block
    [...block.children].forEach((row) => {
        [...row.children].forEach((col) => {
            const pic = col.querySelector('picture');
            if (pic) {
                const picWrapper = pic.closest('div');

                // Stub: Check if the picture is the only content in the column and add a class
                if (picWrapper && picWrapper.children.length === 1) {
                    picWrapper.classList.add('columns-img-col');
                }
            }
        });
    });
}
