

var addBook = document.getElementById('add-book');


counter = 0;
addBook.addEventListener('click', event => {
    var data = document.getElementById('data');
    var inputData = data.value;
    var bookList = document.getElementById('book-list');

    var listHtml = '<div class="row" id="data'+ counter +'">'+
    '<div class="col-md-6">'+
        '<input type="text" class="form-control" value="'+inputData+'">'+
    '</div>'+
    '<div class="col-sm-2">'+
        '<button type="button" class="btn btn-success">Edit</button>'+
    '</div>'+
    '<div class="col-sm-2">'+
        '<button type="button" class="btn btn-success">Update</button>'+
    '</div>'+
    '<div class="col-sm-2">'+
        '<button type="button" class="btn btn-danger">Delete</button>'+
    '</div>'+
'</div>'
    counter++;
    bookList.insertAdjacentHTML('beforeend', listHtml);
});