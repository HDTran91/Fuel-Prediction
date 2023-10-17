export const transValidation = {
    password_incorrect: "password need to include lowercase letters, capital letters, digits, and special characters (@, #, &, etc.)",
    password_confirmation_incorrect: "password confirmation does not match"
}

export const transSuccess  ={
    userCreated: (username) =>{
        return `Account <Strong> ${username} </Strong> is created successfully`;
        
    },
    loginSuccess: (username) => {
        return `${username} Logins successfully`
    }
}

export const transError = {
    account_in_use: "Username is used already",
    login_failed: "Username or Password Incorrect",
    server_error: "Server error, please contact us for help"
}

