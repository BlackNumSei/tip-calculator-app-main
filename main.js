
function calculateTotal() {
    let getValue = this.getAttribute("value");
    let people = (document.getElementById("pessoas").value);
    let peopleTip = (document.getElementById("valor-pessoa"));
    let getBill = parseFloat(document.getElementById("money").value);
    let getCustom = (document.getElementById("numeros-porcentagem").value);

    const getTipValue = (document.getElementById("valor-total"));
    const errorPeopleMessage = document.getElementById("error");
    const total = ((getBill * getValue || getBill * getCustom) / 100);

    if(people <= 0 || !people){
        errorPeopleMessage.classList.remove("d-none");
        document.getElementById("pessoas").style.border ="1px solid red";
        getTipValue.value = "";
        peopleTip.value = "";
        return;
    }else{
        errorPeopleMessage.classList.add("d-none");
        document.getElementById("pessoas").style.border ="none";
    }
    if(getBill <= 0 || !getBill || getValue === "click"){
        return
    }
    getTipValue.value = ((getBill + total) / people).toFixed(2) 
    peopleTip.value = (total / people).toFixed(2);
}


function resetInputs(){
    document.getElementById("money").value = "";
    document.getElementById("numeros-porcentagem").value = "";
    document.getElementById("pessoas").value = "";
    document.getElementById("valor-pessoa").value = "";
    document.getElementById("valor-total").value = "";
    document.getElementById("error").classList.add("d-none");
    document.getElementById("pessoas").style.border ="none";
}

function numerosPositivos(evt) {    
    evt.target.value = Math.abs(evt.target.value);
}

(function() {
    window.addEventListener("DOMContentLoaded", function()  {
        const getButtonsTip = document.querySelectorAll("#porcentagem button");
        let customTip = (document.getElementById("numeros-porcentagem"));
        let people = document.getElementById("pessoas");
        let reset = document.getElementById("reset");
        let money = document.getElementById("money");

        money.addEventListener("input", numerosPositivos);
        people.addEventListener("input", numerosPositivos);
        customTip.addEventListener("input", numerosPositivos);
        
        reset.addEventListener("click", resetInputs);
        people.addEventListener("blur", calculateTotal);
        customTip.addEventListener("blur", calculateTotal);

        for(const button of getButtonsTip) {
            button.addEventListener("click", calculateTotal);
        }
    });
})();