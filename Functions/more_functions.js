function displayMailingLabel(name,address,city,state,zipcode){
    console.log(`name :${name}`);
    console.log(`address : ${address}`);
    console.log(`city : ${city}`);
    console.log(`state : ${state}`);
    console.log(`Zipcode : ${zipcode}`);
    console.log("------------------------------------------------------------------------------------");

}
function addNumber(num1,num2){

    return num1+num2;
    
}

function displayReceipt(totalDue,amountPaid){
    if(amountPaid<totalDue){
        console.log(`still ${(totalDue-amountPaid).toFixed(2)} more dollars of money needed`);
    }

    console.log(`Total Due   : ${totalDue}`);
    console.log(`Amount paid : ${amountPaid}`);
    console.log(`change Due  : ${(amountPaid-totalDue).toFixed(2)}`);
    console.log("---------------------------------------------------------------------------------------");
}
displayMailingLabel("lavanya","815 E grovers ave","Phoenix","Arizona",85034 );
displayReceipt(134.45,120.50);
displayReceipt(134.45,140.50);
displayReceipt(134.45,134.45);
addNumber(40,36.78)
