var avalBooks = [
    {
        name: "Thinking Fast and Slow"

    },
    {
        name: "Godan"
    },
];

var avalBookString = JSON.stringify(avalBooks);
localStorage.setItem('booklist', avalBookString);

var currentAvalBooks = JSON.parse(localStorage.getItem('booklist')) || avalBooks

var bookList = document.getElementById('book-list');
function displayBook(arr) {
    var allListItems = ''
    arr.forEach((item, i) => {
        allListItems += '<div class="row" id="data'+ i +'">'+
                        '<div class="col-md-6">'+
                            '<input type="text" class="edit form-control" data-id="'+i+'" value="'+item.name+'"disabled>'+
                        '</div>'+
                        '<div class="col-sm-2">'+
                            '<button type="button" class="btn btn-success" data-id="'+i+'" id="edit'+i+'">Edit</button>'+
                        '</div>'+
                        '<div class="col-sm-2">'+
                            '<button type="button" class="btn btn-success" data-id="'+i+'" id="update'+i+'">Update</button>'+
                        '</div>'+
                        '<div class="col-sm-2">'+
                            '<button type="button" class="btn btn-danger" data-id="'+i+'" id="delete'+i+'">Delete</button>'+
                        '</div>'+
                    '</div>'
    })
    bookList.innerHTML = allListItems;
    deleteItem();

}

//Add new book to array
var addBook = document.getElementById('add-book');
counter = 0;
addBook.addEventListener('click', event => {
    var newBook = {}
    var data = document.getElementById('data');
    var inputData = data.value;
    newBook.name = inputData;

    avalBooks.push(newBook);
    displayBook(avalBooks);
    data.value = "";
})

displayBook(avalBooks);



function deleteItem() {
    var deleteBooks = document.querySelectorAll('.btn-danger');

    deleteBooks.forEach(item => {
        item.addEventListener('click', event => {
            var deleteItemIndex = event.currentTarget.getAttribute('data-id');
            avalBooks.splice(deleteItemIndex, 1);
            displayBook(avalBooks);
        })
    })
}


// function firstUpper()

var searchField = document.getElementById("search-field");

searchField.addEventListener("keydown", event => {
    var searchString = event.target.value.toLowerCase();

    var searchResult = [];
    for(let i=0; i<avalBooks.length; i++) {
        const bookId = avalBooks[i].name.toLocaleLowerCase();
        
        if (bookId.includes(searchString)) {
            var searchBook = {};
            searchBook.name = bookId.toLocaleUpperCase();
            searchResult.push(searchBook);
        }
    }
    displayBook(searchResult);
})
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            