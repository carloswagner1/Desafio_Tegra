export const exerciseElevenHtml = () => {
    const main = document.getElementById('root');
    const contentHtml = `
        <div class="container mt-3 w-50">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Exercício 11</h5>
            </div>
            <div class="card-body">
              <p class="card-text ">
                  Fazer um programa para ler as duas notas que um aluno obteve no primeiro e segundo semestres de uma disciplina anual. Em seguida, mostrar a nota final que o aluno obteve (com uma casa decimal) no ano juntamente com um texto explicativo. Caso a nota final do aluno seja inferior a 60.00, mostrar a mensagem "REPROVADO".
              </p>
            </div>
          </div>
        </div>
        <div class="container mt-4 w-50" >
          <div class="card">
            <div class="card-body" >
                <form id="my-form">
                    <div class="input-group mt-3">
                        <span class="input-group-text">Digite a primeira nota</span>
                        <input
                            id="first_grade"
                            type="number"
                            min="0"
                            step=".1"
                            class="form-control"
                            placeholder="0.0"
                        />
                    </div>
                    <div class="input-group mt-3">
                        <span class="input-group-text">Digite a segunda nota</span>
                        <input
                            id="second_grade"
                            type="number"
                            min="0"
                            step=".1"
                            class="form-control"
                            placeholder="0.0"
                        />
                    </div>
                    <div class="mt-2 d-grid gap-2 d-md-flex justify-content-md-end" id="buttons" >
                        <button type="reset" class="btn btn-danger" value="Limpar"> Limpar </button>
                        <button type="button" class="btn btn-primary" value="ex11Enviar">Enviar</button>
                    </div>
                </form>
            </div>
            <div class="card-footer text-body-secondary text-center">
              <h4>Resultado</h4>
              <h5 id="final_grade"></h5>
              <h5 id="status"></h5>
            </div>
          </div>
    `
    main.innerHTML = contentHtml;
}