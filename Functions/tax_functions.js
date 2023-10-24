function getSocSecTax(grossPay){
return parseFloat(0.062*grossPay).toFixed(2);
}
function getMediCareTax(grossPay){
    return parseFloat(0.0145*grossPay).toFixed(2)
}
function getFederalTax(grossPay,withHoldingCode){
                   
    let withholdingAmount;
            if(withHoldingCode===0){

                withholdingAmount= parseFloat(0.23*grossPay).toFixed(2);
                return withholdingAmount;
            }
            else if(withHoldingCode===1){
                withholdingAmount= parseFloat(0.21*grossPay).toFixed(2);
                return withholdingAmount;
            }
            else if(withHoldingCode===2){
                withholdingAmount= parseFloat(0.195*grossPay).toFixed(2);
                return withholdingAmount;
            }
            else if(withHoldingCode===3){
                withholdingAmount=parseFloat(0.185*grossPay).toFixed(2);
                return withholdingAmount;
            }
            else if(withHoldingCode===4){
                withholdingAmount= parseFloat(0.185*grossPay).toFixed(2);
                return withholdingAmount;
            }
            else if(withHoldingCode>4){
                const baseRate = 0.18;  

                const additionalRate = 0.005;
                withholdingAmount = parseFloat((baseRate-((withHoldingCode - 4) * additionalRate)) * grossPay).toFixed(2);
                return withholdingAmount;
            }
    }

 
    console.log(`person1 grosspay $750 -socsectax :`+getSocSecTax(750))
    console.log(`person2 grosspay $1550 -socsectax :`+getSocSecTax(1550))
    console.log(`person3 grosspay $1100 -socsectax :`+getSocSecTax(1100))

    console.log(`------------------------------------------------------------------------------------`)
    console.log(`person1 grosspay $750 -medicare tax :`+getMediCareTax(750))
    console.log(`person2 grosspay $1550 -medicare tax :`+getMediCareTax(1550))
    console.log(`person3 grosspay $1100 -medicare tax :`+getMediCareTax(1100))

    console.log(`------------------------------------------------------------------------------------`)
    console.log(`person1 grosspay $750 -federal tax withholdingcode 0 :`+getFederalTax(750,0))
    console.log(`person2 grosspay $1550 -federal tax withholdingcode 2:`+getFederalTax(1550,2))
    console.log(`person3 grosspay $1100 -federal tax withholdingcode 6:`+getFederalTax(1100,6))