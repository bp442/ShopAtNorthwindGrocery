"use strict";
let searchDropdown = document.getElementById("searchDropdown");
let productDropdown = document.getElementById("categoryDropdown")
let categoryArray = [];

window.onload = ()=>{
    searchDropdown.onchange = searchChange;
}

 function searchChange(){
    productDropdown.style = "display: visible";

    if(searchDropdown.value == "categorySearch"){
        fetch("http://localhost:8081/api/categories").then(categories => categories.json())
        .then(data => {
           // let newOption = 
        })
    }
}
