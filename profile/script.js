// display the custumer nhame to navbar
const showname = JSON.parse(sessionStorage.getItem('loginUser'))

    let fullname = showname.firstName+" "+showname.lastName;
document.getElementById('userName').innerText = `Welcome To MeShop ${fullname}`;



const firstName = document.getElementById('fName');
const lastName = document.getElementById('lName');
const saveInfoButton = document.getElementById('save');
const oldPassword = document.getElementById('oldPassword');
const newPassword  = document.getElementById('newPassword');
const confirmNewPassword = document.getElementById('confirmNewPassword');
const chanePasswordButton = document.getElementById('edit');
const logoutButton = document.getElementById('logout') 

// filling data to existing user
firstName.value = showname.firstName
lastName.value = showname.lastName

chanePasswordButton.addEventListener('click',(e)=>{
    e.preventDefault();
    // console.log(oldPassword.value+"old")
    // console.log(showname.password+"new")
    if(oldPassword.value == showname.password){
        if(newPassword.value === confirmNewPassword.value){
            showname.password = newPassword.value;
            JSON.parse(localStorage.getItem('users')).map((data)=>{
                if(data.email === showname.email){
                    // console.log(data.password)
                    data.password = newPassword.value;
                    // console.log(data.password)
                }
            })
           
            delete JSON.parse(sessionStorage.getItem('loginUser'));
            sessionStorage.setItem('loginUser',JSON.stringify(showname));
            oldPassword.value = '';
            newPassword.value = '';
            confirmNewPassword.value = '';
            alert("password changed succesfully")
        }else{
           alert("new Password not Matched")
        }
    }else{
        alert("old Password Not Matched!")
    }
})  

// logout button

logoutButton.addEventListener('click',(e)=>{
    e.preventDefault();
    let loginUser = {}
    sessionStorage.setItem('loginUser',JSON.stringify(loginUser))
    // console.log(JSON.parse(sessionStorage.getItem('loginUser')))
    alert("logout successfully")
    window.location.href = "../index.html"
})
            
         
    



