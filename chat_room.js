
const firebaseConfig = {
    apiKey: "AIzaSyBlW3JMT9xZwvxXSsCM64ilUFYzLtln2J8",
    authDomain: "st-fairy-school-7e406.firebaseapp.com",
    databaseURL: "https://st-fairy-school-7e406-default-rtdb.firebaseio.com",
    projectId: "st-fairy-school-7e406",
    storageBucket: "st-fairy-school-7e406.appspot.com",
    messagingSenderId: "100042977722",
    appId: "1:100042977722:web:3e80dabb9a170ff0206d83"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);


  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + " !";
  
  
  function addRoom() {
        room_name = document.getElementById("room_name").value;
        firebase.database().ref("/").child(room_name).update({
              purpose: "adding room name"
        });
        localStorage.setItem("room_name", room_name);
        window.location = "kwitter_page.html";
  }
  
  
  
  function getData() {
        firebase.database().ref("/").on('value', function (snapshot) {
              document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                    childKey = childSnapshot.key;
                    Room_names = childKey;
                    //Start code
                    console.log("Room names " + Room_names);
                    row = "<div class='room_name' id=" + Room_names + "onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div> <hr>";
                    document.getElementById("output").innerHTML += row;
  
  
                    //End code
              });
        });
  }
  getData();
  
  function redirectToRoomName(name){
        console.log(name);
        localStorage.setItem("room_name", name);
        window.location = "kwitter_page.html";
  
  }
  

