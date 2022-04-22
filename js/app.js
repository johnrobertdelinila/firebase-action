// AUTHENTICATION

const facebook_login=()=>{
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider)
    .then(function(result) {
       var user=result.user;
       window.location.replace('home.html')
       console.log("user===>",user.displayName)
        
      }).catch(function(error) {
        alert("error===>",error.message);
        console.log(error.message);
      });
}


const logout=()=>{
  firebase.auth().signOut()
  .then(()=>{
   window.location.replace("index.html")
  }
  )
  .catch(()=>{

  }
  )
}