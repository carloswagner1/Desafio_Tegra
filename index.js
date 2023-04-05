import { ExerciseOneComponent } from "./controller/exercise1.js";
import { ExerciseTwoComponent } from "./controller/exercise2.js";
import { ExerciseThreeComponent } from "./controller/exercise3.js";
import { ExerciseFourComponent } from "./controller/exercise4.js";
import { ExerciseFiveComponent } from "./controller/exercise5.js";
import { ExerciseSixComponent } from "./controller/exercise6.js";

const link = document.getElementById('link');

link.addEventListener('click', (event) => {
    const option = event.composedPath()[0].innerText;

    switch (option) {
        case 'Exercício 1':
            ExerciseOneComponent();
            break;
        case 'Exercício 2':
            ExerciseTwoComponent();
            break;
        case 'Exercício 3':
            ExerciseThreeComponent();
            break;
        case 'Exercício 4':
            ExerciseFourComponent();
            break;
        case 'Exercício 5':
            ExerciseFiveComponent();
            break;
        case 'Exercício 6':
            ExerciseSixComponent();
            break;
    }


})

