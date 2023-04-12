import { exerciseTwentyEightHtml } from "../view/exercisesView/exercise28View.js"

export const ExerciseTwentyEightComponent = () => {
    exerciseTwentyEightHtml();
    const main = document.getElementById('root');

    main.addEventListener('click', (event) => {
        event.preventDefault();
        const button = event.composedPath()[0].value;
        if( button == 'Limpar'){
            clear();
        }
        if( button == 'ex28Enviar') {
            const form = document.getElementById('my-form');
            const message = document.getElementById('message');
            var numbers = [];
            numbers.push(parseInt(form.number1.value));
            numbers.push(parseInt(form.number2.value));
            numbers.push(parseInt(form.number3.value));
            numbers.push(parseInt(form.number4.value));
            numbers.push(parseInt(form.number5.value));
            numbers.sort((a,b) => a - b);


            var smaller = numbers.shift();
            var bigger = numbers.pop();

            message.innerHTML = `Menor e maior número: ${smaller} e ${bigger}`;



            clear();
        }
    });
}
function clear() {
    const form = document.getElementById('my-form');
    form.reset();
}

