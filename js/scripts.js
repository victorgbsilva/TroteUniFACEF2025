function calcular(){
    // serão criadas duas variáveis
    // em js as variáveis não possuem tipo
    let mascote, homenagem, leite, kit, suplemento, soma, equipe
    // recupera o valor do mascote digitado pelo usuário
    mascote = Number(document.getElementById("mascote").value)
    // recupera o valor da homenagem digitado pelo usuário
    homenagem = Number(document.getElementById("homenagem").value)
    // recupera a quantidade de litros de leite entregues
    leite = Number(document.getElementById("leite").value)
    // recupera a quantidade de kits entregues
    kit = Number(document.getElementById("kit").value)
    // recupera a quantidade de suplementos entregues
    suplemento = Number(document.getElementById("suplemento").value)
    // para calcular a soma parcial:
    soma = mascote + homenagem + (2 * (leite))
    // vamos calcular a pontuação considerando as metas de kit e suplemento
    equipe = document.getElementById("equipe").value
    if (equipe == "Laranja"){
        if (kit >= 97){
            soma = soma + 5000 + ((kit-97) * 30)
         }
        else if (kit >= 78){
            soma = soma + 4000 ((kit-78) * 30)
        }
        else if (kit >= 49){
            soma = soma + 2500 ((kit-49) * 30)
        }
        else if (kit >= 19){
            soma = soma + 1000 ((kit-19) * 30)
        }
    } 
    // retorna o valor ao HTML
    // template string
    document.getElementById("soma").innerHTML = `A soma é: ${soma}`
} 