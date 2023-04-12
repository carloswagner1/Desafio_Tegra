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
import { ExerciseThirteenComponent } from "./controller/exercise13.js";
import { ExerciseFourteenComponent } from "./controller/exercise14.js";
import { ExerciseFifteenComponent } from "./controller/exercise15.js";
import { ExerciseSixteenComponent } from "./controller/exercise16.js";
import { ExerciseSeventeenComponent } from "./controller/exercise17.js";
import { ExerciseEighteenComponent } from "./controller/exercise18.js";
import { ExerciseNineTeenComponent } from "./controller/exercise19.js";
import { ExerciseTwentyComponent } from "./controller/exercise20.js";
import { ExerciseTwentyOneComponent } from "./controller/exercise21.js";
import { ExerciseTwentyTwoComponent } from "./controller/exercise22.js";
import { ExerciseTwentyThreeComponent } from "./controller/exercise23.js";
import { ExerciseTwentyFourComponent } from "./controller/exercise24.js";
import { ExerciseTwentyFiveComponent } from "./controller/exercise25.js";
import { ExerciseTwentySixComponent } from "./controller/exercise26.js";
import { ExerciseTwentySevenComponent } from "./controller/exercise27.js";
import { ExerciseTwentyEightComponent } from "./controller/exercise28.js";
import { ExerciseTwentyNineComponent } from "./controller/exercise29.js";
import { ExerciseThirtyComponent } from "./controller/exercise30.js";
import { AboutComponent } from "./controller/about.js";
import { HomeComponent } from "./controller/home.js";


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
        case 'Exercício 13':
            ExerciseThirteenComponent();
            break;
        case 'Exercício 14':
            ExerciseFourteenComponent();
            break;
        case 'Exercício 15':
            ExerciseFifteenComponent();
            break;
        case 'Exercício 16':
            ExerciseSixteenComponent();
            break;
        case 'Exercício 17':
            ExerciseSeventeenComponent();
            break;
        case 'Exercício 18':
            ExerciseEighteenComponent();
            break;
        case 'Exercício 19':
            ExerciseNineTeenComponent();
            break;
        case 'Exercício 20':
            ExerciseTwentyComponent();
            break;
        case 'Exercício 21':
            ExerciseTwentyOneComponent();
            break;
        case 'Exercício 22':
            ExerciseTwentyTwoComponent();
            break;
        case 'Exercício 23':
            ExerciseTwentyThreeComponent();
            break;
        case 'Exercício 24':
            ExerciseTwentyFourComponent();
            break;
        case 'Exercício 25':
            ExerciseTwentyFiveComponent();
            break;
        case 'Exercício 26':
            ExerciseTwentySixComponent();
            break;
        case 'Exercício 27':
            ExerciseTwentySevenComponent();
            break;
        case 'Exercício 28':
            ExerciseTwentyEightComponent();
            break;
        case 'Exercício 29':
            ExerciseTwentyNineComponent();
            break;
        case 'Exercício 30':
            ExerciseThirtyComponent();
            break;
        case 'Sobre o desafio':
            AboutComponent();
            break;
        case 'Home':
            HomeComponent();
            break;
    }
})

