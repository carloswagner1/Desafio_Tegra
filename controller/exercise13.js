import { exerciseThirteenHtml } from "../view/exercisesView/exercise13View.js"

export const ExerciseThirteenComponent = () => {
    exerciseThirteenHtml();
    const main = document.getElementById('root');

    main.addEventListener('click', (event) => {
        const button = event.composedPath()[0].value;
        if( button == 'Limpar'){
            clear();
        }
        if( button == 'ex13Enviar') {
            const minutes = parseInt(document.getElementById('spent_minutes').value);
            var totalValue = document.getElementById('total_value');

            if(Number.isNaN(minutes)){
                alert('Insira a quantidades de minutos consumidos');
                return;
            }

            totalValue.value = minutes <= 100 ? '50.00' : (50 + (minutes - 100) * 2).toFixed(2);
            clear();
        }
    });
}
function clear() {
    const form = document.getElementById('my-form');
    form.reset();
}

