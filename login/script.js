const  emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const loginButton = document.getElementById('loginButton');

const userDtails = JSON.parse(localStorage.getItem('users'))

console.log(userDtails)


loginButton.addEventListener('click',(e)=>{
e.preventDefault();

    userDtails.map((data)=>{
    if(emailInput.value.trim() === '' ||
        passwordInput.value.trim() === ''){
            document.getElementById('error').innerText = `All feild are mandatory!!`

    }else if(emailInput.value === data.email &&
        passwordInput.value === data.password){
            sessionStorage.setItem('loginUser',JSON.stringify(data));
            window.location.href ='../shop'
    }else{
        document.getElementById('error').innerText = `Wrong Password! OR Email Id!`

    }
    })
})

// for navigation bar
document.getElementById('navigateCart').addEventListener('click',(e)=>{
    const showname = JSON.parse(sessionStorage.getItem('loginUser'))

    if(showname != null){
       window.location.href = "../cart"
    }else{
      alert("Please Login")
      window.location.href = "../login"
    }

})


document.getElementById('navigateProfile').addEventListener('click',(e)=>{
    const showname = JSON.parse(sessionStorage.getItem('loginUser'))

    if(showname != null){
       window.location.href = "../profile"
    }else{
      alert("Please Login")
      window.location.href = "../login"
    }

})