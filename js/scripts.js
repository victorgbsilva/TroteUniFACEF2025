function calcular() {
    // serão criadas duas variáveis
    // em js as variáveis não possuem tipo
    let mascote, homenagem, leite, kit, suplemento, soma, equipe, sangue
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
    // doação de sangue
    sangue = Number(document.getElementById("sangue").value)
    if (equipe == "Laranja") {
        if (kit >= 97 && suplemento >= 49) {
            soma = soma + 5000 + ((kit - 97) * 30) + ((suplemento - 49) * 15)
        }
        else if ((kit >= 78 && suplemento >= 39)) {
            soma = soma + 4000((kit - 78) * 30) + ((suplemento - 39) * 15)
        }
        else if (kit >= 49 && suplemento >= 25) {
            soma = soma + 2500((kit - 49) * 30) + ((suplemento - 25) * 15)
        }
        else if (kit >= 19 && suplemento >= 10) {
            soma = soma + 1000((kit - 19) * 30) + ((suplemento - 10) * 15)
        }
        // verificar sangue
        if (sangue >=49){
            soma == soma + 2500 + ((sangue - 49) * 20)
        }
        else {
            soma = soma + (sangue * 20)
        }
    }
    else if (equipe == "Preta") {

    }
    else if (equipe == "Roxa") {

    }
    else if (equipe == "Verde") {

    }
    else (equipe == "Vermelha"); {

    }
    // retorna o valor ao HTML
    // template string
    document.getElementById("soma").innerHTML = `A soma é: ${soma}`
} 