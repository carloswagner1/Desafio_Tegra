import { exerciseFourHtml } from "../view/exercisesView/exercise4View.js"

export const ExerciseFourComponent = () => {
    exerciseFourHtml();

    const main = document.getElementById('root');

    main.addEventListener('click', (event) => {
        event.preventDefault();
        const button = event.composedPath()[0].value;
        if( button == 'Limpar'){
            clear();
        }
        if( button == 'ex4Enviar') {
            const unitValue = document.getElementById('unit_value').value;
            const amount = document.getElementById('amount').value;
            const amountReceived = document.getElementById('amount_received').value;
            if(unitValue == '' || amount == "" || amountReceived == ''){
                alert('Todos os campos devem ser preenchidos');
                return;
            }
            const money_back = document.getElementById('money_back');
            money_back.value = (amountReceived - (amount * unitValue)).toFixed(2);
            clear();
        }
    });
}
function clear() {
    const form = document.getElementById('my-form');
    form.reset();
}