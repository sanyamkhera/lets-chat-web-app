

const firebaseConfig = {
      apiKey: "AIzaSyABWrEBhE0N3Poh55X5OPx90cZg2C4KlB4",
      authDomain: "kwitter-64d48.firebaseapp.com",
      databaseURL: "https://kwitter-64d48-default-rtdb.firebaseio.com",
      projectId: "kwitter-64d48",
      storageBucket: "kwitter-64d48.appspot.com",
      messagingSenderId: "615215217964",
      appId: "1:615215217964:web:94d9c86b0879277f568089"
    };
    
    
    firebase.initializeApp(firebaseConfig);
    username=localStorage.getItem("user");
    document.getElementById("user_name").innerHTML="welcome"+username+" !";
    function addroom(){
          room_name=document.getElementById("room_name").value ;
          firebase.database().ref("/").child(room_name).update({
                purpose:"adding room name"
          });
          localStorage.setItem("room",room_name);
          window.location="kwitter_page.html";

          }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("roomname- "+Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirecttoroomname(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;

      //End code
      });});}
getData();
function redirecttoroomname(name){
console.log(name);
localStorage.setItem("room",room_name);
window.location="kwitter_page.html";
}