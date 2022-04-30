// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyAqgxIDYjVwxYCZFmTdDknDT1Rq8KgAOzo",
      authDomain: "kwitter2-baf0e.firebaseapp.com",
      databaseURL: "https://kwitter2-baf0e-default-rtdb.firebaseio.com",
      projectId: "kwitter2-baf0e",
      storageBucket: "kwitter2-baf0e.appspot.com",
      messagingSenderId: "895895989080",
      appId: "1:895895989080:web:8c2f117c832b8f8e77932d"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+" !";


function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"Adding Room Name"
      });

      localStorage.setItem("room_name",room_name);

      window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room name:- "+Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();


function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}