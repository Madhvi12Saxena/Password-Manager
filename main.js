function maskPassword(pass){
    let str = ""
    for (let index = 0; index < pass.length; index++) {
        str  += "*"
    }
    return str
}
