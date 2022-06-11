//inputs
const Maths = document.querySelector(".Math");
const Physic = document.querySelector(".Physic");
const HisGeo = document.querySelector(".HisGeo");
const Islamic = document.querySelector(".Islamic");
const Sport = document.querySelector(".Sport");
const Philo = document.querySelector(".Philo");
const Science = document.querySelector(".Science");
const Arabic = document.querySelector(".Arabic");
const English = document.querySelector(".English");
const Frensh = document.querySelector(".Frensh");
const Cmp = document.querySelector(".Cmp");
const Md = document.querySelector(".Md");
const Amazigh = document.querySelector(".Amazigh");

//recruitments
const btn = document.querySelector(".btn");
const notice = document.querySelector(".notice");
const moyenne = document.querySelector(".numbered");
const resulta = document.querySelector(".resulta");
const pre = document.querySelector("pre");
const tbody = document.querySelector("tbody");
const Cmptr = document.querySelector(".Cmptr");
const Mdtr = document.querySelector(".Mdtr");
const BEM = document.querySelector(".BEM");
const span = document.querySelector(".span-title");
const BtnContainer = document.querySelector(".btn-container");
const title = document.querySelector("title");
const checkbox1 = document.querySelector(".checkbox1");
const checkbox2 = document.querySelector(".checkbox2");
let s = 'Mtlem';
let cpt1 = 0;
let cpt2 = 0;


//les filiers
const MMath = document.querySelector(".MMath");
const Mtlem = document.querySelector(".Mathelem");
const Sce = document.querySelector(".Sc");
const Gestion = document.querySelector(".Gestion");

//les coef
const MathCoeff = document.querySelector(".MathCoeff");
const PhysCoeff = document.querySelector(".PhysCoeff");
const ArabCoeff = document.querySelector(".ArabCoeff");
const ScCoeff = document.querySelector(".ScCoeff");
const IslamCoeff = document.querySelector(".IslamCoeff");
const HisGeoCoeff = document.querySelector(".HisGeoCoeff");
const EgCoeff = document.querySelector(".EgCoeff");
const FrCoeff = document.querySelector(".FrCoeff");
const PhiloCoeff = document.querySelector(".PhiloCoeff");
const SportCoeff = document.querySelector(".SportCoeff");
const CmpCoeff = document.querySelector(".CmpCoeff");
const MdCoeff = document.querySelector(".MdCoeff");
const AmazighCoeff = document.querySelector(".AmazighCoeff");

//matier
const MathName = document.querySelector(".MathName");
const PhysName = document.querySelector(".PhysName");
const ArabName = document.querySelector(".ArabName");
const ScName = document.querySelector(".ScName");
const IslamName = document.querySelector(".IslamName");
const HisGeoName = document.querySelector(".HisGeoName");
const EgName = document.querySelector(".EgName");
const FrName = document.querySelector(".FrName");
const PhiloName = document.querySelector(".PhiloName");
const SportName = document.querySelector(".SportName");
const CmpName = document.querySelector(".CmpName");
const MdName = document.querySelector(".MdName");
const AmazighName = document.querySelector(".AmazighName");


