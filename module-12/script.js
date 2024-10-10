// Array of top 10 books without any numbering
const books = [
    "The Body Keeps the Score",
    "I Have No Mouth but I Must Scream",
    "A Gathering of Shadows",
    "Two Twisted Crowns",
    "One Dark Window",
    "The Book of Azrael",
    "Quicksilver",
    "Fourth Wing",
    "Iron Flame",
    "Onyx Storm"
];

// Function to display books from top to bottom (ascending order)
function displayTopToBottom() {
    const bookList = document.getElementById('bookList');
    bookList.innerHTML = ''; // Clear the current list
    books.forEach(function(book, index) {
        let listItem = document.createElement('li');
        listItem.textContent = `${index + 1}. ${book}`; // Add dynamic numbering
        bookList.appendChild(listItem);
    });
}

// Function to display books from bottom to top (descending order)
function displayBottomToTop() {
    const bookList = document.getElementById('bookList');
    bookList.innerHTML = ''; // Clear the current list
    books.slice().reverse().forEach(function(book, index) {
        let listItem = document.createElement('li');
        listItem.textContent = `${books.length - index}. ${book}`; // Reverse the numbering
        bookList.appendChild(listItem);
    });
}

// Automatically display the list in ascending order when the page loads
window.onload = displayTopToBottom;
