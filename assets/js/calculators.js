function formatNumber(num){
return Number(num).toLocaleString("fa-IR");
}


function calculateXauLotSize(){

const balance =
parseFloat(
document.getElementById("balance").value
);

const risk =
parseFloat(
document.getElementById("risk").value
);

const entry =
parseFloat(
document.getElementById("entry").value
);

const stop =
parseFloat(
document.getElementById("stop").value
);

if(
!balance ||
!risk ||
!entry ||
!stop
){
return;
}

const riskAmount =
balance * (risk / 100);

const stopDistance =
Math.abs(entry - stop);

const lotSize =
riskAmount /
(stopDistance * 100);

document.getElementById("result")
.innerHTML =

`
<div class="result-item">

<b>ریسک دلاری:</b>

${formatNumber(
riskAmount.toFixed(2)
)} $

</div>

<div class="result-item">

<b>فاصله استاپ:</b>

${stopDistance.toFixed(2)}

</div>

<div class="result-item">

<b>حجم معامله:</b>

${lotSize.toFixed(2)} Lot

</div>
`;

}






function calculateLot(){

const balance=parseFloat(document.getElementById("balance").value);
const risk=parseFloat(document.getElementById("risk").value);
const stop=parseFloat(document.getElementById("stop").value);

const riskAmount=balance*risk/100;
const lot=riskAmount/stop;

document.getElementById("result").innerHTML=
`
<div>ریسک دلاری: ${formatNumber(riskAmount.toFixed(2))}$</div>
<div>حجم معامله: ${lot.toFixed(2)} Lot</div>
`;
}

function calculateProfit(){

const entry=parseFloat(document.getElementById("entry").value);
const exit=parseFloat(document.getElementById("exit").value);
const lot=parseFloat(document.getElementById("lot").value);

const profit=(exit-entry)*100*lot;

document.getElementById("result").innerHTML=
`
<div>سود / زیان</div>
<div>${formatNumber(profit.toFixed(2))}$</div>
`;
}

function calculateRR(){

const entry=parseFloat(document.getElementById("entry").value);
const stop=parseFloat(document.getElementById("stop").value);
const target=parseFloat(document.getElementById("target").value);

const risk=Math.abs(entry-stop);
const reward=Math.abs(target-entry);

document.getElementById("result").innerHTML=
`
<div>Risk: ${risk}</div>
<div>Reward: ${reward}</div>
<div>RR = 1:${(reward/risk).toFixed(2)}</div>
`;
}

function calculateMargin(){

const lot=parseFloat(document.getElementById("lot").value);
const price=parseFloat(document.getElementById("price").value);
const leverage=parseFloat(document.getElementById("leverage").value);

const margin=(lot*100*price)/leverage;

document.getElementById("result").innerHTML=
`
<div>مارجین مورد نیاز</div>
<div>${formatNumber(margin.toFixed(2))}$</div>
`;
}

function calculatePip(){

const lot=parseFloat(document.getElementById("lot").value);

const pip=lot*10;

document.getElementById("result").innerHTML=
`
<div>ارزش هر پیپ</div>
<div>${pip.toFixed(2)}$</div>
`;
}

function calculateDrawdown(){

const balance=parseFloat(document.getElementById("balance").value);
const dd=parseFloat(document.getElementById("dd").value);

const remain=balance*(1-dd/100);

document.getElementById("result").innerHTML=
`
<div>مانده حساب</div>
<div>${formatNumber(remain.toFixed(2))}$</div>
`;
}

function calculateRecovery(){

const loss=parseFloat(document.getElementById("loss").value);

const recovery=(loss/(100-loss))*100;

document.getElementById("result").innerHTML=
`
<div>درصد سود لازم برای جبران</div>
<div>${recovery.toFixed(2)}%</div>
`;
}

function calculateCompound(){

const capital=parseFloat(document.getElementById("capital").value);
const daily=parseFloat(document.getElementById("daily").value);
const days=parseFloat(document.getElementById("days").value);

const result=
capital*Math.pow(
1+(daily/100),
days
);

document.getElementById("result").innerHTML=
`
<div>سرمایه نهایی</div>
<div>${formatNumber(result.toFixed(0))}$</div>
`;
}
