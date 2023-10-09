function userRegister(){
    let firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value;
    let location = document.getElementById("location").value;
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;


    if(localStorage.getItem('users') === null || localStorage.getItem('users').length === 0){
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
        JSON.parse(localStorage.getItem('users')).push(   //აქ როგორც ვხვდები რაღაც შეცდომას ვუშვებ და არ ემატება ახალი ელემენტი.
                                                        //"[{\"firstname\":\"dwh\",\"lastname\":\"JFJS\",\"location\":\"HFJWF\",\"username\":\"JHHFJW\",\"password\":\"JNJQ\"}]"
                                                        //ასე გამოაქვს ახალ ელემენტს რომ ვამატებ
            {
                
                firstname,
                lastname,
                location,
                username,
                password
            }
        )
        localStorage.setItem('users',JSON.stringify(localStorage.getItem('users')));
    }
    alert('Registration was successful!');
    
 }
