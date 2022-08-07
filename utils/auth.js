import Cookies from "js-cookie";

export function isAuthenticated() {
    if(typeof window!=='undefined'){
        let token = Cookies.get("kcToken");
        if(token){
            return true;
        }
    }
    return false;
}

export function getAuthCredentials(){
    let token = Cookies.get("kcToken");
    if(token){
        return  {token: token, permissions: null };
    }
    return {token: null, permissions: null }
}
export function setToken(token){
    return Cookies.set('kcToken',token)
}
export function removeToken(token){
    Cookies.remove('kcToken')
    Cookies.remove('kcIdToken')
    
}
export function getUser(){
    if(typeof window!=='undefined'){
        return window.localStorage.getItem('user')?JSON.parse(window.localStorage.getItem('user')):[]
    }
}