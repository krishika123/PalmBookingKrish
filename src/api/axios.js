import axios from 'axios'

//https://api.palmbookingkrish.com/api
const baseURL = "https://api.palmbookingkrish.com/api"
const session_url="oidc.user:https://palmbookingkrish.com:ebookkeeping-pwa" ;
const session=JSON.parse(sessionStorage.getItem(session_url))  ;

const customAxios =  axios.create({
    baseURL,
    headers:{
        Authorization:`Bearer ${session?.access_token}`
    }
})
export default customAxios

