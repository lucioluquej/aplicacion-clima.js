let api_key = '9a73a0f7114f7e3eb42a4fb1b4c3b6dd'
let difKelvin = 273.15
let url = 'https://api.openweathermap.org/data/2.5/weather?lang=es'

console.log

document.getElementById('botonBusqueda').addEventListener('click', () => {
    const ciudad = document.getElementById('ciudadEntrada').value
    if (ciudad){
        fetchDatosClima(ciudad)
    }
})

function fetchDatosClima(ciudad){
    fetch(`${url}&q=${ciudad}&appid=${api_key}`)
    .then(respuesta => respuesta.json())
    .then(respuesta => mostrarDatosClima(respuesta))
}

function mostrarDatosClima(Response){
    const divDatosClima = document.getElementById('datosClima')
    divDatosClima.innerHTML = ''

    const ciudadNombre = Response.name
    const pais = Response.sys.country
    const temperatura = Response.main.temp
    const humedad = Response.main.humidity
    const descripcion = Response.weather[0].description
    const icono = Response.weather[0].icon

    const ciudadTitulo = document.createElement('h2')
    ciudadTitulo.textContent = `Bienvenido a ${ciudadNombre}, ${pais}`

    const temperaturaInfo = document.createElement('p')
    temperaturaInfo.textContent = `La temperatura es: ${Math.trunc(temperatura-difKelvin)}° C`

    const humedadInfo = document.createElement('p')
    humedadInfo.textContent = `La humedad actual es de: ${humedad}%`

    const iconoInfo = document.createElement('img')
    iconoInfo.src = `https://openweathermap.org/img/wn/${icono}10d@2x.png`

    const descripInfo = document.createElement('p')
    descripInfo.textContent = `La descripcion meteorologica es: ${descripcion}`

    divDatosClima.appendChild(ciudadTitulo)
    divDatosClima.appendChild(temperaturaInfo)
    divDatosClima.appendChild(humedadInfo)
    divDatosClima.appendChild(iconoInfo)
    divDatosClima.appendChild(descripInfo)
}