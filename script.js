
           function calcularIMC(peso, altura){
            if(peso === "" || altura === ""){
                alert('preencha os campos vazios');
                }else{
                    return (peso / Math.pow(altura,2));
                }
         }

        function limparCampos(){
             document.getElementById('#peso').value = '';
             document.getElementById('#altura').value = ''; 
        }

        function clacificacaoIMC(valor){
           if(valor < 18.5){
             document.querySelector('#classificacao').style.backgroundColor = '#83c635';
             return 'Baixo peso';
           }else if(valor >= 18.5 && valor <= 24.99 ){
             document.querySelector('#classificacao').style.backgroundColor = '#c0d90b';
             return 'Normal';
           }else if(valor >= 25 && valor <= 29.99){
             document.querySelector('#classificacao').style.backgroundColor = '#fca500';
             return 'Sobrepeso';
           }else if(valor > 29.99){
              document.querySelector('#classificacao').style.backgroundColor = '#f67600';
              return 'Obesidade';
           }
        }

          function imc(){
            let peso = document.querySelector('#peso').value;
            let altura = document.querySelector('#altura').value;
            let valor = document.querySelector('#displayIMC').value = Math.ceil(calcularIMC(peso, altura));
            document.querySelector('#classificacao').value = clacificacaoIMC(valor);
          }
