const input = document.querySelector('#number')

document.querySelector('#up').addEventListener('click', ()=>{
    input.value = parseFloat(input.value) + 1
})

document.querySelector('#down').addEventListener('click', ()=>{
    input.value = parseFloat(input.value) - 1
})