let myGrid

function load(container) {

    myGrid = new dhtmlXGridObject(container);
    myGrid.setHeader("Livro,Ano,Preço");
    myGrid.setColumnIds("livro,ano,preco");
    myGrid.setInitWidths("*,200,100");
    myGrid.setColAlign("left, center, center");
    myGrid.setColTypes("ed,edn,price")
    myGrid.init();

    myGrid.attachEvent("onRowCreated", function(rId,rObj,rXml){
        console.log(rId);
    });
    
}

function addLivro(iLivro = "Harry Potter", iAno=2001, iPreco=43) {
    const id = (new Date()).valueOf();
    
    myGrid.addRow(id, iLivro + ", " + iAno + " , " + iPreco);
}

function excluirLivro() {

    const idSelecionado = myGrid.getSelectedRowId();

    myGrid.deleteRow(idSelecionado);
}

function editarLivro() {

    const idSelecionado = myGrid.getSelectedRowId();

    if(idSelecionado != undefined) {
        addLivroWindow(idSelecionado);

    } else {
        alert("Nenhum livro selecionado");
    }

}

function addLivroWindow(idRow) {

    let iLivro = "",
        iAno = "",
        iPreco = "";
    if(idRow != undefined) {

        const dataGrid = myGrid.getRowData(idRow);

        iLivro = dataGrid.livro;
        iAno = dataGrid.ano;
        iPreco = dataGrid.preco;
        
    }

    const id = (new Date()).valueOf();

    const window = new dhtmlXWindows();

    window.createWindow(id, 100, 100, 300, 300);

    const toolbar = window.window(id).attachToolbar();
    const myForm = window.window(id).attachForm();

    toolbarLivroWindow(toolbar, window, myForm, idRow);

    const formStructure = [
        {type:"settings",position:"label-top", offsetLeft: 20},
        {type: "block", list: [
            {type: "input", name: 'livro', label: 'Livro:', required: true, value: iLivro},
            {type:"input", name:"ano", label:"Ano", required: true, value: iAno},
            {type:"input", name:"preco", label:"Preco", required: true, value: iPreco},
        ]},
    ];

    myForm.loadStruct(formStructure);
}

function toolbarLivroWindow(toolbar, window, form, idRow) {
    const toolbarStruct = [
        {id: "save", type: "button", text: "Salvar" },
        {type: "separator"},
        {id: "excluir", type: "button", text: "Excluir" },
        {type: "separator"},
        {id: "close", type: "button", text: "Fechar" },
    ]

    toolbar.loadStruct(toolbarStruct);

    toolbar.attachEvent("onClick", function(id) {

       switch (id) {
         case "save":
            if(form.validate()){

                const iLivro = form.getItemValue("livro");
                const iAno = form.getItemValue("ano");
                const iPreco = form.getItemValue("preco");
                
                if(idRow != undefined) {
                    
                } else {
                    addLivro(iLivro, iAno, iPreco);
                }
            }
            break;
         case "excluir": 
            excluirLivro()
            break;
         case "close": 
            const windowDestaque = window.getTopmostWindow();
            windowDestaque.close();
            break;
         default:
            console.log("default"); 
            break
       }
        
    });


}