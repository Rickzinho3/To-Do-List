let txt = document.getElementById('txt')
let task = document.getElementById('task')
let aviso = document.getElementById('aviso')
let i = 1
// função para adicionar tarefa
function adicionar(){
    if(txt.value == ''){
        aviso.innerHTML = `Preencha com uma tarefa`
        setTimeout(() => {
            aviso.innerHTML = ``
        }, 1000);
    } else {
        let texto = txt.value
        task.innerHTML += `[${i}] ${texto}<br>`
        i++
    }
}
// função para limpar a lista
function limpar(){
    task.innerText = ''
    i = 1
}