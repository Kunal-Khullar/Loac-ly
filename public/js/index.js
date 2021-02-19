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
    if(document.body.classList.contains('activeForm2')){
        document.body.classList.remove('activeForm2')
    }
}
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

}

