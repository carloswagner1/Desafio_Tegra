export const exerciseSixteenHTML = () => {
    const main = document.getElementById('root');
    const contentHtml = `
        <div class="container mt-3 w-50">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Exercício 16</h5>
            </div>
            <div class="card-body">
              <p class="card-text ">
                  No arremesso de dardo, o atleta tem três chances para  lançar o dardo à maior distância que conseguir. Você deve criar um programa para, dadas as medidas das três  tentativas de lançamento, informar qual foi a maior.
              </p>
            </div>
          </div>
        </div>
        <div class="container mt-4 w-50" >
          <div class="card">
            <div class="card-body" >
                <h6 class="mt-2">Digite as medidas das tentativas:</h6>
                <form id="my-form">
                    <div class="input-group mt-3">
                        <span class="input-group-text">Tentativa 1: </span>
                        <input
                            id="attempt_1"
                            type="number"
                            min="0"
                            step="0.01"
                            class="form-control"
                            placeholder="0.00"
                        />
                    </div>
                    <div class="input-group mt-3">
                        <span class="input-group-text">Tentativa 2: </span>
                        <input
                            id="attempt_2"
                            type="number"
                            min="0"
                            step="0.01"
                            class="form-control"
                            placeholder="0.00"
                        />
                    </div>
                    <div class="input-group mt-3">
                        <span class="input-group-text">Tentativa 3: </span>
                        <input
                            id="attempt_3"
                            type="number"
                            min="0"
                            step="0.01"
                            class="form-control"
                            placeholder="0.00"
                        />
                    </div>
                    <div class="mt-3 d-grid gap-2 d-md-flex justify-content-md-end" id="buttons" >
                        <button type="reset" class="btn btn-danger" value="Limpar"> Limpar </button>
                        <button type="button" class="btn btn-primary" value="ex16Enviar">Enviar</button>
                    </div>
                </form>
            </div>
            <div class="card-footer text-body-secondary text-center">
                <div class="input-group">
                    <span class="input-group-text">Maior distância: </span>
                    <input
                    id="bigger_distance"
                    type="number"
                    min="0"
                    step="0.01"
                    class="form-control"
                    placeholder="0.00"
                    disabled
                    />
                </div>
            </div>
          </div>
    `
    main.innerHTML = contentHtml;
}