function tipCalculate(){
    
    if(document.getElementById("Bill").value<=0){
        alert("Please Enter The total bill amount")
    }
    else if(document.getElementById("split").value<=0){
        alert("Please enter the amount of people that are splitting the bill")

    }
    else{ var total_bill=document.getElementById("Bill").value
    var people=document.getElementById("split").value
    var tip= document.getElementById("Tip").value/100
    var final_tip= tip*total_bill
    //parseInt changes string to number
    var tip_added=parseInt(total_bill)+final_tip
    var bill_split=tip_added/people
    bill_split=bill_split.toFixed(2)

        document.getElementById("result").innerHTML="Each Person pays:$"+bill_split
}
}
//Reset button
function resetFunction(){
    location.reload();
}
//test function
function testFunction(){
    x=4/5
    alert(x)
}