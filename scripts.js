const cria = (tam=10) => {
    const r = []
    while(tam>0){
        r.push({
            estoque: parseInt(Math.random()*20),
            valor: parseFloat((parseInt(Math.random()*1000)/100).toFixed(2))
        })
        tam--
    }
    return r
}

console.log(cria())