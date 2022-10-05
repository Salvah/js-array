const cria = (tam=10) => {
    const r = []
    while(tam>0){
        r.push({
            estoque: parseInt(Math.random()*20),
            valor: parseInt(Math.random()*10000)/100
        })
        tam--
    }
    return r
}

const produtos = cria(100)

// const produto = produtos.find(p => {
//     console.log(p.estoque)
//     return p.estoque > 15
// });


const cbFind = ({estoque, valor}) => estoque > 16 && valor > 50

const produto = produtos.find(cbFind)
const index = produtos.findIndex(cbFind)

const produtosFiltrados = produtos.filter(cbFind)


const temAlgumProdutoComPeloMenos15Unidades = 
    produtos.some(({estoque}) => estoque >= 15)
//console.log(temAlgumProdutoComPeloMenos15Unidades)


// console.log(produto, index)
// console.log(produtosFiltrados)
// console.log(produtos)


var produtos1
do {
    produtos1 =cria(100)
}while(!produtos1.every(({estoque}) => estoque >= 0))


// console.log('Todos os produtos')
// console.log(produtos1)

const map = produtos1.map((produto) => {
   return `<li>Estoque: ${produto.estoque}</li>`
})

// let saida = []
// for(let i = 0; i > produtos1.length; i++){
//     saida.push(`<li>${produtos1[i].estoque}</li>`)
// }


// console.log('Map')
// console.log(map)

// let quantidadeEmEstoque = 0
// for (let i =0 ; i < produtos1.length; i++){
//     quantidadeEmEstoque+=produtos1[i].estoque
// } 

const quantidadeEmEstoque = produtos1.reduce(
    (acumulado, {estoque}) => acumulado + estoque
    , 0)



let comEstoque = true
const [button] = document.getElementsByTagName('button')

const render = () => {
    const ul = document.getElementById('produtos')

    const filter = produtos1.filter(({estoque})=>
    (comEstoque && estoque > 0) || (!comEstoque && estoque === 0))
    ul.innerHTML = ''
    
    filter.forEach(({estoque, valor}) => {
        const spanEstoque = document.createElement('SPAN')
        spanEstoque.innerHTML = `Estoque: ${estoque}` 

        const spanValor = document.createElement('SPAN')
        spanValor.innerHTML = `R$ ${valor.toFixed(2)}` 

        const li = document.createElement('LI')
        li.appendChild(spanEstoque)
        li.appendChild(spanValor)
        ul.appendChild(li)
    })
}

button.addEventListener('click', () => {
    comEstoque = !comEstoque

    button.innerHTML = comEstoque ? 'Sem estoque' : 'Com estoque'
    button.classList.toggle('semEstoque')

    render()
})

render()






















