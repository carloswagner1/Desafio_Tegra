export const exerciseTwentySevenHtml = () => {
    const main = document.getElementById('root');
    const contentHtml = `
        <div class="container mt-3 w-50">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Exercício 27</h5>
            </div>
            <div class="card-body">
              <p class="card-text ">
                  Fazer um programa para verificar se um número ou palavra é palíndroma. Exibir como saída se o número ou palavra "é palíndroma" ou "não é palíndroma". Um palíndromo é algo que pode ser lido em qualquer senntido.
              </p>
            </div>
          </div>
        </div>
        <div class="container mt-4 w-50" >
          <div class="card">
            <div class="card-body" >
              <form id="my-form">
                <div class="input-group mt-3">
                  <span class="input-group-text">Digite uma palavra: </span>
                  <input
                    id="word"
                    type="text"
                    class="form-control"
                  />
                </div>
                <div class="mt-3 d-grid gap-2 d-md-flex justify-content-md-end" id="buttons" >
                  <button type="reset" class="btn btn-danger" value="Limpar"> Limpar </button>
                  <button type="button" class="btn btn-primary" value="ex27Enviar">Enviar</button>
                </div>
              </form>
            </div>
            <div class="card-footer text-body-secondary text-center">
                <h5 id="message"></h5>
            </div>
          </div>
    `
    main.innerHTML = contentHtml;
}