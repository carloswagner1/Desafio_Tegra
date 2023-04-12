import { exerciseOneHtml } from "../view/exercisesView/exercise1View.js"

export const ExerciseOneComponent = () => {
    exerciseOneHtml();

    const main = document.getElementById('root');

    main.addEventListener('click', (event) => {
        const button = event.composedPath()[0].value;
        if( button == 'Limpar'){
            clear();
        }
        if( button == 'ex1Enviar'){
            const landWidth = parseFloat(document.getElementById('land_width').value);
            const landLength = parseFloat(document.getElementById('land_length').value);
            const priceSquareMeter = parseFloat(document.getElementById('square_meter_value').value);

            if(Number.isNaN(landLength) || Number.isNaN(landWidth) || Number.isNaN(priceSquareMeter) ){
                alert('Todos os campos devem ser preenchidos');
                return;
            }

            const area = CalculateArea(landLength, landWidth);
            const totalValue = CalculateTotalValue(area, priceSquareMeter)

            document.getElementById('total-area').value = area.toFixed(2);
            document.getElementById('total-value').value = totalValue.toFixed(2);
            clear();
        }
    })
}
function CalculateArea(landLength, landWidth) {

    return landLength * landWidth;
}
function CalculateTotalValue(area, priceSquareMeter) {

    return priceSquareMeter * area;
}
function clear() {
    const form = document.getElementById('my-form');
    form.reset();
}