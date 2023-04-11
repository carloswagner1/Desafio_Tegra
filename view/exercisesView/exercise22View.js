export const exerciseTwentyTwoHtml = () =>{

    const main = document.getElementById('root');
    const contentHtml = `
        <div class="container mt-3 w-50">
        <div class="card">
            <div class="card-header">
            <h5 class="card-title">Exercício 22</h5>
            </div>
            <div class="card-body">
            <p class="card-text ">
                Ler um número inteiro N, daí mostrar na tela a tabuada de N para 1 a 10.
            </p>
            </div>
        </div>
        </div>
        <div class="container mt-4 w-50" >
        <div class="card">
            <div class="card-body" >
                <form id="my-form">
                    <div class="input-group mt-3">
                        <span class="input-group-text">Deseja a tabuada para qual valor? </span>
                        <input
                        name="number1"
                        id="number_1"
                        type="number"
                        class="form-control"
                        placeholder="0"
                        />
                    </div>
                    <div class="mt-2 d-grid gap-2 d-md-flex justify-content-md-end" id="buttons" >
                        <button type="reset" class="btn btn-danger" value="Limpar">Limpar</button>
                        <button type="button" class="btn btn-primary" value="ex22Enviar">Enviar</button>
                    </div>
                </form>
            </div>
            <div class="card-footer text-body-secondary" id="card-footer">
            </div>
        </div>
    `
    main.innerHTML = contentHtml;
}