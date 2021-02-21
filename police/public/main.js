var firebaseConfig = {
    apiKey: "AIzaSyC1ONvuT5vn9Wsn-7L05_rihH1oiVFr3So",
    authDomain: "loca-ly.firebaseapp.com",
    projectId: "loca-ly",
    storageBucket: "loca-ly.appspot.com",
    messagingSenderId: "351886880110",
    appId: "1:351886880110:web:96601d6ce762c091cd657f",
    measurementId: "G-MS8R31CR1Q"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var i=1,j=0,k=0;
var address = [];
var lat=0,lng=0;
const proxyurl = "https://cors-anywhere.herokuapp.com/";
 fetch( proxyurl +'https://loca-ly.herokuapp.com/api/',  {
     
    method: 'POST',
    headers: {"Content-Type": "application/json",
                  "X-Requested-With": "XMLHttpRequest",
              "Aceept": "*/*"
             },
    body: JSON.stringify({
        query: `
        
        query{
police{
 user{
profile{
name
}
}
  time
  city
  street
state
}
  }`
        
        
    })
}).then(res => res.json())
.then( data =>  {
  console.log(data.data)
  
     data.data.police.forEach(async police => {
        
      console.log(lat)
      
      var time = police.time;
      
      
      
      document.getElementById("tableContent").innerHTML += `<tr><td>${i}</td><td>${police.user.profile.name}</td>
        <td>${police.street}</td>
      <td>${police.city}</td><td>${police.state}</td><td>${time}</td></tr>`
      
      i++;
      j++;
    })
    console.log(address);
})


