var sc= /[`!@#$%^&*()_+\-=\[\]{};"':\\|,.<>\/?~]/;
function containsSpecialChars(str){
    return sc.test(str)
}
console.log(containsSpecialChars("qwer@#$%"))
console.log(containsSpecialChars("wertyu"))
