class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
  
  changeReadStatus() {
    this.read = !this.read;
  }
}

class Library {
  constructor() {
    let bookEx = new Book('some title','some author','555','Not Read')
    this.books = [bookEx];
    
    this.bookDisplay = document.getElementById("bookdisplay");
    this.tableBody = document.getElementById("tabody");
    this.mainForm = document.getElementById("mainform");
    this.submitButton = document.getElementById("submit");
    this.submitButton.addEventListener("click", this.submitBook.bind(this));
    this.displayBooks();
    
  }
  
  changeBoolStatement(varr) {
    return varr ? "Read" : "Not Read";
  }
  
  submitBook() {
    const formTitle = document.getElementById("formtitle").value;
    const formAuthor = document.getElementById("formauthor").value;
    const formPages = document.getElementById("formpages").value;
    const formRead = document.getElementById("formread").checked;
    const hasRead = this.changeBoolStatement(formRead);
  
    if (formTitle == "" || formAuthor == "" || formPages == "") {
      return;
    }
  
    const bookSubmit = new Book(formTitle, formAuthor, formPages, hasRead);
    this.addBookToLibrary(bookSubmit);
    this.displayBooks();
    this.mainForm.reset();
  }
  
  addBookToLibrary(book) {
    this.books.push(book);
  }
  
  getRid(element) {
    element.parentElement.parentElement.remove();
  }
  
  changeStatus(element) {
    const readElement = element.parentElement.parentElement.querySelector('.Read');
    
    if (readElement.textContent === "Read") {
      readElement.textContent = "Not Read";
    } else {
      readElement.textContent = "Read";
    }
  }
  
  displayBooks() {
    this.tableBody.innerHTML = "";
    
    for (let i = 0; i < this.books.length; i++) {
      const book = this.books[i];
      
      const newBook = document.createElement("tr");
      newBook.className = "book";
      
      const title = document.createElement("td");
      title.className = "Title";
      title.textContent = book.title;
      newBook.appendChild(title);
      
      const author = document.createElement("td");
      author.className = "Author";
      author.textContent = book.author;
      newBook.appendChild(author);
      
      const pages = document.createElement("td");
      pages.className = "Pages";
      pages.textContent = book.pages;
      newBook.appendChild(pages);
      
      const read = document.createElement("td");
      read.className = "Read";
      read.textContent = book.read;
      newBook.appendChild(read);
      
      const buttons = document.createElement("td");
      buttons.className = "Buttons";
      newBook.appendChild(buttons);
      
      const editReadStatus = document.createElement("button");
      editReadStatus.className = "EditReadStatus";
      editReadStatus.textContent = "Change Read Status";
      editReadStatus.addEventListener("click", this.changeStatus.bind(this, editReadStatus));
      buttons.appendChild(editReadStatus);
      
      const deleteButton = document.createElement("button");
      deleteButton.className = "Delete";
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", this.getRid.bind(this, deleteButton));
      buttons.appendChild(deleteButton);
      
      this.tableBody.appendChild(newBook);
    }
  }
}

const library = new Library();

//start with table new book = new tr each new info = td