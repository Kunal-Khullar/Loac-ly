


$('.message a').click(function(){
    $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
 });
 const proxyurl = "https://cors-anywhere.herokuapp.com/";
 var cname="",cemail="",cnum="",lemail="",lpass="",cpass="";
 async function create(){
     cname=document.getElementById("cname").value;
     cnum=document.getElementById("cnum").value;
     cemail=document.getElementById("cemail").value;
     cpass=document.getElementById("cpass").value;
     
     var query = `mutation create($cemail: String!,$cpass: String!){
         createUser(email: $cemail, password: $cpass){
             __typename
         }
     }`
    await fetch(proxyurl+'https://loca-ly.herokuapp.com/api/', {
      
        method: 'POST',
        headers: {
            "X-Requested-With": "XMLHttpRequest",
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            // 'Authorization':"JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6Imd1cmxlZW5Abm90Tm9vYi5jb20iLCJleHAiOjE2MTM3OTc4NTUsIm9yaWdJYXQiOjE2MTM3OTc1NTV9.wnHIalgMxH9xda2Sl4eAcBDN8GCHBWMvd0nGdG-Zb24"
        },
        body: JSON.stringify({
          query,
            variables: { cemail,cpass }
        })
    })
        .then(r => r.json())
        .then(data => console.log('data returned:', data));
         query = `mutation createp($cname: String!,$cnum: String!){
            createProfile( name: $cname,mobile: $cnum){
                __typename
            }
        }`
    await    fetch(proxyurl+'https://loca-ly.herokuapp.com/api/', {
      
        method: 'POST',
        headers: {
            "X-Requested-With": "XMLHttpRequest",
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            // 'Authorization':"JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6Imd1cmxlZW5Abm90Tm9vYi5jb20iLCJleHAiOjE2MTM3OTc4NTUsIm9yaWdJYXQiOjE2MTM3OTc1NTV9.wnHIalgMxH9xda2Sl4eAcBDN8GCHBWMvd0nGdG-Zb24"
        },
        body: JSON.stringify({
          query,
            variables: { cname,cnum }
        })
    })
        .then(r => r.json())
        .then(data => console.log('data returned:', data));
     
 }

 async function login(){
    lemail=document.getElementById("lemail").value;
    lpass=document.getElementById("lpass").value;
    var query = `mutation token($lemail: String!,$lpass: String!){
        tokenAuth(email: $lemail, password: $lpass){
            token
        }
    }`
    
        try{
            fetch(proxyurl+'https://loca-ly.herokuapp.com/api/', {
          
                method: 'POST',
                headers: {
                    "X-Requested-With": "XMLHttpRequest",
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    // 'Authorization':"JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6Imd1cmxlZW5Abm90Tm9vYi5jb20iLCJleHAiOjE2MTM3OTc4NTUsIm9yaWdJYXQiOjE2MTM3OTc1NTV9.wnHIalgMxH9xda2Sl4eAcBDN8GCHBWMvd0nGdG-Zb24"
                },
                body: JSON.stringify({
                  query,
                    variables: { lemail,lpass }
                })
            })
                .then(r => r.json())
                .then(data => {
                    console.log(data.data.tokenAuth.token)
                    localStorage.setItem("authtoken",data.data.tokenAuth.token)
                });
                document.getElementById("myref").href='home'
        }
        catch(error){
            console.log(error)
        }
    
   
   
 }