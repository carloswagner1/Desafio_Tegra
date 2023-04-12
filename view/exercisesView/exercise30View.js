export const exerciseThirtyHtml = () => {
    const main = document.getElementById('root');
    const contentHtml = `
        <div class="container mt-3 w-50">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Exercício 30</h5>
            </div>
            <div class="card-body">
              <p class="card-text ">
                  Escreva um programa que receba um valor numérico de até dois algarismos e transcreva esse valor por extenso.
              </p>
            </div>
          </div>
        </div>
        <div class="container mt-4 w-50" >
          <div class="card">
            <div class="card-body" >
              <form id="my-form">
                <div class="input-group mt-3">
                  <span class="input-group-text">Informe um número de até dois dígitos: </span>
                  <input
                    id="number"
                    type="text"
                    class="form-control"
                    maxlength="2"
                  />
                </div>
                <div class="mt-3 d-grid gap-2 d-md-flex justify-content-md-end" id="buttons" >
                  <button type="reset" class="btn btn-danger" value="Limpar"> Limpar </button>
                  <button type="button" class="btn btn-primary" value="ex30Enviar">Enviar</button>
                </div>
              </form>
            </div>
            <div class="card-footer text-body-secondary text-center">
                <div class="input-group">
                    <span class="input-group-text">Número por extenso: </span>
                    <input
                    id="inFull"
                    type="text"
                    class="form-control"
                    disabled
                    />
                </div>
            </div>
          </div>
    `
    main.innerHTML = contentHtml;
}