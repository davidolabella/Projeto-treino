window.onload = function (){
    var itens = [
        {
            name: 'Walk',
            check: false
        }
    ]
    var add_task_input = document.getElementById('add_task_input');
    var add_task_submit = document.getElementById('add_task_submit');
    var list = document.getElementById('list');
    // add a new task
    add_task_submit.onclick = (e) =>{
        e.preventDefault();
        if(add_task_input.value != ''){
            itens.push({
                name: add_task_input.value,
                check: false
            });
            add_task_input.value = '';
            start();
        }
        
    }
    // buttons function
    function button_click(){
        var box = document.getElementsByClassName('box');
        var edit_task = document.getElementsByClassName('edit_task');
        var task = document.getElementsByClassName('task');
        var trash = document.getElementsByClassName('trash');
        var pencil = document.getElementsByClassName('pencil');
        for(let i = 0; i < itens.length; i++){
            let pencil_test = false;
            pencil[i].onclick = () =>{
                if(pencil_test == false){
                    edit_task[i].style.display = "block";
                    edit_task[i].focus();
                    task[i].style.display = "none";
                    pencil[i].style.backgroundImage = "url('./img/check.png')";
                    pencil_test = true;
                    
                }else{
                    if(edit_task[i].value != ''){
                        itens[i].name = edit_task[i].value;
                    };   
                    start();
                    edit_task[i].style.display = "none";
                    pencil_test = false;
                }
                
            };
            trash[i].onclick = () =>{
                itens.splice(i,1);
                start();
                
            }
            box[i].onclick = () =>{
                if(itens[i].check == false){
                    itens[i].check = true;
                }else{
                    itens[i].check = false;
                }
               start();
            }
        };  
    }
    function start(){
        list.innerHTML = '';
        itens.map((val) => {
            let check_box_test = '<input type="checkbox" class="box"></input>';
            let task_cut = val.name;
            if(val.check == true){
                check_box_test = '<input type="checkbox" class="box" checked>'
                task_cut = `<s>${val.name}</s>`
            }else{
                check_box_test = '<input type="checkbox" class="box">';
                task_cut = val.name;
            }
            list.innerHTML += `
                <div class="single">
                    ${check_box_test}
                    <input type="text" class="edit_task">
                    <p class="task">${task_cut}</p>
                    <div class="buttons">
                        <div class="trash" style="background-image: url(./img/excluir.png);"></div>
                        <div class="pencil" style="background-image: url(./img/circulo.png);"></div>
                    </div>
            ` 
        })
        button_click();
    };
    start();
}
    