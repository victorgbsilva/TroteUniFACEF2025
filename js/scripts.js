function calcular(){
    // serão criadas duas variáveis
    // em js as variáveis não possuem tipo
    let mascote, homenagem
    // recupera o valor do mascote digitado pelo usuário
    mascote = document.getElementById("mascote").value
    // recupera o valor da homenagem digitado pelo usuário
    homenagem = document.getElementsById("homenagem").value
    // para calcular a soma:
    let soma = Number(mascote) + Number(homenagem)
    // retorna o valor ao HTML
    // template string
    document.getElementById(soma).innerHTML = 'A soma é ${soma}'
}