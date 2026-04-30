AOS.init()

const dataDoEvento = new Date('May 12, 2026 19:00:00')
const timeStampDoEvento = dataDoEvento.getTime()
const contador = document.getElementById('contador')

const contaAsHoras = setInterval(() => {
    const agora = new Date()
    const timeStampAtual = agora.getTime()

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual

    const diasEmMs = 1000 * 60 * 60 * 24
    const horasEmMs = 1000 * 60 * 60
    const minutosEmMs = 1000 * 60
    const segundosEmMs = 1000

    const diasAteOEvento = Math.floor(distanciaAteOEvento / diasEmMs)
    const horasAteOEvento = Math.floor((distanciaAteOEvento % diasEmMs) / horasEmMs)
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % horasEmMs) / minutosEmMs)
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutosEmMs) / segundosEmMs)

    console.log(diasAteOEvento)
    console.log(horasAteOEvento)
    console.log(minutosAteOEvento)
    console.log(segundosAteOEvento)

    contador.innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`

    if (distanciaAteOEvento < 0) {
        clearInterval(contaAsHoras)

        contador.innerHTML = 'Evento expirado'
    }
}, 1000)
