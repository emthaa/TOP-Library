let bookdisplay = document.getElementById("bookdisplay")
let tabody = document.getElementById("tabody")
let mainform = document.getElementById("mainform")
let submit = document.getElementById("submit")


function changeBoolStatement(varr){
  return varr ? "Read" : "Not Read";
}


function SubmitFunction(){
  let formtitle = document.getElementById("formtitle").value
  let formauthor = document.getElementById("formauthor").value
  let formpages = document.getElementById("formpages").value
  let formread = document.getElementById("formread").checked
  let HasRead = changeBoolStatement(formread)
  
  if (formtitle == "" ||  formauthor == "" || formpages == ""){
    return
  }
  
  console.log(formtitle,formauthor,formpages,HasRead);
  MyLibraryPlaceHolder = myLibrary;
  myLibrary = [];

  let BookSubmit = new Book(formtitle,formauthor,formpages,HasRead);
  addBookToLibrary(BookSubmit);
  displayBooks(myLibrary);

  mainform.reset();
}

function Book(title,author,pages,read) {
  
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  
}

function addBookToLibrary(book) {
  
  return myLibrary.push(book);
  
}

function GetRid(){
  
  this.parentElement.parentElement.remove()
  
}

function ChangeStatus(){
  
  if (this.parentElement.parentElement.querySelector('.Read').textContent == "Read"){
    
      this.parentElement.parentElement.querySelector('.Read').textContent = "Not Read";
    
    } else {
    
      this.parentElement.parentElement.querySelector('.Read').textContent = "Read"
    
    }
}

function displayBooks(arr){
  for(let i = 0; i < arr.length; i++){
    newBook = document.createElement("tr");
    
    newBook.className = "book";
    
    bookdisplay.appendChild(newBook)
    
    Title = document.createElement("td");
    Author = document.createElement("td");
    Pages = document.createElement("td");
    Read = document.createElement("td");
    Buttons = document.createElement("td");
    EditReadStatus = document.createElement("button")
    Delete = document.createElement("button");

    Title.className = "Title";
    Author.className = "Author";
    Pages.className = "Pages";
    Read.className = "Read";
    Buttons.className = "Buttons"
    EditReadStatus.className = "EditReadStatus";
    Delete.className = "Delete";

    
    Title.textContent = arr[i].title
    Author.textContent = arr[i].author
    Pages.textContent = arr[i].pages
    Read.textContent = arr[i].read
    EditReadStatus.textContent = "Change Read Status"
    Delete.textContent = "Delete"

    Delete.addEventListener("click" , GetRid)
    EditReadStatus.addEventListener("click", ChangeStatus)
    
    newBook.appendChild(Title)
    newBook.appendChild(Author)
    newBook.appendChild(Pages)
    newBook.appendChild(Read)
    newBook.appendChild(Buttons)
    Buttons.appendChild(EditReadStatus)
    Buttons.appendChild(Delete)
    tabody.appendChild(newBook)
    
  }
}


testBook = new Book("The Hobbit","J.R.R. Tolkien","300","Not Read")
testBook2 = new Book("title","author","pages","Read")

let myLibrary = [testBook];

displayBooks(myLibrary)



//start with table new book = new tr each new info = td