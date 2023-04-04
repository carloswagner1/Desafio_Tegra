import { view } from "../view/index.js"

export const ExerciseOneComponent = () => {
    view.exerciseOneHtml();

    const main = document.getElementById('root');

    main.addEventListener('click', (event) => {
        event.preventDefault();
        const button = event.composedPath()[0].innerText;
        if( button == 'Limpar'){
            clear();
        }
        if( button == 'Enviar'){
            const land_width = Number(document.getElementById('land_width').value);
            const land_length = Number(document.getElementById('land_length').value);
            const priceSquareMeter = document.getElementById('square_meter_value').value;

            if(land_length == '' || land_width == '' || priceSquareMeter == ''){
                alert('Todos os campos devem ser preenchidos');
                return;
            }

            const area = CalculateArea(land_length, land_width);
            const totalValue = CalculateTotalValue(area, priceSquareMeter)

            document.getElementById('total-area').value = area.toFixed(2);
            document.getElementById('total-value').value = totalValue.toFixed(2);
            clear();
        }
    })
}
function CalculateArea(land_length, land_width) {

    return land_length * land_width;
}
function CalculateTotalValue(area, priceSquareMeter) {

    return priceSquareMeter * area;
}
function clear() {
    const form = document.getElementById('my-form');
    form.reset();
}