import { view } from "../view/index.js"

export const ExerciseTwoComponent = () => {
    view.exerciseTwoHtml();

    const main = document.getElementById('root');

    main.addEventListener('click', (event) => {
        const button = event.composedPath()[0].innerText;
        if( button == 'Enviar'){
            const rectangle_base = Number(document.getElementById('rectangle_base').value);
            const rectangle_height = Number(document.getElementById('rectangle_height').value);
            if(rectangle_base ==  '' || rectangle_height == ''){
                alert("Todos os campos tem q ser preenchidos");
                return;
            }

            const area = CalculateArea(rectangle_base, rectangle_height);

            const perimeter = CalculatePerimeter(rectangle_base, rectangle_height)

            const diagonal = CalculateDiagonal(rectangle_base, rectangle_height)

            document.getElementById('total-area').value = area.toFixed(4);
            document.getElementById('perimeter').value = perimeter.toFixed(4);
            document.getElementById('diagonal').value = diagonal.toFixed(4);
            clear();
        }
    })
}
function CalculateArea(rectangle_base, rectangle_height) {
    return rectangle_base * rectangle_height;
}
function CalculatePerimeter(rectangle_base, rectangle_height) {
    return (rectangle_base + rectangle_height) * 2;
}
function CalculateDiagonal(rectangle_base, rectangle_height){
    return Math.sqrt((rectangle_base ** 2) + (rectangle_height ** 2))
}
function clear() {
    const form = document.getElementById('my-form');
    form.reset();
}