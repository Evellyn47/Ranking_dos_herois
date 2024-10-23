const prompt = require("prompt-sync")();
console.log(" == RANKING DOS HERÓIS ==");

let nome = prompt("Digite o seu nome: ");
console.log("Herói " + nome + ", digite a quantidade de XP que você obteve na sua jornada.");

let sair = false;

do {
    let escolha = prompt("Digite: [1] - para sair | [2] - para consultar pontuação: ");
    escolha = parseInt(escolha); 

    if (escolha === 1) {
        sair = true;
    } else if (escolha === 2) {
        let quantidadeXp = prompt("Digite a pontuação do seu Herói: ");
        quantidadeXp = parseInt(quantidadeXp); 

        switch (true) {
            case (quantidadeXp <= 1000):
                console.log(quantidadeXp + " - A sua classificação é: FERRO");
                break;
            case (quantidadeXp > 1000 && quantidadeXp <= 2000):
                console.log(quantidadeXp + " - A sua classificação é: BRONZE");
                break;
            case (quantidadeXp > 2000 && quantidadeXp <= 5000):
                console.log(quantidadeXp + " - A sua classificação é: PRATA");
                break;
            case (quantidadeXp > 5000 && quantidadeXp <= 7000):
                console.log(quantidadeXp + " - A sua classificação é: OURO");
                break;
            case (quantidadeXp > 7000 && quantidadeXp <= 8000):
                console.log(quantidadeXp + " - A sua classificação é: PLATINA");
                break;
            case (quantidadeXp > 8000 && quantidadeXp <= 9000):
                console.log(quantidadeXp + " - A sua classificação é: ASCENDENTE");
                break;
            case (quantidadeXp > 9000 && quantidadeXp <= 10000):
                console.log(quantidadeXp + " - A sua classificação é: IMORTAL");
                break;
            case (quantidadeXp > 10000):
                console.log(quantidadeXp + " - A sua classificação é: RADIANTE ...PARABÉNS PELA CONQUISTA "+ nome + " !!");
                break;
            default:
                console.log("Pontuação inválida. Tente novamente.");
                break;
        }
    } else {
        console.log("Opção inválida. Tente novamente.");
    }
} while (!sair); 
