const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

const bookOfMormonBooks = [
    '1 Nephi', '2 Nephi', 'Jacob', 'Enos', 'Jarom', 'Omni',
    'Words of Mormon', 'Mosiah', 'Alma', 'Helaman', '3 Nephi',
    '4 Nephi', 'Mormon', 'Ether', 'Moroni'
];

function isValidBook(input) {
    const bookName = input.replace(/\s*\d+$/, '').trim();
    return bookOfMormonBooks.some(book =>
        book.toLowerCase() === bookName.toLowerCase()
    );
}

function isDuplicate(input) {
    const existingItems = Array.from(list.children);
    return existingItems.some(li =>
        li.textContent.replace('❌', '').trim().toLowerCase() === input.toLowerCase()
    );
}

button.addEventListener('click', function () {
    const value = input.value.trim();

    if (value === '') {
        alert('Please enter a chapter.');
        input.focus();
        return;
    }

    if (!isValidBook(value)) {
        alert('Please enter a valid Book of Mormon book.');
        input.value = '';
        input.focus();
        return;
    }

    if (isDuplicate(value)) {
        alert('This chapter has already been added.');
        input.value = '';
        input.focus();
        return;
    }

    const li = document.createElement('li');
    const deleteButton = document.createElement('button');
    li.textContent = input.value;
    deleteButton.textContent = '❌';

    // Add delete functionality to this specific button
    deleteButton.addEventListener('click', function () {
        list.removeChild(li);
        input.focus();
    });

    li.append(deleteButton);
    list.append(li);

    input.value = '';
    input.focus();
});