Cmptr.style.display = "none";
Mdtr.style.display = "none";
pre.style.display = "none";
Mtlem.style.backgroundColor = "red";
BEM.style.backgroundColor = "black";
BEM.style.color = "white";
Amazigh.setAttribute("disabled", "disabled");
alert(`Website Made By : ALLAOUA Okba All Right Reserved!
Important : Note Are Numbers And Not String (Words) So Don't Try To Use String Even If You Do, You Will See A NaN Sign Which Means 'NOT A NUMBER' Good Luck! بالتوفيق ان شاء الله`);
btn.addEventListener("click", function CalceMoy() {
    if (((Maths.value > 20) || (Maths.value < 0)) || ((Physic.value > 20) || (Physic.value < 0)) || ((Sport.value > 20) || (Sport.value < 0)) || ((Islamic.value > 20) || (Islamic.value < 0)) || ((HisGeo.value > 20) || (HisGeo.value < 0)) || ((Frensh.value > 20) || (Frensh.value < 0)) || ((English.value > 20) || (English.value < 0)) || ((Arabic.value > 20) || (Arabic.value < 0)) || ((Science.value > 20) || (Science.value < 0)) || ((Philo.value > 20) || (Philo.value < 0)) || ((Md.value > 20) || (Md.value < 0)) || ((Cmp.value > 20) || (Cmp.value < 0))) {
        notice.textContent = "error in one of the marks";
    } else switch (s) {
        case 'Mtlem':
            if ((Amazigh.classList.contains("Amazighdecoration")) && (Sport.classList.contains("Sportdecoration"))) {
                moyenne.textContent = (Number((Maths.value * 7) + (Physic.value * 6) + (Islamic.value * 2) + (HisGeo.value * 2) + (Arabic.value * 3) + (Science.value * 2) + (English.value * 2) + (Frensh.value * 2) + (Philo.value * 2)) / 28).toFixed(2);
            } else if ((Amazigh.classList.contains("Amazighdecoration")) && (!(Sport.classList.contains("Sportdecoration")))) {
                moyenne.textContent = (Number((Maths.value * 7) + (Physic.value * 6) + (Islamic.value * 2) + (HisGeo.value * 2) + (Arabic.value * 3) + (Science.value * 2) + (English.value * 2) + (Frensh.value * 2) + (Philo.value * 2) + (Sport.value * 1)) / 29).toFixed(2);
            } else if ((!(Amazigh.classList.contains("Amazighdecoration"))) && (Sport.classList.contains("Sportdecoration"))) {
                moyenne.textContent = (Number((Maths.value * 7) + (Physic.value * 6) + (Islamic.value * 2) + (HisGeo.value * 2) + (Arabic.value * 3) + (Amazigh.value * 2) + (Science.value * 2) + (English.value * 2) + (Frensh.value * 2) + (Philo.value * 2)) / 30).toFixed(2);
            } else {
                moyenne.textContent = (Number((Maths.value * 7) + (Physic.value * 6) + (Islamic.value * 2) + (HisGeo.value * 2) + (Arabic.value * 3) + (Science.value * 2) + (English.value * 2) + (Frensh.value * 2) + (Philo.value * 2) + (Amazigh.value * 2) + (Sport.value * 1)) / 31).toFixed(2);
            }
            notice.style.display = "none";
            pre.style.display = "flex";
            break;

        case 'MMath':
            if ((Amazigh.classList.contains("Amazighdecoration")) && (Sport.classList.contains("Sportdecoration"))) {
                moyenne.textContent = (Number((Maths.value * 6) + (Physic.value * 6) + (Islamic.value * 2) + (HisGeo.value * 2) + (Arabic.value * 3) + (Science.value * 7) + (English.value * 2) + (Frensh.value * 2) + (Philo.value * 2)) / 32).toFixed(2);
            } else if ((Amazigh.classList.contains("Amazighdecoration")) && (!(Sport.classList.contains("Sportdecoration")))) {
                moyenne.textContent = (Number((Maths.value * 6) + (Physic.value * 6) + (Islamic.value * 2) + (HisGeo.value * 2) + (Arabic.value * 3) + (Science.value * 7) + (English.value * 2) + (Frensh.value * 2) + (Philo.value * 2) + (Sport.value * 1)) / 33).toFixed(2);
            } else if ((!(Amazigh.classList.contains("Amazighdecoration"))) && (Sport.classList.contains("Sportdecoration"))) {
                moyenne.textContent = (Number((Maths.value * 6) + (Physic.value * 6) + (Islamic.value * 2) + (HisGeo.value * 2) + (Arabic.value * 3) + (Amazigh.value * 2) + (Science.value * 7) + (English.value * 2) + (Frensh.value * 2) + (Philo.value * 2)) / 34).toFixed(2);
            } else {
                moyenne.textContent = (Number((Maths.value * 6) + (Physic.value * 6) + (Islamic.value * 2) + (HisGeo.value * 2) + (Arabic.value * 3) + (Science.value * 7) + (English.value * 2) + (Frensh.value * 2) + (Philo.value * 2) + (Amazigh.value * 2) + (Sport.value * 1)) / 35).toFixed(2);
            }
            notice.style.display = "none";
            pre.style.display = "flex";
            break

        case 'Sce':
            if ((Amazigh.classList.contains("Amazighdecoration")) && (Sport.classList.contains("Sportdecoration"))) {
                moyenne.textContent = (Number((Maths.value * 5) + (Physic.value * 5) + (Islamic.value * 2) + (HisGeo.value * 2) + (Arabic.value * 3) + (Science.value * 6) + (English.value * 2) + (Frensh.value * 2) + (Philo.value * 2)) / 29).toFixed(2);
            } else if ((Amazigh.classList.contains("Amazighdecoration")) && (!(Sport.classList.contains("Sportdecoration")))) {
                moyenne.textContent = (Number((Maths.value * 5) + (Physic.value * 5) + (Islamic.value * 2) + (HisGeo.value * 2) + (Arabic.value * 3) + (Science.value * 6) + (English.value * 2) + (Frensh.value * 2) + (Philo.value * 2) + (Sport.value * 1)) / 30).toFixed(2)
            } else if ((!(Amazigh.classList.contains("Amazighdecoration"))) && (Sport.classList.contains("Sportdecoration"))) {
                moyenne.textContent = (Number((Maths.value * 5) + (Physic.value * 5) + (Islamic.value * 2) + (HisGeo.value * 2) + (Arabic.value * 3) + (Amazigh.value * 2) + (Science.value * 6) + (English.value * 2) + (Frensh.value * 2) + (Philo.value * 2)) / 31).toFixed(2);
            } else {
                moyenne.textContent = (Number((Maths.value * 5) + (Physic.value * 5) + (Islamic.value * 2) + (HisGeo.value * 2) + (Arabic.value * 3) + (Science.value * 6) + (English.value * 2) + (Frensh.value * 2) + (Philo.value * 2) + (Amazigh.value * 2) + (Sport.value * 1)) / 32).toFixed(2);
            }
            notice.style.display = "none";
            pre.style.display = "flex";
            break;

        case 'Gestion':
            if ((Amazigh.classList.contains("Amazighdecoration")) && (Sport.classList.contains("Sportdecoration"))) {
                moyenne.textContent = (Number((Maths.value * 5) + (Physic.value * 5) + (Islamic.value * 2) + (HisGeo.value * 4) + (Arabic.value * 3) + (Science.value * 2) + (English.value * 2) + (Frensh.value * 2) + (Philo.value * 2) + (Cmp.value * 6)) / 33).toFixed(2);
            } else if ((Amazigh.classList.contains("Amazighdecoration")) && (!(Sport.classList.contains("Sportdecoration")))) {
                moyenne.textContent = (Number((Maths.value * 5) + (Physic.value * 5) + (Islamic.value * 2) + (HisGeo.value * 4) + (Arabic.value * 3) + (Science.value * 2) + (English.value * 2) + (Frensh.value * 2) + (Philo.value * 2) + (Cmp.value * 6) + (Sport.value * 1)) / 34).toFixed(2);
            } else if ((!(Amazigh.classList.contains("Amazighdecoration"))) && (Sport.classList.contains("Sportdecoration"))) {
                moyenne.textContent = (Number((Maths.value * 5) + (Physic.value * 5) + (Islamic.value * 2) + (HisGeo.value * 4) + (Arabic.value * 3) + (Amazigh.value * 2) + (Science.value * 2) + (English.value * 2) + (Frensh.value * 2) + (Philo.value * 2) + (Cmp.value * 6)) / 35).toFixed(2);
            } else {
                moyenne.textContent = (Number((Maths.value * 5) + (Physic.value * 5) + (Islamic.value * 2) + (HisGeo.value * 4) + (Arabic.value * 3) + (Science.value * 2) + (English.value * 2) + (Frensh.value * 2) + (Philo.value * 2) + (Cmp.value * 6) + (Amazigh.value * 2) + (Sport.value * 1)) / 36).toFixed(2);
            }
            notice.style.display = "none";
            pre.style.display = "flex";
            break

        case 'BEM':
            if ((Amazigh.classList.contains("Amazighdecoration")) && (Sport.classList.contains("Sportdecoration"))) {
                moyenne.textContent = (Number((Maths.value * 4) + (Physic.value * 2) + (Islamic.value * 2) + (HisGeo.value * 3) + (Arabic.value * 5) + (Science.value * 2) + (English.value * 2) + (Frensh.value * 3) + (Philo.value * 1) + (Md.value * 1)) / 23).toFixed(2);
            } else if ((Amazigh.classList.contains("Amazighdecoration")) && (!(Sport.classList.contains("Sportdecoration")))) {
                moyenne.textContent = (Number((Maths.value * 4) + (Physic.value * 2) + (Islamic.value * 2) + (HisGeo.value * 3) + (Arabic.value * 5) + (Science.value * 2) + (English.value * 2) + (Frensh.value * 3) + (Philo.value * 1) + (Md.value * 1) + (Sport.value * 1)) / 24).toFixed(2);
            } else if ((!(Amazigh.classList.contains("Amazighdecoration"))) && (Sport.classList.contains("Sportdecoration"))) {
                moyenne.textContent = (Number((Maths.value * 4) + (Physic.value * 2) + (Islamic.value * 2) + (HisGeo.value * 3) + (Arabic.value * 5) + (Amazigh.value * 2) + (Science.value * 2) + (English.value * 2) + (Frensh.value * 3) + (Philo.value * 1) + (Md.value * 1)) / 25).toFixed(2);
            } else {
                moyenne.textContent = (Number((Maths.value * 4) + (Physic.value * 2) + (Islamic.value * 2) + (HisGeo.value * 3) + (Arabic.value * 5) + (Science.value * 2) + (English.value * 2) + (Frensh.value * 3) + (Philo.value * 1) + (Md.value * 1) + (Amazigh.value * 2) + (Sport.value * 1)) / 26).toFixed(2);
            }
            notice.style.display = "none";
            pre.style.display = "flex";
            break
    }
})


