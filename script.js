const hfcalc = document.getElementById("chf");
hfcalc.addEventListener("click", heronFormula);

const accalc = document.getElementById("cac");
accalc.addEventListener("click", ambiguousCase);

const nmcalc = document.getElementById("cnm");
nmcalc.addEventListener("click", newtonMethod);

const pfcalc = document.getElementById("cpf");
pfcalc.addEventListener("click", polynomialFunction);

function heronFormula() {
    document.getElementById("ahf").value = "";
    const a = Number(document.getElementById("sa").value);
    const b = Number(document.getElementById("sb").value);
    const c = Number(document.getElementById("sc").value);

    let area = Math.round((0.25 * (Math.sqrt(4 * a ** 2 * b ** 2 - (a ** 2 + b ** 2 - c ** 2) ** 2))) * 100) / 100;
    document.getElementById("ahf").value = area;
}

function ambiguousCase() {
    const angleA = Number(document.getElementById("aa").value * Math.PI / 180);
    const sideA = Number(document.getElementById("ab").value);
    const sideB = Number(document.getElementById("ac").value);

    let h = sideB * Math.sin(angleA);
    if (angleA <= 90) { //acute
        if (sideA < h) {
            document.getElementById("amct").value = "No triangle";
        } else if (sideA === h) {
            document.getElementById("amct").value = "Right triangle";
        } else if (sideA > sideB) {
            document.getElementById("amct").value = "One triangle";
        } else if (h < sideA < sideB) {
            document.getElementById("amct").value = "Two triangles (ambiguous case)";
        }
    }
    else if (180 > angleA > 90) { //obtus
        if (sideA < sideB || sideB === sideA) {
            document.getElementById("amct").value = "No triangle";
        } else if (sideA > sideB) {
            document.getElementById("amct").value = "One triangle";
        }
    }
}

function newtonMethod() {
    const rg = document.getElementById("rg").value;
    let x0 = rg;
    let x1 = 0;
    let iterations = 0;
    while (true) { //dont get lucky and guess a root
        x1 = x0 - (6 * x0 ** 4 - 13 * x0 ** 3 - 18 * x0 ** 2 + 7 * x0 + 6) / (24 * x0 ** 3 - 39 * x0 ** 2 - 36 * x0 + 7);
        iterations+=1;
        console.log(x1, iterations);
        if (Math.abs(x0 - x1) < 0.001) break;
        x0 = x1;
        document.getElementById("itr").innerHTML = "Iterations: "+iterations;
        document.getElementById("ra").value = Math.round(x1*100)/100; 
    }
}

function polynomialFunction() {
    const a = document.getElementById("co").value;
    const b = document.getElementById("ex").value;
    const c = document.getElementById("xv").value;

    console.log(a, b, c);
}