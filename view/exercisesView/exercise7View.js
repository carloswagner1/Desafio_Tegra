export const exerciseSevenHtml = () => {
    const main = document.getElementById('root');
    const contentHtml = `
        <div class="container mt-3 w-50">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Exercício 7</h5>
            </div>
            <div class="card-body">
              <p class="card-text ">
                Fazer um programa para ler a distância total (em km) percorrida por um carro, bem como o total de combustível gasto por este carro ao percorrer tal distância. Seu programa deve mostrar o consumo médio do carro, com três casas decimais.
              </p>
            </div>
          </div>
        </div>
        <div class="container mt-4 w-50" >
          <div class="card">
            <div class="card-body" >
                <form id="my-form">
                    <div class="input-group mt-3">
                        <span class="input-group-text">Distância percorrida</span>
                        <input
                            id="travelled_distance"
                            type="number"
                            min="0"
                            class="form-control"
                            placeholder="0"
                        />
                        <span class="input-group-text">Km</span>
                    </div>
                    <div class="input-group mt-3">
                        <span class="input-group-text">Combustível Gasto</span>
                        <input
                            id="spent_fuel"
                            type="number"
                            min="0"
                            step=".1"
                            class="form-control"
                            placeholder="0.0"
                        />
                    </div>
                    <div class="mt-2 d-grid gap-2 d-md-flex justify-content-md-end" id="buttons" >
                        <button type="reset" class="btn btn-danger" value="Limpar"> Limpar </button>
                        <button type="submit" class="btn btn-primary" value="ex7Enviar">Enviar</button>
                    </div>
                </form>
            </div>
            <div class="card-footer text-body-secondary">
              <div class="input-group">
                <span class="input-group-text">Consumo médio</span>
                <input
                  id="average_consumption"
                  type="number"
                  min="0"
                  step=".001"
                  class="form-control"
                  placeholder="0.000"
                  disabled
                />
              </div>
          </div>
          </div>
    `
    main.innerHTML = contentHtml;
  }