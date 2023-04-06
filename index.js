import { ExerciseOneComponent } from "./controller/exercise1.js";
import { ExerciseTwoComponent } from "./controller/exercise2.js";
import { ExerciseThreeComponent } from "./controller/exercise3.js";
import { ExerciseFourComponent } from "./controller/exercise4.js";
import { ExerciseFiveComponent } from "./controller/exercise5.js";
import { ExerciseSixComponent } from "./controller/exercise6.js";
import { ExerciseSevenComponent } from "./controller/exercise7.js";
import { ExerciseEightComponent } from "./controller/exercise8.js";
import { ExerciseNineComponent } from "./controller/exercise9.js";
import { ExerciseTenComponent } from "./controller/exercise10.js";
import { ExerciseElevenComponent } from "./controller/exercise11.js";
import { ExerciseTwelveComponent } from "./controller/exercise12.js";

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
        case 'Exercício 7':
            ExerciseSevenComponent();
            break;
        case 'Exercício 8':
            ExerciseEightComponent();
            break;
        case 'Exercício 9':
            ExerciseNineComponent();
            break;
        case 'Exercício 10':
            ExerciseTenComponent();
            break;
        case 'Exercício 11':
            ExerciseElevenComponent();
            break;
        case 'Exercício 12':
            ExerciseTwelveComponent();
            break;
    }


})

