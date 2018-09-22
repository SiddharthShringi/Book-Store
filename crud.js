var avalBooks = JSON.parse(localStorage.getItem('booklist')) || [
    {
        name: "Thinking Fast and Slow",
        edit: false

    },
    {
        name: "Godan",
        edit: false
    },
];


var avalBookString = JSON.stringify(avalBooks);
localStorage.setItem('booklist', avalBookString);

var bookList = document.getElementById('book-list');
function displayBook(arr) {
    var allListItems = ''
    arr.forEach((item, i) => {
        allListItems += `<div class="row" id="data${i}">
                        <div class="col-md-6">
                            <input id="input${i}" type="text" class="form-control" data-id=${i} value="${item.name}"${item.edit ? "" : "disabled"}>
                        </div>
                        <div class="col-sm-2">
                            <button type="button" class="edit btn btn-success" data-id=${i} id="edit${i}">Edit</button>
                        </div>
                        <div class="col-sm-2">
                            <button type="button" class="update btn btn-success" data-id=${i} id="update${i}">Update</button>
                        </div>
                        <div class="col-sm-2">
                            <button type="button" class="btn btn-danger" data-id=${i} id="delete${i}">Delete</button>
                        </div>
                    </div>`
    })
    bookList.innerHTML = allListItems;
    deleteItem();
}

// Function to capitalize each word in string
function titleCase(str) {
    return str.toLowerCase().split(' ').map(x=>x[0].toUpperCase()+x.slice(1)).join(' ');
}

//Add new book to array
var addBook = document.getElementById('add-book');
addBook.addEventListener('click', event => {
    var newBook = {}
    var data = document.getElementById('data');
    var inputData = data.value;
    newBook.name = inputData;
    newBook.edit = false;

    avalBooks.push(newBook);
    avalBookString = JSON.stringify(avalBooks);
    localStorage.setItem('booklist', avalBookString);
    displayBook(avalBooks);
    data.value = "";
})

displayBook(avalBooks);

//Delete
function deleteItem() {
    var deleteBooks = document.querySelectorAll('.btn-danger');

    deleteBooks.forEach(item => {
        item.addEventListener('click', event => {
            var deleteItemIndex = event.currentTarget.getAttribute('data-id');
            avalBooks.splice(deleteItemIndex, 1);
            avalBookString = JSON.stringify(avalBooks);
            localStorage.setItem('booklist', avalBookString);
            displayBook(avalBooks);
        })
    })
}
  
// Search Field
var searchField = document.getElementById("search-field");

searchField.addEventListener("keydown", event => {
    var searchString = event.target.value.toLowerCase();

    var searchResult = [];
    for(let i=0; i<avalBooks.length; i++) {
        const bookId = avalBooks[i].name.toLowerCase();
        
        if (bookId.includes(searchString)) {
            var searchBook = {};
            searchBook.name = titleCase(bookId);
            searchResult.push(searchBook);
        }
    }
    displayBook(searchResult);
})


// Edit
function editItem(e) {
    if(e.target.className !== "edit btn btn-success") return;
    var id = e.target.dataset.id;
    avalBooks[id].edit = !avalBooks[id].edit;
    avalBookString = JSON.stringify(avalBooks);
    localStorage.setItem('booklist', avalBookString);
    displayBook(avalBooks);

}

//Update
function updateItem(e) {
    if(e.target.className !== "update btn btn-success") return;
    var id = e.target.dataset.id;
    var inputVal = document.getElementById(`input${id}`);

    avalBooks[id].name = inputVal.value;
    avalBooks[id].edit = !avalBooks[id].edit;
    avalBookString = JSON.stringify(avalBooks);
    localStorage.setItem('booklist', avalBookString);
    displayBook(avalBooks);

}

bookList.addEventListener('click', editItem)
bookList.addEventListener('click', updateItem)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            