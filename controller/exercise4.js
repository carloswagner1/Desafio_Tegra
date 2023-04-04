import { view } from "../view/index.js"

export const ExerciseFourComponent = () => {
    view.exerciseFourHtml();

    const main = document.getElementById('root');

    main.addEventListener('click', (event) => {
        event.preventDefault();
        const button = event.composedPath()[0].innerText;
        if( button == 'Limpar'){
            clear();
        }
        if( button == 'Enviar') {
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