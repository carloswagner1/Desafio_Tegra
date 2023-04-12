import { exerciseFourteenHtml } from "../view/exercisesView/exercise14View.js"

export const ExerciseFourteenComponent = () => {
    exerciseFourteenHtml();
    const main = document.getElementById('root');

    main.addEventListener('click', (event) => {
        const button = event.composedPath()[0].value;
        if( button == 'Limpar'){
            clear();
        }
        if( button == 'ex14Enviar') {
            const unitValue = parseFloat(document.getElementById('unit_value').value);
            const amount = parseInt(document.getElementById('amount').value);
            const amountReceived = parseFloat(document.getElementById('amount_received').value);
            const money_back = document.getElementById('money_back');
            if(Number.isNaN(unitValue) || Number.isNaN(amount) || Number.isNaN(amountReceived) ){
                alert('Todos os campos devem ser preenchidos');
                return;
            }
            var result = (amountReceived - (amount * unitValue))
            if (result < 0) {
                money_back.innerHTML = `Dinheiro Insuficiente. Faltam R$ ${Math.abs(result).toFixed(2)}.`;
            }else{
                money_back.innerHTML =`Troco R$ ${result.toFixed(2)} `
            }


            clear();
        }6
    });
}
function clear() {
    const form = document.getElementById('my-form');
    form.reset();
}