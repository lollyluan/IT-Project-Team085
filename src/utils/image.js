import {base64Img} from "base64-img"
const encodeImage=(filename)=>{
    base64Img.base64(filename, (value)=>console.log(value))
} 
export{encodeImage}