function ResetNotes() {
    Maths.value = "";
    Physic.value = "";
    Sport.value = "";
    Science.value = "";
    English.value = "";
    Frensh.value = "";
    Islamic.value = "";
    HisGeo.value = "";
    Arabic.value = "";
    Philo.value = "";
    Cmp.value = "";
    Md.value = "";
    Amazigh.value = "";
}


MMath.addEventListener("click", function () {
    MMath.style.backgroundColor = "blue";
    Mtlem.style.backgroundColor = "white";
    Sce.style.backgroundColor = "white";
    Gestion.style.backgroundColor = "white";
    pre.style.display = "none";
    notice.style.display = "flex";
    notice.textContent = "result will be displayed here";
    ResetNotes();
    MathCoeff.textContent = "6";
    FrCoeff.textContent = "2";
    EgCoeff.textContent = "2";
    ScCoeff.textContent = "7"; //tech
    ArabCoeff.textContent = "3";
    IslamCoeff.textContent = "2";
    HisGeoCoeff.textContent = "2";
    PhysCoeff.textContent = "6";
    SportCoeff.textContent = "1";
    PhiloCoeff.textContent = "2";
    MathName.textContent = "Math";
    FrName.textContent = "Frensh";
    EgName.textContent = "English";
    ScName.textContent = "Technologie";
    ArabName.textContent = "Arabic";
    IslamName.textContent = "Islamic";
    HisGeoName.textContent = "HisGeo";
    PhysName.textContent = "Physic";
    SportName.textContent = "Sport";
    PhiloName.textContent = "Philo";
    Cmptr.style.display = "none";
    s = 'MMath';
})

