

var siteNameInput = document.getElementById('siteNameInput');
var siteUrlInput = document.getElementById('siteUrlInput');
var tableBody = document.getElementById('tableBody');



var bookContainer ;
if(localStorage.getItem('myBookmarker') != null){
    bookContainer=JSON.parse(localStorage.getItem('myBookmarker'));
diplayBook(bookContainer);
}else bookContainer = []

function addBook() {
    var book = {
        websiteName: siteNameInput.value,
        siteUrl: siteUrlInput.value,
    }
if(valid(book)){
    bookContainer.push(book);
    localStorage.setItem('myBookmarker' ,JSON.stringify(bookContainer));
    console.log(bookContainer);
    clearForm();
    diplayBook (bookContainer);
}else{
    alert('ex:https://ex.com')
}
}

function clearForm() {
    siteNameInput.value = '';
    siteUrlInput.value = '';
}


function diplayBook (bookContainer){
    var cont ='';
for (var i=0 ; i< bookContainer.length ;i++){
  cont+=
   `<tr>
              
    <td>${i+1}</td>
    <td>` + bookContainer[i].websiteName + `</td>
    <td><a type = "button" class="btn btn-success" id"visit" onclick="visitUrl(${i})"> <i class="fa-solid fa-eye"></i> visit </a></td>
    <td><button onclick="deleteBokk(${i});" class="btn btn-danger"> <i class="fa-solid fa-trash"></i> Delete</button></td>
  </tr>`
      
}
tableBody.innerHTML=cont;
}

function visitUrl(index){
    window.open(bookContainer[index].siteUrl);
}


function deleteBokk(deleteIndex){
    bookContainer.splice(deleteIndex,1);
    localStorage.setItem('myBookmarker' ,JSON.stringify(bookContainer));
    diplayBook(bookContainer);
}


function valid(book){

    if( /^(ftp|http|https):\/\/[^ "]+$/.test(book.siteUrl) ){
      return true

    }else{
        return false
    }
   
   

}

