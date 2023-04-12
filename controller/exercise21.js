import { exerciseTwentyOneHtml } from "../view/exercisesView/exercise21View.js"

export const ExerciseTwentyOneComponent = () => {
    exerciseTwentyOneHtml();
    const main = document.getElementById('root');
    const cardFooter = document.getElementById('card-footer');

    main.addEventListener('click', (event) => {
        const button = event.composedPath()[0].value;
        if( button == 'Limpar'){
            clear();
            cardFooter.innerHTML = '';
        }
        if( button == 'ex21Enviar') {
            const form = document.getElementById('my-form');
            const number1 = parseInt(form.number1.value);
            cardFooter.innerHTML = '';

            if(Number.isNaN(number1)){
                alert('Informe o valor de X');
                return;
            }
            for (var i = 1; i <= number1; i++){
                if(i % 2 == 0){
                    cardFooter.innerHTML += `<p>${i}</p>`
                };
            }
            clear();
        }
    });
}
function clear() {
    const form = document.getElementById('my-form');
    form.reset();
}