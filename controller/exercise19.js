import { exerciseNineTeenHtml } from "../view/exercisesView/exercise19View.js"

export const ExerciseNineTeenComponent = () => {
    exerciseNineTeenHtml();
    const main = document.getElementById('root');
    var percentage;
    var newSalary = 0;
    var increase = 0;

    main.addEventListener('click', (event) => {
        const button = event.composedPath()[0].value;




        if( button == 'Limpar'){
            clear();
        }
        if( button == 'ex19Enviar') {
            const salary = parseFloat(document.getElementById('salary').value);
            if(!salary){
                alert('Informe o salário do funcionário');
                return;
            }
            switch(true) {
                case(salary < 1000):
                    percentage = 20;
                    CalculateNewSalary(salary, percentage);
                    break;
                case(salary >= 1000 && salary < 3000):
                    percentage = 15;
                    CalculateNewSalary(salary, percentage);
                    break;
                case(salary >= 3000 && salary < 8000):
                    percentage = 10;
                    CalculateNewSalary(salary, percentage);
                    break;
                case(salary >= 8000):
                    percentage = 5;
                    CalculateNewSalary(salary, percentage);
                    break;
            }
            document.getElementById('new_salary').value = newSalary.toFixed(2);
            document.getElementById('increase').value = increase.toFixed(2);
            document.getElementById('percentage').value = `${percentage}%`
            clear();
        }
    });
    function CalculateNewSalary(salary, percentage){
        newSalary = salary + salary*percentage/100;
        increase = newSalary - salary;
        return newSalary, increase;
    }

}


function clear() {
    const form = document.getElementById('my-form');
    form.reset();
}