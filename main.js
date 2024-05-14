const main = document.querySelector("main");

function addData() {
    for (let i = 0; i < 10; i++) {
        main.innerHTML += `
        <div class="item">
            <img src="" alt="Imagen">
            <h2>RESPONSIVE</h2>
            <p>Adaptabilidad</p>
        </div>
        `
    }
}

addData()