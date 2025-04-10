const cursor = document.querySelector('.cursor')
const border = document.querySelector('.border')
let txt = document.getElementById('txt')
let task = document.getElementById('task')
let aviso = document.getElementById('aviso')
const btn = document.querySelector('.btn')
const btn2 = document.querySelector('.btn2')
let i = 1
// função para adicionar tarefa
const adicionar = () => {
    if(txt.value == ''){
        aviso.innerHTML = `Preencha com uma tarefa*`
        setTimeout(() => {
            aviso.innerHTML = ``
        }, 1000);
    } else {
        const data = new Date()
        const hora = data.getHours()
        const min = data.getMinutes()
        let texto = txt.value
        txt.value = ''
        task.innerHTML += `[${i}] ${texto}. ${hora}:${min}<br>`
        i++
    }
}
// adiciona a task com Enter
document.addEventListener("keydown", function(event){
    if(event.key == "Enter"){
        adicionar()
    // limpa com Delete 
    } else if(event.key == "Delete"){
        limpar()
    }
});
// função para limpar a lista
const limpar = () => {
    task.innerText = ''
    i = 1
}

document.addEventListener('mousemove', (e) => {
    let mouseX = e.pageX
    let mouseY = e.pageY
    let borderX = e.clientX
    let borderY = e.clientY

    border.style.left = `${borderX}px`
    border.style.top = `${borderY}px`
    cursor.style.left = `${mouseX}px`
    cursor.style.top = `${mouseY}px`
})

btn.addEventListener('mouseenter', () => {
    border.style.scale = '1.5'
    border.classList.add('hover')
    btn.addEventListener('mouseleave', () => {
        border.style.scale = '1'
        border.classList.remove('hover')
    })
})

btn2.addEventListener('mouseenter', () => {
    border.style.scale = '1.5'
    border.classList.add('hover')
    btn2.addEventListener('mouseleave', () => {
        border.style.scale = '1'
        border.classList.remove('hover')
    })
})
