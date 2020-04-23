const nombreVerres = prompt("Saisissez le nombre de verres que vous comptez consommer");

for (let i = 0; i < nombreVerres; i++) {
    let numeroVerre, verre;
    numeroVerre = i + 1;
    if (numeroVerre % 5 === 0) {
        verre = "eau";
    } else {
        verre = "alcool";
    }
    document.write(numeroVerre + " : " + verre + "<br/>");
}