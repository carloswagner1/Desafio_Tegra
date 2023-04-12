import { exerciseSixHtml } from "../view/exercisesView/exercise6View.js";

export const ExerciseSixComponent = () => {
    exerciseSixHtml();
    const main = document.getElementById('root');

    main.addEventListener('click', (event) => {
        const button = event.composedPath()[0].value;
        if( button == 'Limpar'){
            clear();
        }
        if( button == 'ex6Enviar') {
            const employeeName = document.getElementById('employeeName').value;
            const hourSalary = parseFloat(document.getElementById('hourSalary').value);
            const amountHours = parseInt(document.getElementById('amountHours').value);
            if(!employeeName || Number.isNaN(hourSalary) || Number.isNaN(amountHours) ){
                alert('Todos os dados devem ser preenchidos');
                return;
            }
            const salary = hourSalary * amountHours;
            const message = document.getElementById('ex6Message');
            message.innerHTML = `O pagamento para ${employeeName} deve ser de R$ ${salary.toFixed(2)}`;

            clear();
        }
    });
}
function clear() {
    const form = document.getElementById('my-form');
    form.reset();
}