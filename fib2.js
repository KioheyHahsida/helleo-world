function fib() {
    let a = 0, b = 1;
    return function() {
        let c = a;
        a = b, b = c + b;
        return c;
    };
}
let f = fib();
for (let i = 1; i < 100; i++){
    document.body.innerHTML+=('<p>'+f()+'</p>');
} 
