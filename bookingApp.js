var form = document.getElementById('my-form');
form.addEventListener('submit', submit);
function submit(e){
    e.preventDefault();
    var name = document.getElementById('name').value;
    //console.log(name1);
    var email = document.getElementById('email').value;
    // localStorage.setItem('name', name);
    // localStorage.setItem('email', email);
    // console.log(localStorage.getItem('name'))
    // console.log(localStorage.getItem('email'))

    let myObj ={
        userName: name,
        userEmail: email
    };

    //localStorage.setItem("myObj", myObj);// in this we only get object passed that is 2 objects and not the object value because it is not being stored so we need to use JSON
    //console.log(localStorage);

    let myObj_serialized = JSON.stringify(myObj);// now we have converted object to string
    localStorage.setItem("myObj", myObj_serialized);// but it is all string and not an object so we need to parse it back to object
    //console.log(localStorage);
    let myObj_deserialized = JSON.parse(localStorage.getItem("myObj"));//now the string is converted back to the object
    console.log(myObj_deserialized);


}
//console.log(name);
//console.log("hello");