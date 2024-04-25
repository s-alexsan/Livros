let myGrid

function load(container) {

    myGrid = new dhtmlXGridObject(container);
    myGrid.setHeader("Livro,Ano,Preço");
    myGrid.setInitWidths("*,200,100");
    myGrid.setColAlign("left, center, center");
    myGrid.setColTypes("ed,edn,price")
    myGrid.init();

    myGrid.attachEvent("onRowCreated", function(rId,rObj,rXml){
        console.log(rId);
    });
    
}

function addLivro() {
    const id = (new Date()).valueOf();
    
    myGrid.addRow(id, "Harry Potter, 2001, 43");
}

function excluirLivro() {

    const idSelecionado = myGrid.getSelectedRowId();

    myGrid.deleteRow(idSelecionado);
}

function addLivroWindow() {
    const id = (new Date()).valueOf();

    const window = new dhtmlXWindows();

    window.createWindow(id, 100, 100, 1000, 500);
}