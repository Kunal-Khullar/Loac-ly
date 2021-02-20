const proxyurl = "https://cors-anywhere.herokuapp.com/";
var firebaseConfig = {
    apiKey: "AIzaSyC1ONvuT5vn9Wsn-7L05_rihH1oiVFr3So",
    authDomain: "loca-ly.firebaseapp.com",
    projectId: "loca-ly",
    storageBucket: "loca-ly.appspot.com",
    messagingSenderId: "351886880110",
    appId: "1:351886880110:web:96601d6ce762c091cd657f",
    measurementId: "G-MS8R31CR1Q"
  };
  var a8="",a1 = "",a2="",a3="",a4="",a5="",a6="",myvar1="";
  var a7 = document.getElementById("pupimages");
  var metadata = {
    contentType: 'image/jpeg',
  };
  var i=0;

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  var storage = firebase.storage();
  var storageRef = storage.ref();
  var imagesRef = storageRef.child('images');
a7.addEventListener('change',async (event)=>{
    const fileList = event.target.files;
    await storageRef.child(`images/${fileList[0].name}`).put(fileList[0], metadata);
            storageRef.child(`images/${fileList[0].name}`).getDownloadURL()
            .then(url=>{
                myvar1=url;
                
            })
})
  async function addpg(){
        a1=document.getElementById("pfood").value
        a2=document.getElementById("plaund").value
        a3=document.getElementById("pwash").value
        a8=document.getElementById("prtype").value
       
        a4=document.getElementById("prent").value;
        a5=document.getElementById("pcity").value;
        a6=document.getElementById("ptype").value;
       
        
        
        var query = `mutation addpg($a1: String!,$a2: String!,$a3: String!,$a4: Int!,$a5: String!,$a6: String!,$myvar1: String!,$a8: String!){
            addPg(kitchenAvailable: $a1,laundryIncluded: $a2,location: $a5,rent: $a4,roomtype: $a8,url: $myvar1,usertype: $a6, washroomAttached: $a3){
                __typename
            }
        }`;
        fetch(proxyurl + 'https://loca-ly.herokuapp.com/api/', {

        method: 'POST',
        headers: {
            "X-Requested-With": "XMLHttpRequest",
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `JWT ${localStorage.getItem("authtoken")}`
        },
        body: JSON.stringify({
            query,
            variables: { a1,a2,a5,a4,a8,myvar1,a6,a3 }
        })
    })
        .then(r => r.json())
        .then(data => console.log('data returned:', data.data));
    }
var s = 1, t = 1, u = 1;
function enable() {
    var v1 = document.getElementById("placetype");
    if (v1.value == "pg") {
        document.getElementById("pgtype").disabled = false
    }
    else {
        document.getElementById("pgtype").disabled = true
    }
}
function toggleForm() {
    document.body.classList.toggle('activeForm');
    if (document.body.classList.contains('activeForm2')) {
        document.body.classList.remove('activeForm2')
    }
}
var htmldata = "";
function toggleForm2() {
    document.body.classList.toggle('activeForm2');
}
function toggleForm3() {
    document.body.classList.toggle('activeForm3');
}
function slide() {
    console.log("harman noob")
    if (s == 1) {
        document.getElementById("slider").classList.remove("slideup")
        document.getElementById("slider").classList.add("slidedown")
        s = 0;
        document.getElementById("vd").innerHTML = "Hide details"
    }
    else {
        document.getElementById("slider").classList.add("slideup")
        document.getElementById("slider").classList.remove("slidedown")
        s = 1;
        document.getElementById("vd").innerHTML = "View details"
    }

}
function slide2() {
    console.log("harman noob")
    if (t == 1) {
        document.getElementById("slider2").classList.remove("slideup")
        document.getElementById("slider2").classList.add("slidedown")
        t = 0;
        document.getElementById("vd2").innerHTML = "Hide details"
    }
    else {
        document.getElementById("slider2").classList.add("slideup")
        document.getElementById("slider2").classList.remove("slidedown")
        t = 1;
        document.getElementById("vd2").innerHTML = "View details"
    }

}
function slide3() {
    console.log("harman noob")
    if (u == 1) {
        document.getElementById("slider3").classList.remove("slideup")
        document.getElementById("slider3").classList.add("slidedown")
        u = 0;
        document.getElementById("vd3").innerHTML = "Hide details"
    }
    else {
        document.getElementById("slider3").classList.add("slideup")
        document.getElementById("slider3").classList.remove("slidedown")
        u = 1;
        document.getElementById("vd3").innerHTML = "View details"
    }

    console.log(document.getElementById("state"))
}

   
    
        // if (window.location.href = 'http://localhost:3000/jobs') {
       
        
 
            
    


var jtype = "", loc2 = "", title = "", fname = "", mail = "", des = "", skill = "", padhai = "", mob = "", pay = "", loc1 = "", whome = "";


function addjob() {
    console.log("ez")
    title = document.getElementById("jtitle").value;
    // fname = document.getElementById("fullname").value;
    //    mail = document.getElementById("email").value;
    des = document.getElementById("des").value;
    skill = document.getElementById("skillset").value;
    padhai = document.getElementById("designation").value;
    mob = document.getElementById("phone").value;
    pay = document.getElementById("salary").value;
    loc = document.getElementById("city").value;
    //   loc2 = document.getElementById("state").value;
    jtype = document.querySelector("input[name=inlineRadioOptions6]:checked").value;
    whome = document.querySelector("input[name=inlineRadioOptions5]:checked").value;
    console.log(jtype, whome)

    var query =

        `mutation add($des: String!, $loc: String!, $mob: String!, $pay: Int!, $title: String!, $skill: String!,$whome: String!,$jtype: String!,$padhai: String!){
    addJob(description: $des, location: $loc, mobile: $mob, pay: $pay, title: $title, skillsrequired: $skill,minimumdesignation: $padhai,jobtype: $jtype, workfromhome: $whome){
      __typename
    }
  }`;
    console.log("Harman noob");
    fetch(proxyurl + 'https://loca-ly.herokuapp.com/api/', {

        method: 'POST',
        headers: {
            "X-Requested-With": "XMLHttpRequest",
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `JWT ${localStorage.getItem("authtoken")}`
        },
        body: JSON.stringify({
            query,
            variables: { des, loc, mob, pay, title, skill, padhai, jtype, whome }
        })
    })
        .then(r => r.json())
        .then(data => console.log('data returned:', data));
}


 