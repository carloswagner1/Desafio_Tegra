import { exerciseTwentyHtml } from "../view/exercisesView/exercise20View.js"

export const ExerciseTwentyComponent = () => {
    exerciseTwentyHtml();
    const main = document.getElementById('root');

    main.addEventListener('click', (event) => {
        const button = event.composedPath()[0].value;
        if( button == 'Limpar'){
            clear();
        }
        if( button == 'ex20Enviar') {
            const form = document.getElementById('my-form');
            const number1 = parseInt(form.number1.value);
            const number2 = parseInt(form.number2.value);
            const message = document.getElementById('message');
            var soma = 0;

            if(Number.isNaN(number1) || Number.isNaN(number2)){
                alert('Todos os campos devem ser informados');
                return;
            }
            for (var i = number1; i <= number2; i++){
                soma += i;
            }
            message.innerHTML = `Resultado: ${soma}`;
            clear();
        }
    });
}
function clear() {
    const form = document.getElementById('my-form');
    form.reset();
}