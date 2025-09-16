// VALIDANDO SE O FORMULÁRIO ESTÁ VAZIO
function validaForm() {

        // ARRAYS DE ARMAZENAMENTO
        let contador = 0;
        let maiorNumero = 0;
        let menorNumero = 0;
        let somaTodos = 0;
        let media = 0;

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
            contador++

            for(let i=0;i<contador;i++) {
                let variavel = 0;
                num = parseInt(document.form.txtnum.value);

                let vetor = [];

                vetor[i] = num;

                somaTodos += vetor[i];
                media = somaTodos / contador;

                if (vetor[i] > variavel) {
                    vetor[i] = maiorNumero;
                    variavel = vetor[i];
                }

                let variavel2 = num[i];
                if (vetor[i] > variavel2) {
                    vetor[i] > menorNumero;
                    variavel = menorNumero;
                }
                
            }
        }
        console.log("Quantidade de números digitados: ", contador);
        console.log("Maior número inserido:", maiorNumero);
        console.log("Menor número inserido:", menorNumero);
        console.log("Soma Todos Números:", somaTodos);
        console.log("Media: ",media);
        return false;
}