function MtlemChange() {
    MMath.style.backgroundColor = "white";
    Mtlem.style.backgroundColor = "red";
    Sce.style.backgroundColor = "white";
    Gestion.style.backgroundColor = "white";
    pre.style.display = "none";
    notice.style.display = "flex";
    notice.textContent = "result will be displayed here";
    ResetNotes();
    MathCoeff.textContent = "7";
    FrCoeff.textContent = "2";
    EgCoeff.textContent = "2";
    ScCoeff.textContent = "2";
    ArabCoeff.textContent = "3";
    IslamCoeff.textContent = "2";
    HisGeoCoeff.textContent = "2";
    PhysCoeff.textContent = "6";
    SportCoeff.textContent = "1";
    PhiloCoeff.textContent = "2";
    MathName.textContent = "Math";
    FrName.textContent = "Frensh";
    EgName.textContent = "English";
    ScName.textContent = "Science";
    ArabName.textContent = "Arabic";
    IslamName.textContent = "Islamic";
    HisGeoName.textContent = "HisGeo";
    PhysName.textContent = "Physic";
    SportName.textContent = "Sport";
    PhiloName.textContent = "Philo";
    Cmptr.style.display = "none";
    s = 'Mtlem';
}
Mtlem.addEventListener("click", MtlemChange);
Sce.addEventListener("click", function () {
    MMath.style.backgroundColor = "white";
    Mtlem.style.backgroundColor = "white";
    Sce.style.backgroundColor = "green";
    Gestion.style.backgroundColor = "white";
    pre.style.display = "none";
    notice.style.display = "flex";
    notice.textContent = "result will be displayed here";
    ResetNotes();
    MathCoeff.textContent = "5";
    FrCoeff.textContent = "2";
    EgCoeff.textContent = "2";
    ScCoeff.textContent = "6";
    ArabCoeff.textContent = "3";
    IslamCoeff.textContent = "2";
    HisGeoCoeff.textContent = "2";
    PhysCoeff.textContent = "5";
    SportCoeff.textContent = "1";
    PhiloCoeff.textContent = "2";
    MathName.textContent = "Math";
    FrName.textContent = "Frensh";
    EgName.textContent = "English";
    ScName.textContent = "Science";
    ArabName.textContent = "Arabic";
    IslamName.textContent = "Islamic";
    HisGeoName.textContent = "HisGeo";
    PhysName.textContent = "Physic";
    SportName.textContent = "Sport";
    PhiloName.textContent = "Philo";
    Cmptr.style.display = "none";
    s = 'Sce';
})
Gestion.addEventListener("click", function () {
    MMath.style.backgroundColor = "white";
    Mtlem.style.backgroundColor = "white";
    Sce.style.backgroundColor = "white";
    Gestion.style.backgroundColor = "yellow";
    pre.style.display = "none";
    notice.style.display = "flex";
    notice.textContent = "result will be displayed here";
    ResetNotes();
    MathCoeff.textContent = "5";
    FrCoeff.textContent = "2";
    EgCoeff.textContent = "2";
    ScCoeff.textContent = "2"; //law
    ArabCoeff.textContent = "3";
    IslamCoeff.textContent = "2";
    HisGeoCoeff.textContent = "4";
    PhysCoeff.textContent = "5"; //i9tisad
    SportCoeff.textContent = "1";
    PhiloCoeff.textContent = "2";
    CmpCoeff.textContent = "6";
    MathName.textContent = "Math";
    FrName.textContent = "Frensh";
    EgName.textContent = "English";
    ScName.textContent = "Law";
    ArabName.textContent = "Arabic";
    IslamName.textContent = "Islamic";
    HisGeoName.textContent = "HisGeo";
    PhysName.textContent = "Economy";
    SportName.textContent = "Sport";
    PhiloName.textContent = "Philo";
    Cmptr.style.display = "table-row";
    s = 'Gestion';
})

