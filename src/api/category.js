import requset from "../utils/requset";

export const findAllCategory=()=>{
    return requset('/home/category/head', 'get')
}
