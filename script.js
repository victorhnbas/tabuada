function calc() {
    var num = parseInt(document.getElementById("num").value);
    var res = document.getElementById("res");
    var tab = "";
    
    for (var i = 1; i <= 10; i++) {
        tab += `<p>${num} x ${i} = ${num * i}</p>`;
    }
    
    res.innerHTML = tab;
}