import { exerciseSeventeenHtml } from "../view/exercisesView/exercise17View.js"

export const ExerciseSeventeenComponent = () => {
    exerciseSeventeenHtml();
    const main = document.getElementById('root');

    main.addEventListener('click', (event) => {
        const button = event.composedPath()[0].value;
        if( button == 'Limpar'){
            clear();
        }
        if( button == 'ex17Enviar') {
            const form = document.getElementById('my-form');
            const number1 = parseInt(form.number1.value);
            const number2 = parseInt(form.number2.value);
            const message = document.getElementById('message');

            if(Number.isNaN(number1) || Number.isNaN(number2)){
                alert('Todos os campos devem ser informados');
                return;
            }
            if(number1 % number2 == 0 || number2 % number1 == 0)
                message.innerHTML = 'Os números informados são multiplos'
            else
                message.innerHTML = 'Os números informados não são multiplos'
            clear();
        }
    });
}
function clear() {
    const form = document.getElementById('my-form');
    form.reset();
}