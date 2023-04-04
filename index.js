import { ExerciseOneComponent } from "./controller/exercise1.js";

const link = document.getElementById('link');

link.addEventListener('click', (event) => {
    const option = event.composedPath()[0].innerText;

    switch (option) {
        case '1':
            ExerciseOneComponent();
            break;

    }


})

