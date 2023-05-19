function validate(){
    let x = document.forms["myForm"]["name"].value;
    let y = document.forms["myForm"]["email"].value;
  if (x == "" && y == '') {
    alert("Both name and email must be filled out");
    return false;
  }else if(x == "") {
    alert("Name must be filled out");
    return false;
  }else if(y == "") {
    alert("Email must be filled out");
    return false;
  }else{
    alert('Form Validated')
    return true;
  }
}