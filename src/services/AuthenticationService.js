class AuthenticationService{
    registerSuccessfulLogin(username, password){
        sessionStorage.setItem("authuser",username)
        sessionStorage.setItem("authpass",password)
    }

    clearAuthTokens(){
        sessionStorage.removeItem("authuser")
        sessionStorage.removeItem("authpass")
    }

    isUserLoggedIn(){
        let user = sessionStorage.getItem("authuser")
        // console.log(user);
        if(user !== null){
            return true
        }
        return false
    }

    getLoggedInUserName(){
        let user = sessionStorage.getItem("authuser")
        if(user !== null){
            return user
        }
        return ""
    }

}

export default new AuthenticationService()