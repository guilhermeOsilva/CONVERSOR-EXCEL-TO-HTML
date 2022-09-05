var Reader = require("./Reader");

var leitor = new Reader();

async function main() {
    
   var dados = await leitor.Read("./usuario.csv");

   console.log(dados);
}

main()
