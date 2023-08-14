class CaixaDaLanchonete {
        constructor(Cardapio, metodoDePagamento) {
        this.cardapio = [
            {codigo: 'cafe', descricao: 'Café', valor: 3.00},
            {codigo: 'chantily', descricao: 'Chantily (extra do Café)', valor: 1.50},
            {codigo: 'suco', descricao: 'Suco Natural', valor: 6.20},
            {codigo: 'sanduiche', descricao: 'Sanduíche', valor: 6.50},
            {codigo: 'queijo', descricao: 'Queijo (extra do Sanduíche)', valor: 2.00},
            {codigo: 'salgado', descricao: 'Salgado', valor: 7.25},
            {codigo: 'combo1', descricao: '1 Suco e 1 Sanduíche', valor: 9.50},
            {codigo: 'combo2', descricao: '1 Café e 1 Sanduíche', valor: 7.50}
        ]
        this.metodos = [
            {codigo: 'dinheiro'},
            {codigo: 'credito'},
            {codigo: 'debito'}
        ]
        }
        calcularValorDaCompra(metodoDePagamento, itens) {

            if((itens.some(item => item.startsWith("chantily")) && !itens.some(item => item.startsWith("cafe"))) || (itens.some(item => item.startsWith("queijo")) && !itens.some(item => item.startsWith("sanduiche")))) {
                return "Item extra não pode ser pedido sem o principal";
            }
            
            if (itens.length === 0) {
                return "Não há itens no carrinho de compra!";
            }
            if ((metodoDePagamento !== "dinheiro" && metodoDePagamento !== "credito" && metodoDePagamento !== "debito") || !metodoDePagamento) {
                return "Forma de pagamento inválida!";
              }
    
    
            let valorTotal = 0;
    
            for (const item of itens) {
                const [codigo, quantidade] = item.split(',');
                const menuItem = this.cardapio.find(menuItem => menuItem.codigo === codigo);
                if (!menuItem) {
                    return "Item inválido!";
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
            return "R$ " + valorTotal.toFixed(2).replace(".", ",");
        };
    }

    

export { CaixaDaLanchonete };
