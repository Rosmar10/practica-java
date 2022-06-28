
const precio = 400000

function calculartotal() {
    let valor = document.getElementById('valor')

    let color = document.querySelector('#colorinicial')
    let colorfinal = document.getElementById('colorfinal');

    let valor1 = Number(valor.value);

    let totalfinal = document.getElementById('totalfinal');

    totalfinal.innerHTML = '' + valor1 * precio
    preciofinal.innerHTML = '' + valor1
    colorfinal.style.backgroundColor = color.value
}

container = document.querySelector("#card")
container.style.backgroundColor = "#7ba238"