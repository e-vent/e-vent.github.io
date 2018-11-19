function listToRadioForm(l) {
var text = "<form id='rf'>";
var i;
for (i = 0; i < l.length; i++) {
text += "<input type='radio' name='time' value="+l[i]+">"+l[i]+"<br>";
}
text += "<button class='button' type='submit' onclick='replace();'>Add event to calendar</button></form>";
return text;
}
function replace2() {
var free = ["From 14-11-2018 14:00 to 14-11-2018 17:00", "From 14-11-2018 15:00 to 14-11-2018 18:00", "From 14-11-2018 16:00 to 14-11-2018 19:00"];
var text;
text=listToRadioForm(free);
document.getElementById("schedular").innerHTML=text;
}
function replace() {
document.getElementById('schedular').innerHTML='A new event has been added to your calendars.';
setTimeout(refresh, 3000);
}
function replace3() {
document.getElementById('schedular').innerHTML='Please wait...';
setTimeout(replace2, 2000);
}
function refresh() {
window.location.reload();
}
function onSignIn(googleUser) {
console.log('loaded');
var profile = googleUser.getBasicProfile();
document.getElementById('picture').innerHTML =  "<img id='profilePicture' src='" + profile.getImageUrl() + "'/><br>";
document.getElementById('name').innerHTML = profile.getName() + "<br>";
console.log("ID: " + profile.getId()); // Don't send this directly to your server!
console.log('Full Name: ' + profile.getName());
console.log('Given Name: ' + profile.getGivenName());
console.log('Family Name: ' + profile.getFamilyName());
console.log("Image URL: " + profile.getImageUrl());
console.log("Email: " + profile.getEmail());
}
function signOut(){
var auth2 = gapi.auth2.getAuthInstance();
auth2.signOut().then(function() {
document.getElementById('picture').innerHTML='';
document.getElementById('name').innerHTML='';
document.location.href="index.html";
});
}
