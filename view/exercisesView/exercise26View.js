export const exerciseTwentySixHtml = () => {
    const main = document.getElementById('root');
    const contentHtml = `
        <div class="container mt-3 w-50">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Exercício 26</h5>
            </div>
            <div class="card-body">
              <p class="card-text ">
                  Fazer um programa para receber uma palavra (string); Calcular a quantidade de vogais e a quantidade consoantes da palavra; Exibir os valores calculados.
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
                  <button type="button" class="btn btn-primary" value="ex26Enviar">Enviar</button>
                </div>
              </form>
            </div>
            <div class="card-footer text-body-secondary text-center">
                <div class="input-group">
                    <span class="input-group-text">Vogais </span>
                    <input
                    id="vowels"
                    type="text"
                    class="form-control"
                    disabled
                    />
                </div>
                <div class="input-group">
                    <span class="input-group-text">Consoantes </span>
                    <input
                    id="consonants"
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
