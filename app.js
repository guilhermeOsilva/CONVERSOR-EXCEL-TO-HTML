const Processor = require("./Processor");
var Reader = require("./Reader");
var Table = require("./Table");
var HtmlParser = require("./HtmlParser");
var Writer = require("./Writer");
var PDFWriter = require("./PDFWriter");

var leitor = new Reader();
var escritor = new Writer();


async function main() {
    
   var dados = await leitor.Read("./usuario.csv");
   var dadosProcessados = Processor.Process(dados);
   console.log(dadosProcessados);

   var usuarios = new Table(dadosProcessados);

   console.log(usuarios.RowCount);

   var html = await HtmlParser.Parse(usuarios);
   console.log(html);

   escritor.Write(Date.now() + ".html", html);

   PDFWriter.WritePDF("teste"+ ".pdf", html);

}



main()
