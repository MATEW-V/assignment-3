const hfcalc = document.getElementById("chf");
hfcalc.addEventListener("click", heronFormula);

const accalc = document.getElementById("cac");
accalc.addEventListener("click", ambiguousCase);

const nmcalc = document.getElementById("cnm");
nmcalc.addEventListener("click", newtonMethod);

const pfcalc = document.getElementById("cpf");
pfcalc.addEventListener("click", polynomialFunction);

function heronFormula() {
    const a = Number(document.getElementById("sa").value);
    const b = Number(document.getElementById("sb").value);
    const c = Number(document.getElementById("sc").value);
    
    let area = Math.round((0.25*(Math.sqrt(4 * a**2 * b**2 - (a**2 + b**2 -c**2)**2)))*10)/10;

    document.getElementById("ahf").value = area;
}

function ambiguousCase() {
    const a = document.getElementById("aa").value;
    const b = document.getElementById("ab").value;
    const c = document.getElementById("ac").value;

    console.log(a,b,c);
}

function newtonMethod() {
    const rg = document.getElementById("rg").value;
    
    console.log(rg);
}

function polynomialFunction() {
    const a = document.getElementById("co").value;
    const b = document.getElementById("ex").value;
    const c = document.getElementById("xv").value;

    console.log(a,b,c);
}