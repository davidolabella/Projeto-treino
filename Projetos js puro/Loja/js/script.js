window.onload = function(){

    // criação do array itens e definição dos itens iniciais

        const itens =[
            {
                id: 0,
                nome: 'Iphone',
                img: 'img/celular.png',
                quantidade: 0,
                preco: 3200
            },
            {
                id: 1,
                nome: 'short',
                img: 'img/shorts.png',
                quantidade: 0,
                preco: 50
            },
            {
                id: 2,
                nome: 'sapato',
                img: 'img/sapato.png',
                quantidade: 0,
                preco: 300
            },
            {
                id: 3,
                nome: 'notebook',
                img: 'img/notebook.png',
                quantidade: 0,
                preco: 2000
            },
            
        ]
    ////////////////////////////////////////////////////
    
    // Criar novo item com o form
        var form = document.getElementById('form');
        form.addEventListener('submit',function(event) {
            event.preventDefault();//não recarregar a pagina quando enviar 
            let nome = document.getElementById('nome').value;
            let preco = document.getElementById('preco').value;
            let img = document.getElementById('img').value;
            itens.push({
                id: itens.length,
                nome: nome,
                img: img,
                quantidade: 0,
                preco: parseFloat(preco)//preco em float
            });

            form.reset(); //limpar o form
            form.style.display = 'none';// fechar o form
            addproduto_img.firstElementChild.setAttribute('src', 'img/adicionar.png');
            inicioLoja(); //atualizar a loja
        });
    ///////////////////////////////////////////////////

    // criaçao da função inicioloja para cria a loja
        inicioLoja =  () =>{
            var containerp = document.getElementById('containerp');
            containerp.innerHTML = '';//limpa a loja
            itens.map((val) => {
                containerp.innerHTML += `
                
                <div class="single">
                    <div class="singlecont">
                        <img src="${val.img}"></img>
                        <div class="dados">
                            <p>${val.nome}</p>
                            <p>R$ ${val.preco},00</p>
                        </div>
                        <a class="addcarrinho" id="${val.id}" href="#">Adicionar ao Carrinho</a>
                    </div>
                </div>
                
                `//cria a loja

            })
            //faz o botao funcionar sempre
            var addcarrinho_buttom = document.getElementsByClassName('addcarrinho') 
            for(let i = 0; i < itens.length; i++){
                addcarrinho_buttom[i].addEventListener('click', function(){
                    itens[i].quantidade ++;
                    atualizarCarrinho();
                });
            }
        };

        inicioLoja();//inicia a loja
    /////////////////////////////////////////////////////////
    
    //abre e fecha o formulario   
        var addproduto_img = document.getElementById('addproduto-img');

        addproduto_img.addEventListener('click', function() {
            let img = addproduto_img.firstElementChild;
            if (img.getAttribute('src') == 'img/adicionar.png') {
                document.getElementById('form').style.display = 'flex';
                img.setAttribute('src', 'img/fechar.png');
            } else if (img.getAttribute('src') == 'img/fechar.png') {
                document.getElementById('form').style.display = 'none';
                img.setAttribute('src', 'img/adicionar.png');
            }
        });
    //////////////////////////////////////

    //abre e fecha o carrinho
        var carrinho_img = document.getElementById('carrinho-img');

        carrinho_img.addEventListener('click', function() {
            let img = carrinho_img.firstElementChild;
            if (img.getAttribute('src') == 'img/carrinho.png') {
                document.getElementById('carrinho').style.display = 'block';
                img.setAttribute('src', 'img/fechar.png');
            } else if (img.getAttribute('src') == 'img/fechar.png') {
                document.getElementById('carrinho').style.display = 'none';
                img.setAttribute('src', 'img/carrinho.png');
            }
        });
    ///////////////////////////////////////
    
   // função de atualizar o carrinho com condição
        atualizarCarrinho =  () =>{
            var containerc = document.getElementById('containerc');
            containerc.innerHTML = '';
            itens.map((val) => {
                if(val.quantidade > 0){
                    containerc.innerHTML += `
                
                <div class="single">
                    <div class="singlecont">
                        <img src="${val.img}"></img>
                        <div class="dados">
                            <p>${val.nome}</p>
                            <p>R$ ${val.preco},00</p>
                            <p>Quant: ${val.quantidade}</p>
                        </div>
                    </div>
                </div>
                
                `
                };
            });
        };
    ///////////////////////////////////////////////
    
    // botão para finalizar compra
        var finalizarc = document.getElementById('finalizar');

        finalizarc.addEventListener('click', function(){
            containerc.innerHTML = '<p>Carrinho Vazio...<p>';
            itens.map((val) => {
                val.quantidade = 0;
            });
            alert('Compra concluída com sucesso!')
        });
    //////////////////////////////

    //botão para limpar carrinho
        var limparc = document.getElementById('limpar');

        limparc.addEventListener('click', function(){
            containerc.innerHTML = '<p>Carrinho Vazio...<p>';
            itens.map((val) => {
                val.quantidade = 0;
            });
            alert('Carrinho Limpo com sucesso!')
        });
    /////////////////////////////////////////////
    
};