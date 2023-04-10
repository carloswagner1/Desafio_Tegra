export const exerciseEighteenHtml = () => {
    const main = document.getElementById('root');
    const contentHtml = `
        <div class="container mt-3 w-50">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Exercício 18</h5>
            </div>
            <div class="card-body">
              <p class="card-text ">
              Deseja-se converter uma medida de temperatura da escala Celsius para Fahrenheit ou vice-versa. Para isso, você deve construir um programa que leia a letra "C" ou "F" indicando em qual escala vai ser informada uma temperatura. Em seguida, o programa deve mostrar a temperatura na outra escala com duas casas decimais. Você deve pesquisar as fórmulas para conversão de Fahrenheit->Celsius e de Celsius->Fahrenheit.
              </p>
            </div>
          </div>
        </div>
        <div class="container mt-4 w-50" >
          <div class="card">
            <div class="card-body" >
                <form id="my-form">
                    <p>Você vai digitar a temperatura em qual escala (C/F)?</p>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="celsius" value="Celsius">
                        <label class="form-check-label" for="celsius">Celsius</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="fahrenheit" value="Fahrenheit">
                        <label class="form-check-label" for="fahrenheit">Fahrenheit</label>
                    </div>
                    <div class="group visually-hidden" id="hidden_group">
                      <div class="input-group mt-3">
                          <span class="input-group-text" id="span_text"></span>
                          <input
                          name="temperature"
                          id="temperature"
                          type="number"
                          step=".01"                    class="form-control"                    placeholder="0.00"
                          />
                      </div>
                      <div class="mt-2 d-grid gap-2 d-md-flex justify-content-md-end" id="buttons" >
                          <button type="reset" class="btn btn-danger" value="Limpar">Limpar</button>
                          <button type="button" class="btn btn-primary" value="ex18Enviar">Enviar</button>
                      </div>
                    </div>
                </form>
            </div>
            <div class="card-footer text-body-secondary">
              <h5 id="message"></h5>
            </div>
          </div>
    `
    main.innerHTML = contentHtml;
}