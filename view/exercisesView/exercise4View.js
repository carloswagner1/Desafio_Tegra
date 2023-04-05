export const exerciseFourHtml = () => {
    const main = document.getElementById('root');
    const contentHtml = `
        <div class="container mt-3 w-50">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Exercício 4</h5>
            </div>
            <div class="card-body">
              <p class="card-text ">
              Fazer um programa para calcular o troco no processo de pagamento de um produto de uma mercearia. O programa deve ler o preço unitário do produto, a quantidade de unidades compradas deste produto, e o valor em dinheiro dado pelo cliente (suponha que haja dinheiro suficiente). Seu  programa deve mostrar o valor do troco a ser devolvido ao cliente.
              </p>
            </div>
          </div>
        </div>
        <div class="container mt-4 w-50" >
          <div class="card">
            <div class="card-body" >
              <form id="my-form">
                <div class="input-group">
                  <span class="input-group-text">Valor Unitário R$</span>
                  <input
                    id="unit_value"
                    type="number"
                    min="0"
                    step=".1"
                    class="form-control"
                    placeholder="0.00"
                  />
                </div>
                <div class="input-group mt-3">
                  <span class="input-group-text">Quantidade</span>
                  <input
                    id="amount"
                    type="number"
                    min="0"
                    class="form-control"
                    placeholder="0"
                  />
                </div>
                <div class="input-group mt-3">
                  <span class="input-group-text">Valor Recebido R$</span>
                  <input
                    id="amount_received"
                    type="number"
                    min="0"
                    step=".01"
                    class="form-control"
                    placeholder="0.00"
                  />
                </div>
                <div class="mt-2 d-grid gap-2 d-md-flex justify-content-md-end" id="buttons" >
                  <button type="reset" class="btn btn-danger" value="Limpar"> Limpar </button>
                  <button type="submit" class="btn btn-primary" value="ex4Enviar">Enviar</button>
                </div>
              </form>
            </div>
            <div class="card-footer text-body-secondary">
              <div class="input-group">
                <span class="input-group-text">Valor do Troco R$</span>
                <input
                  id="money_back"
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