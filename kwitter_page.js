//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyA0gNyVAmzB8Tb7aftViPOCct4SPLB5FPo",
      authDomain: "kwitter-b8d57.firebaseapp.com",
      databaseURL: "https://kwitter-b8d57-default-rtdb.firebaseio.com",
      projectId: "kwitter-b8d57",
      storageBucket: "kwitter-b8d57.appspot.com",
      messagingSenderId: "821204879447",
      appId: "1:821204879447:web:a5621fb337e2fe9ab8fb12"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("username");
    room_name = localStorage.getItem("room_name");
function send(){
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name: user_name,
        message:msg,
        like: 0
});
document.getElementById("msg").value = "";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
firebase_message_id = childKey;
message_data = childData;
console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message = message_data ['message'];
like = message_data ['like'];
name_with_tag = "<h4>" + name + "<img class = 'user_tick' src='tick.png'></h4>";
message_with_tag = "<h4 class = 'message_h4'>" + message + "</h4>";
like_button = "<button class = 'btn btn-warning' id="+ firebase_message_id + " value = "+like+" onclick = 'updateLike(this.id)'>";
span_with_tag = "<span class = 'glyphicon glyphicon-thumbs-up' > Like: "+like+" </span> </button> <hr>";
row = name_with_tag + message_with_tag +like_button + span_with_tag;
document.getElementById("output").innerHTML += row;
}});});}
getData();

function updateLike(message_id){
    console.log("clicked on like button - " +message_id);
    button_id = message_id;
    likes = document.getElementById(button_id).value;
    updatedLike = Number(likes) + 1;
    console.log(updatedLike);
    firebase.database().ref(room_name).child(message_id).update({
        like:updatedLike
    });
}
function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
    
}