const BRANDS = ["kia", "skoda", "ford"];
const KIA_MODELS = [
    ["rio", 900000],
    ["seed", 950000],
    ["sportage", 1100000]
];
const SKODA_MODELS = [
    ["octavia", 970000],
    ["rapid", 980000],
    ["karoq", 990000]
];
const FORD_MODELS = [
    ["Mondeo", 1100000],
    ["Fiesta", 1050000],
    ["Focus", 1030000]
];

const YEARS = [
    [2020, 1],
    [2019, 0.98],
    [2018, 0.97]
];

const COLORS = [
    ["Metallic", 1],
    ["Dark", 0.955],
    ["White", 0.94]
];

const TRANSMISSIONS = [
    ["Automatic", 1],
    ["Mechanic", 0.93]
];

const DISTANCE = [
    ["<100 km", 1],
    [">100 km", 0.985]
];


let brandSelected = document.querySelector(".brand");
brandSelected.addEventListener("change", (e) => {
    let currentSelection = e.currentTarget.value;
    if (!BRANDS.find(brand => brand === currentSelection)) return;

    const modelsForBrand = getModelsForBrand(currentSelection);
    const modelsNames = modelsForBrand.map(modelInfo => modelInfo[0]);

    const modelsSelect = document.querySelector(".model");
    modelsSelect.innerHTML = "";
    const defaultModel = document.createElement("option");
    defaultModel.innerText = "Модель";
    modelsSelect.appendChild(defaultModel);
    modelsNames.forEach(model => {
        const newOption = document.createElement("option");
        newOption.value = model;
        newOption.innerText = model;
        modelsSelect.appendChild(newOption);
    });
    modelsSelect.disabled = false;
});

let modelSelected = document.querySelector(".model");
modelSelected.addEventListener("change", (e) => {
    let currentSelection = e.currentTarget.value;
    const years = YEARS.map(year => year[0]);

    const yearSelect = document.querySelector(".year");
    yearSelect.innerHTML = "";
    const defaultYear = document.createElement("option");
    defaultYear.innerText = "Год выпуска";
    yearSelect.appendChild(defaultYear);
    years.forEach(y => {
        const newOption = document.createElement("option");
        newOption.value = y;
        newOption.innerText = y;
        yearSelect.appendChild(newOption);
    });
    yearSelect.disabled = false;
});

let yearSelected = document.querySelector(".year");
yearSelected.addEventListener("change", (e) => {
    let currentSelection = e.currentTarget.value;
    const colors = COLORS.map(color => color[0]);

    const colorSelect = document.querySelector(".color");
    colorSelect.innerHTML = "";
    const defaultColor = document.createElement("option");
    defaultColor.innerText = "Цвет";
    colorSelect.appendChild(defaultColor);
    colors.forEach(c => {
        const newOption = document.createElement("option");
        newOption.value = c;
        newOption.innerText = c;
        colorSelect.appendChild(newOption);
    });
    colorSelect.disabled = false;
});

let colorSelected = document.querySelector(".color");
colorSelected.addEventListener("change", (e) => {
    let currentSelection = e.currentTarget.value;
    const transmissions = TRANSMISSIONS.map(tr => tr[0]);

    const transmissionSelect = document.querySelector(".transmission");
    transmissionSelect.innerHTML = "";
    const transmissionDefault = document.createElement("option");
    transmissionDefault.innerText = "Коробка передач";
    transmissionSelect.appendChild(transmissionDefault);
    transmissions.forEach(tr => {
        const newOption = document.createElement("option");
        newOption.value = tr;
        newOption.innerText = tr;
        transmissionSelect.appendChild(newOption);
    });
    transmissionSelect.disabled = false;
});

let trSelected = document.querySelector(".transmission");
trSelected.addEventListener("change", (e) => {
    let currentSelection = e.currentTarget.value;
    const distances = DISTANCE.map(d => d[0]);

    const distanceSelect = document.querySelector(".distance");
    distanceSelect.innerHTML = "";
    const distanceDefault = document.createElement("option");
    distanceDefault.innerText = "Пробег";
    distanceSelect.appendChild(distanceDefault);
    distances.forEach(d => {
        const newOption = document.createElement("option");
        newOption.value = d;
        newOption.innerText = d;
        distanceSelect.appendChild(newOption);
    });
    distanceSelect.disabled = false;
});

function calculate() {
    const brand = document.querySelector(".brand").value;
    const model = document.querySelector(".model").value;
    const year = document.querySelector(".year").value;
    const color = document.querySelector(".color").value;
    const transmission = document.querySelector(".transmission").value;
    const distance = document.querySelector(".distance").value;

    const modelInfo = getModelsForBrand(brand);
    const modelWithPrice = modelInfo.find(modelInfo => modelInfo[0] === model);
    const yearMultiplyer = YEARS.find(YEARS => YEARS[0] == year);
    const colorMultiplyer = COLORS.find(COLORS => COLORS[0] === color);
    const trMultiplyer = TRANSMISSIONS.find(TRANSMISSIONS => TRANSMISSIONS[0] === transmission);
    const distanceMultiplyer = DISTANCE.find(DISTANCE => DISTANCE[0] === distance);
    let finalPrice = calcTotalPrice(modelWithPrice[1], yearMultiplyer[1], colorMultiplyer[1], trMultiplyer[1], distanceMultiplyer[1]);
    alert("Стоимость составит: " + finalPrice);
}

function getModelsForBrand(brand) {
    let models = [];
    switch (brand) {
        case "kia": models = KIA_MODELS;
            break;
        case "skoda": models = SKODA_MODELS;
            break;
        case "ford": models = FORD_MODELS;
            break;
    }
    return models;
}

function calcTotalPrice(modelPrice, yearMultiplier, colorMultiplyer, trMultiplyer, distanceMultiplyer) {
    return modelPrice * yearMultiplier * colorMultiplyer * trMultiplyer * distanceMultiplyer;
}