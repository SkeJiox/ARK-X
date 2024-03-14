
function digitalRoot(n) {
    let res = n;
    while (res.toString().length > 1) {
        res = res.toString().split('').reduce((acc, crt) => {
            return acc + parseInt(crt);
        }, 0);
    }
    return res;
}
console.log(digitalRoot(333))


