export const exerciseThirteenHtml = () => {
    const main = document.getElementById('root');
    const contentHtml = `
        <div class="container mt-3 w-50">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Exercício 13</h5>
            </div>
            <div class="card-body">
              <p class="card-text ">
                  Uma operadora de telefonia cobra R$ 50.00 por um plano básico que dá direito a 100 minutos de telefone. Cada minuto que exceder a franquia de 100 minutos custa R$ 2.00. Fazer um programa para ler a quantidade de minutos que uma pessoa consumiu, daí mostrar o valor a ser pago.
              </p>
            </div>
          </div>
        </div>
        <div class="container mt-4 w-50" >
          <div class="card">
            <div class="card-body" >
              <form id="my-form">
                <div class="input-group mt-3">
                  <span class="input-group-text">Quantidade de Minutos: </span>
                  <input
                    id="spent_minutes"
                    type="number"
                    min="0"
                    class="form-control"
                    placeholder="0"
                  />
                </div>
                <div class="mt-2 d-grid gap-2 d-md-flex justify-content-md-end" id="buttons" >
                  <button type="reset" class="btn btn-danger" value="Limpar"> Limpar </button>
                  <button type="submit" class="btn btn-primary" value="ex13Enviar">Enviar</button>
                </div>
              </form>
            </div>
            <div class="card-footer text-body-secondary text-center">
                <div class="input-group">
                    <span class="input-group-text">Valor a pagar R$: </span>
                    <input
                    id="total_value"
                    type="number"
                    min="0"
                    step=".01"
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