BEM.addEventListener("click", function () {
    ResetNotes();
    if (BEM.textContent == 'Visit BAC One') {
        span.textContent = 'BAC';
        BEM.textContent = 'Visit BEM One';
        BtnContainer.style.display = "flex";
        Mdtr.style.display = "none";
        PhiloName.textContent = "Philo";
        BEM.style.backgroundColor = "black";
        BEM.style.color = "white";
        MtlemChange();
        title.textContent = 'BAC Moyenne';
    } else {
        span.textContent = 'BEM';
        BEM.textContent = 'Visit BAC One';
        BtnContainer.style.display = "none";
        Mdtr.style.display = "table-row";
        MathCoeff.textContent = "4";
        FrCoeff.textContent = "3";
        EgCoeff.textContent = "2";
        ScCoeff.textContent = "2";
        ArabCoeff.textContent = "5";
        IslamCoeff.textContent = "2";
        HisGeoCoeff.textContent = "3";
        PhysCoeff.textContent = "2";
        SportCoeff.textContent = "1";
        PhiloCoeff.textContent = "2"; //madania
        MathName.textContent = "Math";
        FrName.textContent = "Frensh";
        EgName.textContent = "English";
        ScName.textContent = "Science";
        ArabName.textContent = "Arabic";
        IslamName.textContent = "Islamic";
        HisGeoName.textContent = "HisGeo";
        PhysName.textContent = "Physic";
        SportName.textContent = "Sport";
        PhiloName.textContent = "Civil";
        BEM.style.backgroundColor = "white";
        BEM.style.color = "black";
        s = "BEM"
        title.textContent = 'BEM Moyenne';
    }
    console.log(s);
})

checkbox1.addEventListener("click", function () {
    cpt1++;
    Amazigh.value = "";
    if (cpt1 % 2 == 0) {
        Amazigh.classList.toggle("Amazighdecoration");
        AmazighName.classList.toggle("Amazighdecoration");
        AmazighCoeff.classList.toggle("Amazighdecoration");
        Amazigh.setAttribute("disabled", "disabled");
    } else {
        Amazigh.classList.toggle("Amazighdecoration");
        AmazighName.classList.toggle("Amazighdecoration");
        AmazighCoeff.classList.toggle("Amazighdecoration");
        Amazigh.removeAttribute("disabled");
    }
})

checkbox2.addEventListener("click", function () {
    cpt2++;
    Sport.value = "";
    if (cpt2 % 2 == 0) {
        Sport.classList.toggle("Sportdecoration");
        SportName.classList.toggle("Sportdecoration");
        SportCoeff.classList.toggle("Sportdecoration");
        Sport.removeAttribute("disabled");
    } else {
        Sport.classList.toggle("Sportdecoration");
        SportName.classList.toggle("Sportdecoration");
        SportCoeff.classList.toggle("Sportdecoration");
        Sport.setAttribute("disabled", "disabled");
    }
})