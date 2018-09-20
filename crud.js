var avalBooks = [
    {
        name: "Thinking Fast and Slow"

    },
    {
        name: "Godan"
    },
];

function displayBook(arr) {
    arr.forEach(item => {

    })
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
    console.log(avalBooks);
})



// counter = 0;
// addBook.addEventListener('click', event => {
//     var data = document.getElementById('data');
//     var inputData = data.value;
//     var bookList = document.getElementById('book-list');

//     var listHtml = '<div class="row" id="data'+ counter +'">'+
//     '<div class="col-md-6">'+
//         '<input type="text" class="form-control" value="'+inputData+'">'+
//     '</div>'+
//     '<div class="col-sm-2">'+
//         '<button type="button" class="btn btn-success" id="edit'+counter+'">Edit</button>'+
//     '</div>'+
//     '<div class="col-sm-2">'+
//         '<button type="button" class="btn btn-success" id="update'+counter+'">Update</button>'+
//     '</div>'+
//     '<div class="col-sm-2">'+
//         '<button type="button" class="btn btn-danger" id="delete'+counter+'">Delete</button>'+
//     '</div>'+
// '</div>'
//     counter++;
//     bookList.insertAdjacentHTML('beforeend', listHtml);
//     data.value = "";
// });

