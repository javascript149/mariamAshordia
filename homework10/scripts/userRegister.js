function userRegister(){
    let firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value;
    let location = document.getElementById("location").value;
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let userDatabase = localStorage.getItem('users');

    if( userDatabase === null || userDatabase.length === 0){
        let usersArray = [];
        usersArray.push(
            {
                firstname,
                lastname,
                location,
                username,
                password
            }
        );
        localStorage.setItem('users',JSON.stringify(usersArray));
    }
    else {
        let toJsonObject = JSON.parse(userDatabase);
        toJsonObject.push(
            {
                firstname,
                lastname,
                location,
                username,
                password
            }
        );
        
        localStorage.setItem('users',JSON.stringify(toJsonObject));
    }
    setTimeout("alert('Registration was successful!')",600);
    
 }
