import { exerciseFourHtml } from "../view/exercisesView/exercise4View.js"

export const ExerciseFourComponent = () => {
    exerciseFourHtml();

    const main = document.getElementById('root');

    main.addEventListener('click', (event) => {
        const button = event.composedPath()[0].value;
        if( button == 'Limpar'){
            clear();
        }
        if( button == 'ex4Enviar') {
            const unitValue = parseFloat(document.getElementById('unit_value').value);
            const amount = parseInt(document.getElementById('amount').value);
            const amountReceived = parseInt(document.getElementById('amount_received').value);
            if(Number.isNaN(unitValue) || Number.isNaN(amount) || Number.isNaN(amountReceived)){
                alert('Preencha os campos com valores válidos');
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