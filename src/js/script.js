// VALIDANDO SE O FORMULÁRIO ESTÁ VAZIO
function validaForm() {

        // ARRAYS DE ARMAZENAMENTO
        contador = 0;

        if(document.form.txtnum.value=="") {
            alert("Preencha o campo do número!");
           document.form.txtnum.focus();
           return false;
            } else {

            num = parseInt(document.form.txtnum.value);

            if (isNaN(num)) {
                alert("Digite apenas números válidos!");
                return false;
            } 
            console.log("Número digitado: ", num);

            for(let i=0;i<contador;i++) {
                contador++
                num = parseInt(document.form.txtnum.value);

                let num1 = [];
                //let numMaisInserido = [];
                let variavel = 0;
                let maiorNumero=0;
                let menorNumero=0;
                let somaTodos = 0;

                num1[i] = num;

                somaTodos += num1[i];

                if (num1[i] > variavel) {
                    num1[i] = maiorNumero
                    variavel = maiorNumero
                }

                let variavel2 = num[i];
                if (num1[i] > variavel2) {
                    num1[i] > menorNumero
                    variavel = menorNumero
                }
                
            }
            console.log("Quantidade de números digitados: ", contador)
                console.log("Maior número inserido:", maiorNumero);
                console.log("Menor número inserido:", menorNumero);
                console.log("Soma Todos Números:", somaTodos);
                return false;
    }
}