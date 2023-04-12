import { exerciseSevenHtml } from "../view/exercisesView/exercise7View.js";

export const ExerciseSevenComponent = () => {
    exerciseSevenHtml();
    const main = document.getElementById('root');

    main.addEventListener('click', (event) => {
        const button = event.composedPath()[0].value;
        if( button == 'Limpar'){
            clear();
        }
        if( button == 'ex7Enviar') {
            const travelledDistance = parseInt(document.getElementById('travelled_distance').value);
            const spentFuel = parseFloat(document.getElementById('spent_fuel').value);
            if(!travelledDistance || !spentFuel ){
                alert('Todos os dados devem ser preenchidos e diferentes de zero');
                return;
            }
            const averageConsumption = travelledDistance/spentFuel;
            document.getElementById('average_consumption').value = averageConsumption.toFixed(3);
            clear();
        }
    });
}
function clear() {
    const form = document.getElementById('my-form');
    form.reset();
}