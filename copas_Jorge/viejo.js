// const copasSonido =[
//     ['../../../img/copas/copas sonido/copa1S.svg'],
//     ['../../../img/copas/copas sonido/copa2S.svg'],
//     ['../../../img/copas/copas sonido/copa3S.svg'],
//     ['../../../img/copas/copas sonido/copa4S.svg'],
//     ['../../../img/copas/copas sonido/copa5S.svg'],
//     ['../../../img/copas/copas sonido/copa6S.svg']
// ]

// const copasSinSonido =[
//     ['../../../img/copas/copas sin sonido/copa1NS.svg'], 
//     ['../../../img/copas/copas sin sonido/copa2NS.svg'],
//     ['../../../img/copas/copas sin sonido/copa3NS.svg'],
//     ['../../../img/copas/copas sin sonido/copa4NS.svg'],
//     ['../../../img/copas/copas sin sonido/copa5NS.svg'],
//     ['../../../img/copas/copas sin sonido/copa6NS.svg']
// ]

// const copas = [
//     ['.copa-1'],
//     ['.copa-2'],
//     ['.copa-3'],
//     ['.copa-4'],
//     ['.copa-5'],
//     ['.copa-6']
// ]

// const img = [
//     ['.img-1'],
//     ['.img-2'],
//     ['.img-3'],
//     ['.img-4'],
//     ['.img-5'],
//     ['.img-6']
// ]
// // llamar el contenedor
// const contenerPadre = document.querySelector('.contenedor-copas')

// // sacar el numero aleatorio y sacar las clase de que tiene cada img 
// const numeroAleatorio =()=>{
    
//     const numero = Math.floor(Math.random()*contenerPadre.children.length)
//     const poner = document.querySelector(img[numero])
//     return [numero,poner]
// }

// // sacar las copas aleatoriamente con sonido 
// const copaAleatoria =()=>{
//     const copa = copasSonido[numeroAleatorio()[0]]
//     return copa
// }
// // copas aleatoria sin sonido
// const copaAleatoriaSinSonido =()=>{
//     const copa = copasSinSonido[numeroAleatorio()[0]]
//     return copa
// }


// const mostrarCopasAleatorio =(cantidad,retraso)=>{
//     let cuenta = 0

//     function mostrar(){
//         const valor  = copaAleatoria()
//         const valorImg = numeroAleatorio()[1]
//         if(cuenta<cantidad){
//             if(valor == '../../../img/copas/copas sonido/copa1S.svg' && valorImg == img[0]){
//                 valorImg.src = valor
//             }else{
//                 if(valor == '../../../img/copas/copas sonido/copa2S.svg' || valorImg == img[1]){
//                     valorImg.src = valor
//                 }else{
//                     if(valor == '../../../img/copas/copas sonido/copa3S.svg' && valorImg == img[2]){
//                         valorImg.src = valor
//                     }else{
//                         if(valor == '../../../img/copas/copas sonido/copa4S.svg' && valorImg == img[3]){
//                             valorImg.src = valor
//                         }else{
//                             if(valor == '../../../img/copas/copas sonido/copa5S.svg' && valorImg == img[4]){
//                                 valorImg.src = valor
//                             }else{
//                                 if(valor == '../../../img/copas/copas sonido/copa6S.svg' && valorImg == img[5]){
//                                     valorImg.src = valor
//                                 }
//                             }
//                         }
//                     }
//                 }
//             }
//             cuenta++
//             setInterval(mostrar,retraso)
//         }
//     }
//     mostrar()

// }
// mostrarCopasAleatorio(contenerPadre.children.length,1000)

// const contenerImg = document.querySelector('.copa-1')

// contenerImg.addEventListener('click',function(){
//     const img = document.querySelector('.img-1')
//     img.src = '../../../img/copas/copas sonido/copa1S.svg'
//     setInterval(function(){
//         img.src = '../../../img/copas/copas sin sonido/copa1NS.svg'
//     },2000)

// })



// contenerPadre.innerHTML = ''
// const copa = copaAleatoria()
// const copaSinSonido = copaAleatoriaSinSonido()
// const copaAleatoria = copaAleatoria()
// const copaAleatoriaSinSonido = copaAleatoriaSinSonido()