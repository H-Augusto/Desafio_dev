// 2. Faça um programa onde eu possa lançar movimentações de estoque dos produtos que estão no json abaixo, dando entrada ou saída da mercadoria no meu depósito, onde cada movimentação deve ter:
    // • Um número identificador único.
    // • Uma descrição para identificar o tipo da movimentação realizada
    // E que ao final da movimentação me retorne a qtde final do estoque do produto movimentado.


	let estoque = [
	{
		"codigoProduto": 101,
		"descricaoProduto": "Caneta Azul",
		"estoque": 150
	},
	{
		"codigoProduto": 102,
		"descricaoProduto": "Caderno Universitário",
		"estoque": 75
    },
	{
		"codigoProduto": 103,
		"descricaoProduto": "Borracha Branca",
		"estoque": 200
	},
	{
		"codigoProduto": 104,
		"descricaoProduto": "Lápis Preto HB",
		"estoque": 320
	},
	{
		"codigoProduto": 105,
		"descricaoProduto": "Marcador de Texto Amarelo",
		"estoque": 90
	}
];


let movimentacoes = [];
let proximoId = 1;

const movimentar = (codigoProduto, tipo, quantidade) => {
    const produto = estoque.find(p => p.codigoProduto === codigoProduto);

    if (!produto) {
        console.log("Produto não encontrado.");
        return;
    }

    if (quantidade <= 0) {
        console.log("Quantidade inválida.");
        return;
    }

    let descricao = "";

    if (tipo === "entrada") {
        produto.estoque += quantidade;
        descricao = "Entrada de mercadoria";
    } else if (tipo === "saida") {
        if (quantidade > produto.estoque) {
            console.log("Estoque insuficiente.");
            return;
        }
        produto.estoque -= quantidade;
        descricao = "Saída de mercadoria";
    } else {
        console.log("Tipo de movimentação inválido.");
        return;
    }

    movimentacoes.push({
        id: proximoId++,
        descricao: descricao,
        codigoProduto: codigoProduto,
        quantidade: quantidade
    });

    console.log(`${produto.descricaoProduto}: estoque final = ${produto.estoque}`);
    return produto.estoque;
};

// Testando as movimentações
movimentar(101, "entrada", 50);
movimentar(102, "saida", 20);
movimentar(102, "saida", 100);
movimentar(999, "entrada", 10);
console.log(movimentacoes);