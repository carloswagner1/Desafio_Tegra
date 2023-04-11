import { exerciseTwentyTwoHtml } from "../view/exercisesView/exercise22View.js"

export const ExerciseTwentyTwoComponent = () => {
    exerciseTwentyTwoHtml();
    const main = document.getElementById('root');
    const cardFooter = document.getElementById('card-footer');

    main.addEventListener('click', (event) => {
        event.preventDefault();
        const button = event.composedPath()[0].value;
        if( button == 'Limpar'){
            clear();
            cardFooter.innerHTML = '';
        }
        if( button == 'ex22Enviar') {
            const form = document.getElementById('my-form');
            const number1 = parseInt(form.number1.value);
            cardFooter.innerHTML = '';

            if(!number1){
                alert('Informe o valor de X');
                return;
            }
            for (var i = 1; i <= 10; i++){
                cardFooter.innerHTML += `<p>${number1} X ${i} = ${number1 * i}</p>`
            }
            clear();
        }
    });
}
function clear() {
    const form = document.getElementById('my-form');
    form.reset();
}
