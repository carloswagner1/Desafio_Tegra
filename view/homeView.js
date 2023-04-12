export const homeHtml = () => {
    const main = document.getElementById('root')
    const contentHtml = `
    <div class="container position-absolute top-50 start-50 translate-middle w-75">
      <div class="card text-bg-secondary">
        <div class="card-header text-center mt-2">
            <h3 class="card-title">
                Bem vindo ao Programa Jovens Tegranos
            </h3>
        </div>
        <div class="card-body text-center">
            <img src="../../assets/images/AcademiaTegra.png" />
        </div>
      </div>
    </div>
`;
main.innerHTML = contentHtml;
}