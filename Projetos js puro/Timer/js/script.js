window.onload = function(){
    var hora = document.getElementById('hora');
    var minuto = document.getElementById('minuto');
    var segundo = document.getElementById('segundo');
    var comecar = document.getElementById('comecar');
    var display = document.getElementById('display');
    var alarm = document.getElementById('alarm');
    var minutoA;
    var segundoA;
    var horaA;
    var interval;
  /////////////////////////
    function time(id, h, m, s){
        let ha;
        let ma;
        let sa;
        if(h < 10){
            ha = '0'+ h;
        }else{
            ha = h;
        }
        
        if(m < 10){
            ma = '0'+ m;
        }else{
            ma = m;
        }

        
        if(s < 10){
            sa = '0'+ s;
        }else{
            sa = s;
        }

        return id.innerHTML = ha + ':' + ma + ':' + sa;
    }
    ////////////////
    //hora
    for(let i = 0; i <= 99; i++){
        if(i< 10){
            hora.innerHTML += '<option value="'+i+'">0'+i+'</option>';
        }else{
            hora.innerHTML += '<option value="'+i+'">'+i+'</option>';
        };
    };
    //minuto
    for(let i = 0; i <= 99; i++){
        if(i< 10){
            minuto.innerHTML += '<option value="'+i+'">0'+i+'</option>';
        }else{
            minuto.innerHTML += '<option value="'+i+'">'+i+'</option>';
        };
    };
    //segundo
    for(let i = 0; i <= 99; i++){
        if(i< 10){
            segundo.innerHTML += '<option value="'+i+'">0'+i+'</option>';
        }else{
            segundo.innerHTML += '<option value="'+i+'">'+i+'</option>';
        };
    };
    //evento de click
    comecar.addEventListener('click', function(){
        horaA = hora.value;
        minutoA = minuto.value;
        segundoA = segundo.value;

        if(horaA > 0 || minutoA > 0 || segundoA > 0 ){
            comecar.innerHTML = 'Aguarde...';
            time(display, horaA, minutoA, segundoA);
        
            interval = setInterval(function(){
                segundoA--;
                if (segundoA <= 0){
                    if(minutoA > 0){
                        minutoA --;
                        segundoA = 59;
                    }else{
                        if(horaA > 0){
                            hora --;
                            minutoA = 59;
                        }else{
                            alarm.play();
                            
                            clearInterval(interval);
                            comecar.innerHTML = 'Começar'; 
                        }
                    }
                };
                time(display, horaA, minutoA, segundoA);
            }, 1000);
        }else{
            alert("insira um tempo");
        };
    });
};