export const exerciseNineTeenHtml = () => {
    const main = document.getElementById('root');
    const contentHtml = `
    <div class="container mt-3 w-50">
    <div class="card">
      <div class="card-header">
        <h5 class="card-title">Exercício 19</h5>
      </div>
      <div class="card-body">
        <p class="card-text ">
            Uma empresa vai conceder um aumento percentual de salário aos seus funcionários dependendo de quanto cada pessoa ganha, conforme tabela abaixo. Fazer um programa para ler o salário de uma pessoa, daí mostrar qual o novo salário dessa pessoa depois do aumento, quanto foi o aumento e qual foi a porcentagem de aumento.
          <table style="width: 400px;">
              <tr>
                  <th>Salário Atual</th>
                  <th>Aumento</th>
              </tr>
              <tr>
                  <td>Até R$ 999.99</td>
                  <td>20%</td>
              </tr>
              <tr>
                  <td>Entre R$ 1000.00 e R$ 2999.99</td>
                  <td>15%</td>
              </tr>
              <tr>
                  <td>Entre R$ 3000.00 e R$ 7999.99</td>
                  <td>10%</td>
              </tr>
              <tr>
                  <td>Acima de R$ 8000.00</td>
                  <td>05%</td>
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
            <span class="input-group-text">Digite o valor do salário da pessoa R$ </span>
            <input
              id="salary"
              type="number"
              min="0"
              step="0.01"
              class="form-control"
              placeholder="0.00"
            />
          </div>
          <div class="mt-3 d-grid gap-2 d-md-flex justify-content-md-end" id="buttons" >
            <button type="reset" class="btn btn-danger" value="Limpar"> Limpar </button>
            <button type="button" class="btn btn-primary" value="ex19Enviar">Enviar</button>
          </div>
        </form>
      </div>
      <div class="card-footer text-body-secondary text-center">
          <div class="input-group">
              <span class="input-group-text">Novo Salário R$ </span>
              <input
                id="new_salary"
                type="number"
                min="0"
                step="0.01"
                class="form-control"
                placeholder="0.00"
                disabled
              />
          </div>
          <div class="input-group">
              <span class="input-group-text">Aumento R$ </span>
              <input
                id="increase"
                type="number"
                min="0"
                step="0.01"
                class="form-control"
                placeholder="0.00"
                disabled
              />
          </div>
          <div class="input-group">
              <span class="input-group-text">Porcentagem </span>
              <input
                id="percentage"
                type="text"
                class="form-control"

              />
          </div>
      </div>
    </div>
`
main.innerHTML = contentHtml;
}