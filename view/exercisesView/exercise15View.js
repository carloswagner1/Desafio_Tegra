export const exerciseFifteenHtml = () => {
    const main = document.getElementById('root');
    const contentHtml = `
        <div class="container mt-3 w-50">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Exercício 15</h5>
            </div>
            <div class="card-body">
              <p class="card-text ">
                Fazer um programa para ler a quantidade de glicose no sangue de uma pessoa e depois mostrar na tela a classificação desta glicose de acordo com a tabela de referência abaixo:
                <table style="width: 400px;">
                    <tr>
                        <th>Classificação</th>
                        <th>Glicose</th>
                    </tr>
                    <tr>
                        <td>Normal</td>
                        <td>Até 100 mg/dl</td>
                    </tr>
                    <tr>
                        <td>Elevado</td>
                        <td>Entre 100 e 140 mg/dl</td>
                    </tr>
                    <tr>
                        <td>Diabetes</td>
                        <td>Maior que 140 mg/dl</td>
                    </tr>
                </table>
              </p>
            </div>
          </div>
        </div>
        <div class="container mt-4 w-50" >
          <div class="card">
            <div class="card-body" >
              <form id="my-form">
                <div class="input-group mt-3">
                  <span class="input-group-text">Digite a medida da glicose: </span>
                  <input
                    id="glucose"
                    type="number"
                    min="0"
                    step="0.1"
                    class="form-control"
                    placeholder="0.0"
                  />
                </div>
                <div class="mt-3 d-grid gap-2 d-md-flex justify-content-md-end" id="buttons" >
                  <button type="reset" class="btn btn-danger" value="Limpar"> Limpar </button>
                  <button type="submit" class="btn btn-primary" value="ex15Enviar">Enviar</button>
                </div>
              </form>
            </div>
            <div class="card-footer text-body-secondary text-center">
                <div class="input-group">
                    <span class="input-group-text">Classificação: </span>
                    <input
                    id="classification"
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