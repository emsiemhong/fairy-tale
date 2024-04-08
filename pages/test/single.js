// const queryString = window.location.search;
// console.log(queryString);

document.getElementById("contact-form").addEventListener("submit", saveForm);

function saveForm(event){
    event.preventDefault();
    let name = document.getElementById("name").value;

    console.log(name);
}
