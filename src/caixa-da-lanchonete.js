class CaixaDaLanchonete {
     constructor(Cardapio, MetodoDePagamento) {
        this.cardapio = new Cardapio;
        this.metodoDePagamento = new MetodoDePagamento;
     }

    calcularValorDaCompra(metodoDePagamento, itens) {
        const itensPrincipaisExtras = ['cafe', 'sanduiche'];
        const possuiItensPrincipaisExtras = itens.some(item => itensPrincipaisExtras.includes(item));

    
        if ((itens.some(item => item.codigo === 'chantily' || item.codigo === 'queijo')) && !possuiItensPrincipaisExtras){
            return "Não é possível adicionar extras sem os itens principais";
        }

        if (this.metodoDePagamento !=="Dinheiro" && this.metodoDePagamento !=="Cartão de Crédito" && this.metodoDePagamento !=="Cartão de Débito" && !this.metodoDePagamento) {
            return "Método de pagamento inválido";
        }

        if (itens.length === 0) {
            return "Não há itens no carrinho de compra!";
        }

        let valorTotal = 0;

        for (const item of itens) {
            const [codigo, quantidade] = item.split(',');
            const menuItem = this.cardapio.itens.find(menuItem => menuItem.codigo === codigo);
            if (!menuItem) {
                return "Item inválido";
            }
            if (quantidade <= 0) {
                return "Quantidade inválida!";
            }
            valorTotal += menuItem.valor * quantidade;
        }

        if (metodoDePagamento === 'dinheiro') {
            valorTotal -= valorTotal * 0.05 ;
        }

        if (metodoDePagamento === 'credito') {
            valorTotal += valorTotal * 0.03 ;
        }
        return valorTotal;
    }
}
 class Cardapio {
    constructor() {
    this.itens = [
        {codigo: 'cafe', descricao: 'Café', valor: 3.00},
        {codigo: 'chantily', descricao: 'Chantily (extra do Café)', valor: 1.50},
        {codigo: 'suco', descricao: 'Suco Natural', valor: 6.20},
        {codigo: 'sanduiche', descricao: 'Sanduíche', valor: 6.50},
        {codigo: 'queijo', descricao: 'Queijo (extra do Sanduíche)', valor: 2.00},
        {codigo: 'salgado', descricao: 'Salgado', valor: 7.25},
        {codigo: 'combo1', descricao: '1 Suco e 1 Sanduíche', valor: 9.50},
        {codigo: 'combo2', descricao: '1 Café e 1 Sanduíche', valor: 7.50}
    ]
    }
}

class MetodoDePagamento {
    constructor() {
        this.metodos = [
            {codigo: 'dinheiro', descricao: 'Dinheiro'},
            {codigo: 'credito', descricao: 'Cartão de Crédito'},
            {codigo: 'debito', descricao: 'Cartão de Débito'}
        ]
    }
}


export { CaixaDaLanchonete };
