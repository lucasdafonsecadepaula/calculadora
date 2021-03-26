export default function Calcular (){
    let cotai = parseFloat(document.getElementById("cotas iniciais").value);
    let cotam = parseFloat(document.getElementById("cotas mensais").value);
    let preco = parseFloat(document.getElementById("preco").value);
    let dividendo = parseFloat(document.getElementById("dividendo").value);
    let meses = parseFloat(document.getElementById("meses").value);
    let cotaf = cotam * meses;
    let somatorio = dividendo * cotai;
    let y = 0;


    for (let index = 1; index < meses; index++) {
        
        if(somatorio >= preco ){
            somatorio = somatorio - preco;
            cotaf = cotaf + 1;
            y = y + dividendo;
            index = index - 1;
        }
        else{
            somatorio = somatorio + (cotam*dividendo*index) + y;
        }  
    }

    let valorf = preco * cotaf;

    document.getElementById("cotas finais").value = cotaf;
    document.getElementById("valor final").value = valorf + somatorio;
    document.getElementById("mensalidade f").value = cotaf*dividendo;
    
    
}