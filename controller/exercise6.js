import { exerciseSixHtml } from "../view/exercisesView/exercise6View.js";

export const ExerciseSixComponent = () => {
    exerciseSixHtml();
    const main = document.getElementById('root');

    main.addEventListener('click', (event) => {
        event.preventDefault();
        const button = event.composedPath()[0].value;
        if( button == 'Limpar'){
            clear();
        }
        if( button == 'ex6Enviar') {
            const employeeName = document.getElementById('employeeName').value;
            const hourSalary = document.getElementById('hourSalary').value;
            const amountHours = document.getElementById('amountHours').value;
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