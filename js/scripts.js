function calcular() {
    // serão criadas duas variáveis
    // em js as variáveis não possuem tipo
    let mascote, homenagem, leite, kit, suplemento, soma, equipe, sangue;
    let arroz5, arroz1, feijao2, feijao1, macarrao, oleo, animacao, audiovisual, acao;
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
    // alimentos avulsos*
    arroz5 = Number(document.getElementById("arroz5").value)
    arroz1 = Number(document.getElementById("arroz1").value)
    feijao2 = Number(document.getElementById("feijao2").value)
    feijao1 = Number(document.getElementById("feijao1").value)
    macarrao = Number(document.getElementById("macarrao").value)
    oleo = Number(document.getElementById("oleo").value)
    // eventos*
    animacao = Number(document.getElementById("animacao").value)
    audiovisual = Number(document.getElementById("audiovisual").value)
    acao = Number(document.getElementById("acao").value)
    // para calcular a soma parcial:
    soma = mascote + homenagem + arroz5 + arroz1 + feijao2 + feijao1 + macarrao + oleo + animacao + audiovisual + acao + (2 * leite);
    // vamos calcular a pontuação considerando as metas de kit e suplemento
    equipe = document.getElementById("equipe").value
    // doação de sangue
    sangue = Number(document.getElementById("sangue").value)
    // alimentos avulsos*

    if (equipe == "Laranja") {
        if (kit >= 97 && suplemento >= 49) {
            soma = soma + 5000 + ((kit - 97) * 30) + ((suplemento - 49) * 15)
        }
        else if ((kit >= 78 && suplemento >= 39)) {
            soma = soma + 4000 + ((kit - 78) * 30) + ((suplemento - 39) * 15)
        }
        else if (kit >= 49 && suplemento >= 25) {
            soma = soma + 2500 + ((kit - 49) * 30) + ((suplemento - 25) * 15)
        }
        else if (kit >= 19 && suplemento >= 10) {
            soma = soma + 1000 + ((kit - 19) * 30) + ((suplemento - 10) * 15)
        }
        // verificar sangue
        if (sangue >= 49) {
            soma = soma + 2500 + ((sangue - 49) * 20)
        }
        else {
            soma = soma + (sangue * 20)
        }
    }
    else if (equipe == "Preta") {
        if (kit >= 103 && suplemento >= 52) {
            soma = soma + 5000 + ((kit - 103) * 30) + ((suplemento - 52) * 15)
        }
        else if ((kit >= 82 && suplemento >= 42)) {
            soma = soma + 4000 + ((kit - 82) * 30) + ((suplemento - 42) * 15)
        }
        else if (kit >= 52 && suplemento >= 26) {
            soma = soma + 2500 + ((kit - 52) * 30) + ((suplemento - 26) * 15)
        }
        else if (kit >= 21 && suplemento >= 10) {
            soma = soma + 1000 + ((kit - 21) * 30) + ((suplemento - 10) * 15)
        }
        // verificar sangue
        if (sangue >= 52) {
            soma = soma + 2500 + ((sangue - 52) * 20)
        }
        else {
            soma = soma + (sangue * 20)
        }
    }
    else if (equipe == "Roxa") {
        if (kit >= 102 && suplemento >= 51) {
            soma = soma + 5000 + ((kit - 102) * 30) + ((suplemento - 51) * 15)
        }
        else if (kit >= 82 && suplemento >= 41) {
            soma = soma + 4000 + ((kit - 82) * 30) + ((suplemento - 41) * 15)
        }
        else if (kit >= 51 && suplemento >= 26) {
            soma = soma + 2500 + ((kit - 51) * 30) + ((suplemento - 26) * 15)
        }
        else if (kit >= 20 && suplemento >= 10) {
            soma = soma + 1000 + ((kit - 20) * 30) + ((suplemento - 10) * 15)
        }
        // verificar sangue
        if (sangue >= 51) {
            soma = soma + 2500 + ((sangue - 51) * 20)
        }
        else {
            soma = soma + (sangue * 20)
        }
    }
    else if (equipe == "Verde") {
        if (kit >= 88 && suplemento >= 44) {
            soma = soma + 5000 + ((kit - 88) * 30) + ((suplemento - 44) * 15)
        }
        else if ((kit >= 70 && suplemento >= 35)) {
            soma = soma + 4000 + ((kit - 70) * 30) + ((suplemento - 35) * 15)
        }
        else if (kit >= 44 && suplemento >= 22) {
            soma = soma + 2500 + ((kit - 44) * 30) + ((suplemento - 22) * 15)
        }
        else if (kit >= 18 && suplemento >= 9) {
            soma = soma + 1000 + ((kit - 18) * 30) + ((suplemento - 9) * 15)
        }
        // verificar sangue
        if (sangue >= 44) {
            soma = soma + 2500 + ((sangue - 44) * 20)
        }
        else {
            soma = soma + (sangue * 20)
        }
    }
    else if (equipe == "Vermelha"); {
        if (kit >= 93 && suplemento >= 47) {
            soma = soma + 5000 + ((kit - 93) * 30) + ((suplemento - 47) * 15)
        }
        else if ((kit >= 74 && suplemento >= 38)) {
            soma = soma + 4000 + ((kit - 74) * 30) + ((suplemento - 38) * 15)
        }
        else if (kit >= 47 && suplemento >= 24) {
            soma = soma + 2500 + ((kit - 47) * 30) + ((suplemento - 24) * 15)
        }
        else if (kit >= 19 && suplemento >= 9) {
            soma = soma + 1000 + ((kit - 19) * 30) + ((suplemento - 9) * 15)
        }
        // verificar sangue
        if (sangue >= 47) {
            soma = soma + 2500 + ((sangue - 47) * 20)
        }
        else {
            soma = soma + (sangue * 20)
        }
    }
    // retorna o valor ao HTML
    // template string
    document.getElementById("soma").innerHTML = `A soma é: ${soma} pontos.`
}
    function limparCalculadora() {
        document.querySelector('.display').value = '';
}