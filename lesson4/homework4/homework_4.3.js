
const userBirthYear = +prompt('Введіть рік свого народження');
const userCity = prompt('В якому ви живете?');
const userSport = prompt('Який вид спорту ваш улюблений?');



const currentYear = new Date().getFullYear();
const userAge = currentYear - userBirthYear;

if (userCity) {

    const city = userCity.trim();
    switch(city.toLowerCase()) {
        case 'київ':

           alert(`Ви живете в столиці України, у Києві. Ваш вік: ${userAge} років. Ваш улюблений вид спорту: ${userSport}.`);
           break;
        case 'вашингтон':
            alert(`Ви живете в столиці США, у Вашингтоні. Ваш вік: ${userAge} років. Ваш улюблений вид спорту: ${userSport}. `);
            break;
        case 'лондон':
            alert(`Ви живете в столиці Великобританії, у Лондоні. Ваш вік: ${userAge} років. Ваш улюблений вид спорту: ${userSport}.`);
            break;
        default:
            alert(`Ви живете в місті: ${userCity}. Ваш вік: ${userAge} років. Ваш улюблений вид спорту: ${userSport}.`);
        }
}



//-------------------------------------------------------------------












