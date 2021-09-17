import {get} from "@/common/api.service";
import { post } from "./api.service";
import { PRODUCT_URL } from "./config";
import { AUTH_URL } from "./config";
import { CART_URL } from "./config";
import { USER_URL } from "./config";

import authHeader from './auth'; 

export function getUser(id) {
    return get(USER_URL+'/' + id,{headers:authHeader()});
}

export function getProductDetailById(id) {
    return get(PRODUCT_URL+'products/' + id);
}

export function getAllByCategoryId(id) {
    return get(PRODUCT_URL+'category/'+ id);
}

export function getCategories(){
    return get(PRODUCT_URL+'category')
}

export function getAllProducts(){
    return get(PRODUCT_URL+'products')
}

export function findByCartId(id){
    return get(CART_URL+'/'+ id)
}

export function saveToCart(params){
    return post(CART_URL,params);
}

export function register(params){
    return post(AUTH_URL+'/register',params);
}

export function login(params){
    return post(AUTH_URL+'/login',params);
}