import { ExerciseTwentyFourHtml } from "../view/exercisesView/exercise24View.js"

export const ExerciseTwentyFourComponent = () => {
    ExerciseTwentyFourHtml();
    const main = document.getElementById('root');

    main.addEventListener('click', (event) => {
        event.preventDefault();
        const button = event.composedPath()[0].value;
        if( button == 'Limpar'){
            clear();
        }
        if( button == 'ex24Enviar') {
            const form = document.getElementById('my-form');
            const message = document.getElementById('message');
            var numbers = [];
            numbers.push(parseInt(form.number1.value));
            numbers.push(parseInt(form.number2.value));
            numbers.push(parseInt(form.number3.value));
            numbers.push(parseInt(form.number4.value));
            numbers.push(parseInt(form.number5.value));
            numbers.sort((a,b) => a - b);
            message.innerHTML = "Ordenados: ";

            numbers.map((number, index) => {
               if(index == numbers.length-1){
                message.innerHTML += `${number}`;
                return;
               }
               message.innerHTML += `${number}, `;
            })
            clear();
        }
    });
}
function clear() {
    const form = document.getElementById('my-form');
    form.reset();
}

