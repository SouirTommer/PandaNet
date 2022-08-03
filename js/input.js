function checkFields() {
    if (document.getElementById('User').value == "") {  //check login userid blank
        alert("Username should not be blank!");
        document.getElementById('User').focus();
        return false;
    } else if (document.getElementById('Pwd').value == "") { //check login pwd blank
        alert("Password should not be blank!");
        document.getElementById('Pwd').focus();
        return false;
    } else {
        alert('Incorrect account or password');
    }
}
function startform() {
	userid();
}


function userid() {

    document.getElementById("usid").disabled = true;	// disabled input
    document.getElementById("uspwd").disabled = true;
    document.getElementById("fn").focus();
    var randomid = parseInt(Math.random().toFixed(5) * 100000);//random user id
    var ranid = randomid.toString();
    var fn = document.getElementById("fn").value;

    var randompwd = parseInt(Math.random().toFixed(5) * 100000);//random user pwd
    var ranpwd = randompwd.toString();

    document.getElementById("usid").value = "User" + fn + ranid;
    document.getElementById("uspwd").value = "Pwd" + fn + ranpwd;

}

function print_result() {

    var name = document.getElementById("fn").value + " " + document.getElementById("ln").value;
    alert("Submitted!\n\nThank you " + name + "\nSponsor us " + document.getElementById("amount").value)

    var user = document.getElementById("usid").value;
    var pwd = document.getElementById("uspwd").value;

    alert("\nuserID = " + user + "\nuserPassword = " + pwd);



}

function reSet() {
    alert('Reset successful');
}