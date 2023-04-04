import { view } from "../view/index.js"

export const ExerciseOneComponent = () => {
    view.exerciseOneHtml();

    const main = document.getElementById('root');

    main.addEventListener('click', (event) => {
        const button = event.composedPath()[0].innerText;
        if( button == 'Limpar'){

        }
        if( button == 'Calcular'){
            document.getElementById('total-area').value = CalculateArea().toFixed(2);
            document.getElementById('total-value').value = CalculateTotalValue().toFixed(2);
            clear();
        }
    })


}
function CalculateArea() {
    const land_width = Number(document.getElementById('land_width').value);
    const land_length = Number(document.getElementById('land_length').value);
    return land_length * land_width;
}
function CalculateTotalValue() {
    const priceSquareMeter = document.getElementById('square_meter_value').value;
    return priceSquareMeter * CalculateArea();
}
function clear() {
    const form = document.getElementById('my-form');
    form.reset();
}