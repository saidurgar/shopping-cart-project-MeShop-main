
// without login we can not acess cart and profile and 
    document.getElementById('navigateCart').addEventListener('click',(e)=>{
        const showname = JSON.parse(sessionStorage.getItem('loginUser'))

        if(showname != null){
           window.location.href = "./cart"
        }else{
          alert("Please Login")
          window.location.href = "./login"
        }
    
    })

    
    document.getElementById('navigateProfile').addEventListener('click',(e)=>{
        const showname = JSON.parse(sessionStorage.getItem('loginUser'))

        if(showname != null){
           window.location.href = "./profile"
        }else{
          alert("Please Login")
          window.location.href = "./login"
        }
    
    })