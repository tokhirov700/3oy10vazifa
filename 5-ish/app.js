let narx = prompt("Narx kiriting:");
function Money(narx) {
    let result = Math.round(narx / 1.15 );
    return result;
}
let result = Money(narx);
console.log(result);