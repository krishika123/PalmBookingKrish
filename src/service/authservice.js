import { Log, UserManager } from "oidc-client";

const config = {
    //authority:'https://palmbookingkrish.com',
    authority: process.env.REACT_APP_AUTHORITY,
    client_id: process.env.REACT_APP_CLIENT_ID, //'ebookkeeping-pwa',
    client_root: process.env.REACT_APP_CLIENT_ROOT,
    redirect_uri:  process.env.REACT_APP_REDIRECT_URI,
    post_logout_redirect_uri: process.env.REACT_APP_POST_LOGOUT_REDIRECT,
    response_type: 'code',
    scope: 'openid profile ebookkeeping-api',
    // post_logout_redirect_uri: process.env.REACT_APP_POST_LOGOUT_REDIRECT,
    // response_type: process.env.REACT_APP_RESPONSE_TYPE,
    // scope: process.env.REACT_APP_scope,
    pkce:false,
    monitor_session:false,

}


console.log({config})

const userManager = new UserManager(config)


const getUser = () => {
    return userManager.getUser()
}

const login = () => {
    return userManager.signinRedirect()
}

const renewToken = () => {
    return userManager.signinSilent()
}

const logout = () => {
    return userManager.signoutRedirect()
}

export {getUser, login, logout, renewToken}