const jwt = require('jsonwebtoken')

const decode = (token)=>{ 
    let decoded = jwt.decode(token)
    return decoded
}
const save = token => {
    localStorage.setItem('token', token)
    return; 
}

const token = ()=>{
    return {
        decode : decode,
        save : save,
    }
}

module.exports = token()