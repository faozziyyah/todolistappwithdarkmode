
//changing to dark mode

document.getElementById("first").addEventListener("click", function(){
  // alert("I got clicked");
  document.querySelector(".todoheading").classList.toggle("todoheadingdark");
  document.querySelector(".background").classList.toggle("backgrounddark");
  document.querySelector("body").classList.toggle("bodydark");
  document.querySelector(".options").classList.toggle("optionsdark");
  document.querySelector(".extras").classList.toggle("extrasdark");
  document.querySelector(".extra").classList.toggle("extradark");
  document.querySelector(".todolist-main").classList.toggle("todolist-maindark");
  document.querySelector(".addBtn").classList.toggle("addBtndark");
  //document.querySelectorAll("li").forEach(element => { 
 //   element.classList.toggle("todolist-maindarkli")});  
  //document.querySelectorAll("li").classList.add("todolist-maindarkli");
  document.querySelector(".checked").classList.toggle("checkeddark");
  document.querySelector(".second").classList.toggle("seconddark");
  document.querySelector(".second label").classList.toggle("seconddarklabel");
  document.querySelector(".attribution").classList.toggle("attributiondark");
  document.querySelector("input").classList.toggle("tododark");
}); 

//document.getElementById("first").addEventListener("click", function(){
 // var listItems = document.getElementsByClassName("list");
//  for (var i = 0; i < listItems.length; i++) {
  //  listItems[i].classList.toggle("todolist-maindarkli");
//  }
//});

// Create a "close" button and append it to each list item
var addCloseBtn = document.getElementsByTagName("LI");
var i;
for (i = 0; i < addCloseBtn.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  addCloseBtn[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector  ('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
 }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("mytodo").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("mytodo").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

   //clear all items from the list

document.getElementById("clear").addEventListener('click', function(){

    //alert("I got clicked");
    document.querySelectorAll("LI").hide();
    /*todoItems = [];
    localStorage.clear();
    getList(todoItems);*/
})