


let numOrStr = prompt('input number or string');
console.log(numOrStr)

switch (true) {
    case numOrStr === null:
        alert('ви скасували');
        break;
    case  numOrStr.trim() === '':
        alert('Empty String');
        break;
    case isNaN(+numOrStr):
        alert(' number is NaN');
        break;
    default:
        alert('OK!');

}
