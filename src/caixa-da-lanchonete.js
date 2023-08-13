class CaixaDaLanchonete {
     constructor(Cardapio, MetodoDePagamento) {
        this.cardapio = new Cardapio;
        this.metodoDePagamento = new MetodoDePagamento;
        this.chantilly = false;
        this.queijo = false;
     }

    calcularValorDaCompra(metodoDePagamento, itens) {
        for (const item of itens) {
            if(item.codigo === 'chantilly') {
                this.chantilly = true;
            }
            if(item.codigo === 'queijo') {
                this.queijo = true;
            }
        }
        if (this.metodoDePagamento !=="Dinheiro" && this.metodoDePagamento !=="Cartão de Crédito" && this.metodoDePagamento !=="Cartão de Débito" && !this.metodoDePagamento) {
            return "Método de pagamento inválido";
        }
        if (itens.length === 0) {
            return "Não há itens no carrinho de compra!";
        }
        let valorTotal = 0;
        if (metodoDePagamento === 'dinheiro') {
            valorTotal -= valorTotal * 0.05 ;
        }
        if (metodoDePagamento === 'credito') {
            valorTotal += valorTotal * 0.03 ;
        }
       const itensPrinciaisExtras = ['cafe', 'sanduiche'];
       const possuiItensPrincipaisExtras = itens.some(item => itensPrinciaisExtras.includes(item));
       if ((this.chantilly || this.queijo) && !possuiItensPrincipaisExtras){
        return "Não é possível adicionar extras sem os itens principais";
    }
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
