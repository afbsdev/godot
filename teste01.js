
// Função para calcular o saldo de vitórias e determinar o nível do jogador
function calcularSaldoEVictorias(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;
    let nivel;

    // Determina o nível com base na quantidade de vitórias
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else if (vitorias >= 101) {
        nivel = "Imortal";
    }

    return { saldoVitorias, nivel };
}

// Função principal para obter entradas, calcular e exibir o resultado
function main() {
    // Exemplo de entradas (você pode substituí-las por prompts para entrada do usuário)
    let vitorias = parseInt(prompt("Digite a quantidade de vitórias:"));
    let derrotas = parseInt(prompt("Digite a quantidade de derrotas:"));

    // Chama a função para calcular o saldo e o nível
    let resultado = calcularSaldoEVictorias(vitorias, derrotas);

    // Exibe a mensagem final
    console.log(`O Herói tem um saldo de ${resultado.saldoVitorias} está no nível de ${resultado.nivel}`);
}

// Executa a função principal
main();
