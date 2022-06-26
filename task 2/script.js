function isEmpty(){
    if ( document.forms["form"]["comment"].value == ""  && document.forms["form"]["name"].value == ""  && document.forms["form"]["gender"].value == "") {
        alert("All fields are empty");
        return false;
      }
    if (document.forms['form']['name'].value == null || document.forms["form"]["name"].value == "" ) {
        alert("Empty name");
        return false;
      }
    if (document.forms['form']['comment'].value == null || document.forms["form"]["comment"].value == "" ) {
        alert("Empty comment");
        return false;
      }
}