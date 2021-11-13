
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
    document.getElementById("userName").innerHTML = "Welcome" + user_name + "!";
 
    function addroom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
            });
            localStorage.setItem("room_name", room_name);
            window.location = "kwitter_page.html";


}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("roomnames - " + Room_names);
       row = "<div class = 'room_name'id = "+ Room_names +" onclick='redirectToroom_name(this.id)'>#"+ Room_names+"</div><hr>";
       document.getElementById("output").innerHTML += row; 

      //Start code


      //End code
      });});}
getData();
function redirectToroom_name(name){
      console.log(name);
localStorage.setItem("room_name" , name);
window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
      
}