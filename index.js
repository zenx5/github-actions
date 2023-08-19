const input = document.querySelector('#number')

document.querySelector('#up').click( ()=>{
    input.value += 1
})

document.querySelector('#down').click( ()=>{
    input.value -= 1
})