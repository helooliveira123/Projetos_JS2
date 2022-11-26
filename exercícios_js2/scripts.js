/*ex1*/
function exibir(){
    let v1=parseInt(document.getElementById('v1').value);
    let res=document.getElementById('res');
    for(let i=0; i<=v1; i++){
        if(i%2==0){
            res.innerHTML+=i+"-";
        }
    }
}

/*ex2*/
function convert1(){
    let v2 = parseFloat(document.getElementById('v2').value);
    let res2 = document.getElementById('res2');
    let F = v2*1.8+32;
    res2.innerHTML=F+" F";
}

function convert2(){
    let v2 = parseFloat(document.getElementById('v2').value);
    let res2 = document.getElementById('res2');
    let C = (v2-32)/1.8;
    res2.innerHTML=C+" °C";
}

/*ex3*/
var nomes=[];
var valores=[];
var qntds=[];
var m=[];
var n=[];

function inserir(){
    let nome=document.getElementById('nome').value;
    let valor=document.getElementById('valor').value;
    let qntd=document.getElementById('qntd').value;

    nomes.push(nome);
    valores.push(valor);
    qntds.push(qntd);
    
    document.getElementById('nome').value = "";
    document.getElementById('valor').value = "";
    document.getElementById('qntd').value = "";
    document.getElementById('nome').focus();
}

function calcular(){
    let res3=document.getElementById('res3');
    let res4=document.getElementById('res4');
    res3.innerHTML="";
    res4.innerHTML="";

    for(let i=0; i<valores.length; i++){
        m.push(valores[i]*qntds[i]);
        n.push(nomes[i]);
    }

    let soma = 0
    for(let i in m) {
        soma += m[i]
    }
    
    res3.innerHTML="Produtos: " + n + ", ";
    res4.innerHTML="O total é de R$" + soma;
}

/*ex4*/
function calcular2(){
    let v3 = parseFloat(document.getElementById('v3').value);
    let v4 = parseFloat(document.getElementById('v4').value);
    let res5 = document.getElementById('res5');
    
    let t1 = v3/8;
    let t2 = v4-t1;
    res5.innerHTML = "Você gastou " + t1 + "L. Ainda resta(m) " + t2 + "L.";
}

/*ex5*/
function calcular3(){
    let v5=parseFloat(document.getElementById('v5').value);
    let v6=parseFloat(document.getElementById('v6').value);
    let res6=document.getElementById('res6');

    let m2=v5*v6;
    let total=m2*36.00;
    res6.innerHTML="O preço total é R$" + total; 
}

/*ex6*/
var valor = ""
var p = 0

function selected(){
    let select = document.querySelector('#select')
    valor = select.options[select.selectedIndex].value;
}

function calcular4(){
    let h = parseFloat(document.getElementById('h').value);
    let res7 = document.getElementById('res7');
    
    if (valor == 'F'){
        p = (62.1*h)-44.7;
    } 

    else{
        p = (72.7*h)-58;
    }

    res7.innerHTML="O seu peso ideal é " + p + "kg";
}

/*ex7*/
var lista = []

function inserir2(){
    let valor2=parseInt(document.getElementById('valor2').value);
    lista.push(valor2);
    document.getElementById('valor2').value = "";
    document.getElementById('valor2').focus();
}

function mostrar(){
    let res8=document.getElementById('res8');
    res8.innerHTML="";
    for (let i=0; i<lista.length; i++){
        res8.innerHTML += lista[i] + "-";
    }
    document.getElementById('valor2').focus();
}

function maior(){
    let res9=document.getElementById('res9');
    res9.innerHTML="";
    var maior = lista[0];
    for(i=1; i<lista.length; i++){
        if (lista[i] > maior){
            maior=lista[i];
        }
    }
    res9.innerHTML="O maior número é "+maior;
}

function menor(){
    let res10=document.getElementById('res10');
    res10.innerHTML="";
    var menor = lista[0];
    for(i=1; i<lista.length; i++){
        if (lista[i] < menor){
            menor=lista[i];
        }
    }
    res10.innerHTML="O menor número é "+menor;
}