import format from "../Js/formater.js"
let ws = {
    walletAmount(p1){
        let income = new Array();
        let expenses = new Array();
        let wallet = 0;
        const data = p1.map(element => {
            (element.type === "ingreso")
            ?(income.unshift(parseInt(element.amount)),
            console.log(income)
            ) 
            :expenses.unshift(parseInt(element.amount));
        });
        let total = income.reduce((a, b) => a + b, 0);
        console.log(total);
        let negativeTotal = expenses.reduce((a, b) => a + b, 0);
        console.log(negativeTotal);
        wallet = total - negativeTotal;
        return (format.format(wallet))
    }
}

self.addEventListener("message", (e)=>{
    postMessage(ws.walletAmount(e.data))
}) 