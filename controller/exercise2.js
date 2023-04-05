import { exerciseTwoHtml } from "../view/exercisesView/exercise2View.js"

export const ExerciseTwoComponent = () => {
    exerciseTwoHtml();

    const main = document.getElementById('root');

    main.addEventListener('click', (event) => {
        event.preventDefault();
        const button = event.composedPath()[0].value;
        if( button == 'Limpar'){
            clear();
        }
        if( button == 'ex2Enviar'){
            const rectangleBase = Number(document.getElementById('rectangle_base').value);
            const rectangleHeight = Number(document.getElementById('rectangle_height').value);
            if(rectangleBase ==  '' || rectangleHeight == ''){
                alert("Todos os campos tem q ser preenchidos");
                return;
            }

            const area = CalculateArea(rectangleBase, rectangleHeight);

            const perimeter = CalculatePerimeter(rectangleBase, rectangleHeight)

            const diagonal = CalculateDiagonal(rectangleBase, rectangleHeight)

            document.getElementById('retangleArea').value = area.toFixed(4);
            document.getElementById('perimeter').value = perimeter.toFixed(4);
            document.getElementById('diagonal').value = diagonal.toFixed(4);
            clear();
        }
    })
}
function CalculateArea(rectangleBase, rectangleHeight) {
    return rectangleBase * rectangleHeight;
}
function CalculatePerimeter(rectangleBase, rectangleHeight) {
    return (rectangleBase + rectangleHeight) * 2;
}
function CalculateDiagonal(rectangleBase, rectangleHeight){
    return Math.sqrt((rectangleBase ** 2) + (rectangleHeight ** 2))
}
function clear() {
    const form = document.getElementById('my-form');
    form.reset();
}