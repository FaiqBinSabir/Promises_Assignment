

//  var data = document.getElementById('submit');
//  data.addEventListener('click',myf());
function myfunction(event) {
  
//
event.preventDefault();
   let userdat = document.getElementById("userinput").value;
    
   let a = 'https://api.github.com/users/'+userdat;
   console.log(a);

    fetch(a).then(data =>data.json()

    
    )
    .then(res => {//console.log("data reached:",res)
   

     
        console.log(res);
        if (res.message == 'Not Found') {
            
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'User Not found!!',
              }).then(

                document.getElementById("display").style.display = "none" 
            

              )
              
              // document.getElementById("search").style.display = "block"
              document.getElementById("excited").style.display = "block"
        }
        else{
            
            document.getElementById("display").style.display = "block"
            
            document.getElementById("excited").style.display = "none"
        let avatar =  res.avatar_url;
        console.log(avatar)
        let profiledisplay =   document.getElementById('avatarimg');
        profiledisplay.src = avatar ;
        let username = res.name;
        let user = document.getElementById("username");
        user.innerText =   username;
        let followers = res.followers;
        let follow = document.getElementById("followers")
       follow.innerText = followers;    
        let following = res.following;
       let folwing =  document.getElementById("following")
       folwing.innerText =following;

       let con = res.location;
       
       let country = document.getElementById('country');
       if (con == null) {
        
        
       country.innerText = 'Null';
       }
       else{
       country.innerText = con;
    }

       let public = res.public_repos;
       document.getElementById('publicrep').innerText = public;

      let github=  document.getElementById('github');
      github.addEventListener('click',()=>{

        
        gitlink = res.html_url;
        location.href = gitlink;
      })
    
    }
       
       
      //isss se uper uper krna
}
    
    )



}



