function validURL(url) {
    console.log("::: RUNING URL VALIDATION :::", url);

    var regexp = url.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    if(regexp == null){
        return 0;
    } else {
        return 1;
    } 
 }
export { validURL }

