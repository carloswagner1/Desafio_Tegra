import { exerciseTwentyFiveHtml } from "../view/exercisesView/exercise25View.js"

export const ExerciseTwentyFiveComponent = () => {
    exerciseTwentyFiveHtml();
    const main = document.getElementById('root');

    main.addEventListener('click', (event) => {
        const button = event.composedPath()[0].value;
        const sign = document.getElementById('sign');
        if( button == 'Limpar'){
            clear();
        }
        if( button == 'ex25Enviar') {
            const bithDate = document.getElementById('birthDate').value;
            const testDate = bithDate + "/2023";

            if(!isNaN(bithDate) || testDate instanceof Date){
                alert('Informe uma data válida');
                return;
            }
            const researchedSign = searchSign(bithDate);
            sign.value = researchedSign;
            clear();
        }
    });
}
function searchSign(date){
    var day = date.substring(0,2);
    var month = date.substring(3);
    var sign;

    switch(month){
        case '01':
            day <= 20 ? sign = 'Capricórnio' : sign = 'Aquário';
            break;
        case '02':
            day <= 18 ? sign = 'Aquário' : sign = 'Peixes';
            break;
        case '03':
            day <= 20 ? sign = 'Peixes' : sign = 'Áries';
            break;
        case '04':
            day <= 20 ? sign = 'Áries' : sign = 'Touro';
            break;
        case '05':
            day <= 20 ? sign = 'Touro' : sign = 'Gêmeos';
            break;
        case '06':
            day <= 20 ? sign = 'Gêmeos' : sign = 'Câncer';
            break;
        case '07':
            day <= 22 ? sign = 'Câncer' : sign = 'Leão';
            break;
        case '08':
            day <= 22 ? sign = 'Leão' : sign = 'Virgem';
            break;
        case '09':
            day <= 22 ? sign = 'Virgem' : sign = 'Libra';
            break;
        case '10':
            day <= 22 ? sign = 'Libra' : sign = 'Escorpião';
            break;
        case '11':
            day <= 21 ? sign = 'Escorpião' : sign = 'Sargitário';
            break;
        case '01':
            day <= 21 ? sign = 'Sargitário' : sign = 'Capricórnio';
            break;
    }
    return sign;
}
function clear() {
    const form = document.getElementById('my-form');
    form.reset();
}