let calBtn = document.querySelector('.calculate');

calBtn.addEventListener('click', ()=> {
    let principleAmt = document.getElementById('principleAmt').value;
    let interest = document.getElementById('interest').value;
    let time = document.getElementById('time').value;
    let output = document.querySelector('.output>h3');

    let ans = Number(principleAmt) + calculateCompoundInterest(principleAmt, time, interest);
    output.textContent = `Returns ${ans.toFixed(2)} INR`;
})

function calculateCompoundInterest(principalAmt, time, interestRate) {
    const interestRateDecimal = interestRate / 100.0;

    const compoundInterest = principalAmt * Math.pow((1 + interestRateDecimal), time) - principalAmt;

    return Number(compoundInterest.toFixed(2));
}