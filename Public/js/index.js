console.log('Hi Working');

function buttonOff() {
    document.getElementById('myImage').src='/images/pic_bulboff.gif';
    updateBulbStats("OFF");
}

function buttonOn() {
    document.getElementById('myImage').src='/images/pic_bulbon.gif';
    updateBulbStats("ON")

}

function updateBulbStats(value){
    // Update a user
var url = "/bulbs";

var data = {};
data.name = "b1";
data.status  = value;
var json = JSON.stringify(data);

var xhr = new XMLHttpRequest();
xhr.open("PUT", url, true);
xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
xhr.onload = function () {
	if (xhr.readyState == 4 && xhr.status == "200") {
        console.log("Success : ",value);
        M.toast({html: `Blub Status set to ${value}`})
	} else {
		console.error(users);
	}
}
xhr.send(json);
}