function convert(){
    let a = document.getElementById("num").value;
    let b = document.getElementById("option").value;
    if(b=="f"){
        let c = (a-32)*(5/9);
        document.getElementById("result").value = String(c )+ "°C";
        return false;
    }
    if(b=="c"){
        let d = (a*1.8)+32;
        document.getElementById("result").value = String(d )+ "°F";
        return false;
    }
   return false; 
}