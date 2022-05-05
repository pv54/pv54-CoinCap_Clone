function convertToInternationalCurrencySystem (labelValue) {
    return Math.abs(Number(labelValue)) >= 1.0e+9

    ? (Math.abs(Number(labelValue)) / 1.0e+9).toFixed(2) + "b"
    : Math.abs(Number(labelValue)) >= 1.0e+6

    ? (Math.abs(Number(labelValue)) / 1.0e+6).toFixed(2) + "m"
    : Math.abs(Number(labelValue)) >= 1.0e+3

    ? (Math.abs(Number(labelValue)) / 1.0e+3).toFixed(2) + "k"

    : Math.abs(Number(labelValue));

}

async function loader(url,table,l,n){
const tBody=table.querySelector("tbody");
const response=await fetch(url);
const {data} =await response.json();

tBody.innerHTML="";
for(let i=l;i<n;i++){
   const rowE=document.createElement("tr"); 
         const cell1=document.createElement("td");
         const im=document.createElement("img");
         const cell2=document.createElement("td");
         const cell21=document.createElement("tr");
         const cell22=document.createElement("tr");
         const cell3=document.createElement("td");
         const cell4=document.createElement("td");
         const cell5=document.createElement("td");
         const cell6=document.createElement("td");
         const cell7=document.createElement("td");
         const cell8=document.createElement("td");
         cell21.style.fontSize="14px";
         cell22.style.fontSize="11px";
         cell22.style.color="#00000099";
         cell21.style.borderBottom="0px";
         cell22.style.borderBottom="0px";
         cell1.textContent=data[i].rank;
         cell1.style.textAlign="center"
         im.src="https://assets.coincap.io/assets/icons/"+data[i].symbol.toLowerCase()+"@2x.png";
         im.style.marginTop="10px"
         im.style.height="30px";
         im.style.width="30px";
         cell21.textContent=data[i].name ;
         cell22.textContent=data[i].symbol;
         cell2.appendChild(cell21);
         cell2.appendChild(cell22);
       
         cell3.textContent="$"+parseFloat(data[i].priceUsd).toFixed(2);
         cell4.textContent="$"+convertToInternationalCurrencySystem (data[i].marketCapUsd);
         cell5.textContent="$"+parseFloat(data[i].vwap24Hr).toFixed(2);
         cell6.textContent="$"+convertToInternationalCurrencySystem (data[i].supply);
         cell7.textContent="$"+convertToInternationalCurrencySystem (data[i].volumeUsd24Hr);
         cell8.textContent=parseFloat(data[i].changePercent24Hr).toFixed(2)+"%";
         if(parseFloat(data[i].changePercent24Hr).toFixed(2)<0){
             cell8.style.color="red";
         }else { cell8.style.color="#18c683";}
         rowE.appendChild(cell1);
         rowE.appendChild(im);
         rowE.appendChild(cell2);
         rowE.appendChild(cell3);
         rowE.appendChild(cell4);
         rowE.appendChild(cell5);
         rowE.appendChild(cell6);
         rowE.appendChild(cell7);
         rowE.appendChild(cell8);
        tBody.appendChild(rowE);
}   


}
let check=0;
function execute(n){
    if(check==0||check%2==0){
    loader("https://api.coincap.io/v2/assets",document.querySelector("table"),50,n);
    check++;
    const but=document.getElementById('btn');
    but.textContent="PREV";}
    else{
        loader("https://api.coincap.io/v2/assets",document.querySelector("table"),0,50);
    check++;
    const but=document.getElementById('btn');
    but.textContent="NEXT";
    }

}

loader("https://api.coincap.io/v2/assets",document.querySelector("table"),0,50);