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
  var metadata = {
    contentType: 'image/jpeg',
  };
  var i=0;
  const fileList = [];
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  var storage = firebase.storage();
  var storageRef = storage.ref();
  var imagesRef = storageRef.child('images');
  var a1 = "",a2="",a3="",a4="",a5="",a6="",a7=[];
  async function addhome(){
        a1=document.getElementById("afname").value;
        a2=document.getElementById("aemail").value;
        a3=document.getElementById("acontact").value;
        a4=document.getElementById("arent").value;
        a5=document.getElementById("acity").value;
        a6=document.getElementById("atype").value;
        a7 = document.getElementById("upimages");
        for(i=0;i<a7.files.length;i++){
            await storageRef.child(`images/${a7.files[i].name}`).put(a7.files[i], metadata);
            storageRef.child(`images/${a7.files[i].name}`).getDownloadURL()
            .then(url=>{
                console.log(url)
            })
        }
        
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


 fetch('https://loca-ly.herokuapp.com/api/', {
           mode:'no-cors',
            method: 'POST',
            headers: {
                "X-Requested-With": "XMLHttpRequest",
                "Content-Type": "application/json",
                "Accept": "*/*",
                "Authorization": `JWT ${localStorage.getItem("authtoken")}`
            },
            body: JSON.stringify({
                query: `
        
        query{
            alljobs{
              title
              jobtype
              description
              workfromhome
              pay
              skillsrequired
              mobile
              minimumdesignation
              location
              
              }
            }
        `
            })
        }).then(res => res.json())
            .then(data => {
                console.log(data)
                
                data.data.alljobs.forEach(alljobs => {

                    console.log(alljobs.title)
                    document.getElementById("alljobs").innerHTML+=
                        `<div class='jobs'>
      <div class='row'>
          <i class='fas fa-user'></i>
          <h6 class='pname'>Person Name</h6>
          <h5 class='salary'>${alljobs.pay}</h5>
      </div>
      <div class='row jobrow'>
          <h4 class='jobtitle'>${alljobs.title}</h4>
          <h6 class='loc'>${alljobs.location}</h6>
      </div>
      <div class='row btnrow'>


          <p class='desc'>${alljobs.description}</p>
         
      </div>
       <div class='skillrow'>
          <button disabled class='btn btn-light btn3'>${alljobs.skillsrequired}</button>
          <button disabled class='btn btn-light btn3'>Work from home: ${alljobs.workfromhome}</button>
          <button disabled class='btn btn-light btn3'>Job type: ${alljobs.jobtype}</button>
          <button class='btn btn-danger btn2' type='button'>Contact</button>
      </div>
  </div>`
                })
                 
            })