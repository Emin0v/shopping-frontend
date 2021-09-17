import axios from "axios";


export function get(path='',headers){
    return axios.get(path,headers).catch(err=> {
        console.log(err);
        throw new Error('Http Get Error : api.service');
    })
}

export function post(path='',params,headers){
    return axios.post(path,params,headers).catch(err=> {
        console.log(err);
        throw new Error('Http Post Error : api.service');
    })
}

// export function post(path='',params){
//     return axios.post(path,params).catch(err=> {
//         console.log(err);
//         throw new Error('Http Post Error : api.service');
//     })
// }