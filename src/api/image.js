
const BASE_URL = "http://localhost:8080/api/v1"

const getImage = (petId)=>{
    const url = BASE_URL+"/image?petId="+petId
    const request = {
        method: 'GET',
        // mode: 'no-cors',
        headers: {'Content-Type': 'application/json'}
    }
    fetch(BASE_URL+"/image",request)
    .then(res=>{

    })
    .catch((e)=>{
        console.log(e)
    })

}