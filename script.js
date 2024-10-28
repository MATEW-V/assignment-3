const hfcalc = document.getElementById("chf");
hfcalc.addEventListener("click", heronFormula);

const accalc = document.getElementById("cac");
accalc.addEventListener("click", ambiguousCase);

const nmcalc = document.getElementById("cnm");
nmcalc.addEventListener("click", newtonMethod);

const pfcalc = document.getElementById("cpf");
pfcalc.addEventListener("click", polynomialFunction);

function heronFormula() {
    const a = document.getElementById("sa").value;
    const b = document.getElementById("sb").value;
    const c = document.getElementById("sc").value;

    console.log(a,b,c);
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