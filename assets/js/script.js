// funciones
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

// style
container = document.getElementById("container2")
container.style.backgroundColor = "#7ba238"
container.style.width = "30%"
container.style.borderRadius = "3%"
container.style.margin = "10%"
container.style.padding = "3%"


// Aca intente darle estilo al color final pero no me resulto, igual dejo comentado para que lo pueda revisar y evaluar.
/*colorfinal = document.getElementById("colorfinal")
colorfinal = style.height = "5%"
colorfinal = style.wigth = "10%"
colorfinal = style.backgroundColor = "#000"
colorfinal = style.borderRadius = "50%"*/