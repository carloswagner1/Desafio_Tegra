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
            const unit_value = document.getElementById('unit_value').value;
            const amount = document.getElementById('amount').value;
            const amount_received = document.getElementById('amount_received').value;
            const money_back = document.getElementById('money_back');
            money_back.value = (amount_received - (amount * unit_value)).toFixed(2);
            clear();
        }
    });
}
function clear() {
    const form = document.getElementById('my-form');
    form.reset();
}