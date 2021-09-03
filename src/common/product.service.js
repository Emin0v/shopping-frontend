import {get} from "@/common/api.service";
import { post } from "./api.service";


export function getProductDetailById(id) {
    return get('products/' + id);
}

export function getAllByCategoryId(id) {
    return get('category/'+ id);
}

export function getCategories(){
    return get('category')
}

export function getAllProducts(){
    return get('products')
}

export function saveToCart(path,params){
    return post(path,params);
}