const proxyurl = "https://cors-anywhere.herokuapp.com/";
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


