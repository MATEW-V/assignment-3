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
        if (sideA < sideB || h === sideA) {
            document.getElementById("amct").value = "No triangle";
        } else if (sideA > sideB) {
            document.getElementById("amct").value = "One triangle";
        }
    }
    else {
        document.getElementById("amct").value = "Enter a valid angle between 1 - 180";
    }
    console.log(angleA, sideA, sideB, h);
}

function newtonMethod() {
    const rg = document.getElementById("rg").value;

    console.log(rg);
}

function polynomialFunction() {
    const a = document.getElementById("co").value;
    const b = document.getElementById("ex").value;
    const c = document.getElementById("xv").value;

    console.log(a, b, c);
}