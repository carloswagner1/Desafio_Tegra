import { ExerciseTwentyThreeHtml } from "../view/exercisesView/exercise23View.js"

export const ExerciseTwentyThreeComponent = () => {
    ExerciseTwentyThreeHtml();

    const main = document.getElementById('root');

    main.addEventListener('click', (event) => {
        event.preventDefault();
        const button = event.composedPath()[0].value;
        if( button == 'Limpar'){
            clear();
        }
        if( button == 'ex23Enviar') {
            const form = document.getElementById('my-form');
            var number1 = parseInt(form.number1.value);
            var number2 = parseInt(form.number2.value);
            const message = document.getElementById('message');
            var soma = 0;

            if(!number1 || !number2){
                alert('Todos os campos devem ser informados');
                return;
            }
            if(number1 > number2){
                var temp = number1;
                number1 = number2;
                number2 = temp;
            }

            for (var i = number1; i < number2; i++){

                if(i % 2 != 0){
                    soma += i;
                }
            }
            message.innerHTML = `SOMA DOS ÍMPARES = ${soma}`;
            clear();
        }
    });
 }

function clear() {
    const form = document.getElementById('my-form');
    form.reset();
}
