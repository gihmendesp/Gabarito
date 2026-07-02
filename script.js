function gerar(){

const inicio=parseInt(document.getElementById("inicio").value);

const fim=parseInt(document.getElementById("fim").value);

const div=document.getElementById("gabarito");

div.innerHTML="";

if(isNaN(inicio)||isNaN(fim)){

alert("Informe os números.");

return;

}

for(let i=inicio;i<=fim;i++){

const questao=document.createElement("div");

questao.className="questao";

let html=`<div class="numero">Questão ${i}</div>`;

html+=`<div class="letras">`;

["A","B","C","D","E"].forEach(letra=>{

html+=`

<label>

<input type="radio"

name="q${i}"

value="${letra}">

${letra}

</label>

`;

});

html+="</div>";

questao.innerHTML=html;

div.appendChild(questao);

}

}
