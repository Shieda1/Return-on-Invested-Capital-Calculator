// https://calculator.swiftutors.com/return-on-invested-capital-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const returnonInvestedCapitalRadio = document.getElementById('returnonInvestedCapitalRadio');
const netIncomeRadio = document.getElementById('netIncomeRadio');
const dividendsRadio = document.getElementById('dividendsRadio');
const totalCapitalRadio = document.getElementById('totalCapitalRadio');

let returnonInvestedCapital;
let netIncome = v1;
let dividends = v2;
let totalCapital = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

returnonInvestedCapitalRadio.addEventListener('click', function() {
  variable1.textContent = 'Net Income';
  variable2.textContent = 'Dividends';
  variable3.textContent = 'Total Capital';
  netIncome = v1;
  dividends = v2;
  totalCapital = v3;
  result.textContent = '';
});

netIncomeRadio.addEventListener('click', function() {
  variable1.textContent = 'Return on Invested Capital (ROIC)';
  variable2.textContent = 'Dividends';
  variable3.textContent = 'Total Capital';
  returnonInvestedCapital = v1;
  dividends = v2;
  totalCapital = v3;
  result.textContent = '';
});

dividendsRadio.addEventListener('click', function() {
  variable1.textContent = 'Return on Invested Capital (ROIC)';
  variable2.textContent = 'Net Income';
  variable3.textContent = 'Total Capital';
  returnonInvestedCapital = v1;
  netIncome = v2;
  totalCapital = v3;
  result.textContent = '';
});

totalCapitalRadio.addEventListener('click', function() {
  variable1.textContent = 'Return on Invested Capital (ROIC)';
  variable2.textContent = 'Net Income';
  variable3.textContent = 'Dividends';
  returnonInvestedCapital = v1;
  netIncome = v2;
  dividends = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(returnonInvestedCapitalRadio.checked)
    result.textContent = `Return on Invested Capital = ${computeReturnonInvestedCapital().toFixed(2)} %`;

  else if(netIncomeRadio.checked)
    result.textContent = `Net Income = ${computeNetIncome().toFixed(2)}`;

  else if(dividendsRadio.checked)
    result.textContent = `Dividends = ${computeDividends().toFixed(2)}`;

  else if(totalCapitalRadio.checked)
    result.textContent = `Total Capital = ${computeTotalCapital().toFixed(2)}`;
})

// calculation

function computeReturnonInvestedCapital() {
  return ((Number(netIncome.value) - Number(dividends.value)) / Number(totalCapital.value)) * 100;
}

function computeNetIncome() {
  return ((Number(returnonInvestedCapital.value) / 100) * Number(totalCapital.value)) + Number(dividends.value);
}

function computeDividends() {
  return Number(netIncome.value) - ((Number(returnonInvestedCapital.value) / 100) * Number(totalCapital.value));
}

function computeTotalCapital() {
  return (Number(netIncome.value) - Number(dividends.value)) / (Number(returnonInvestedCapital.value) / 100);
}