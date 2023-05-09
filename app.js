/* Generating additional textarea on "other" field being clicked; hidden again when other buttons are selected */
let otherBtn = document.querySelector("#purpose3");
let otherField = document.querySelector("#other-field");
let btn1 = document.querySelector("#purpose1");
let btn2 = document.querySelector("#purpose2");

otherBtn.addEventListener('click', function() { 
    otherField.hidden=false;
});

btn1.addEventListener('click', function() {
    otherField.hidden=true;
});

btn2.addEventListener('click', function() {
    otherField.hidden=true;
});