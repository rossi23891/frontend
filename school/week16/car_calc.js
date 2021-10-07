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
    [2019, 0.8],
    [2018, 0.6]
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

function calculate() {
    const brand = document.querySelector(".brand").value;
    const model = document.querySelector(".model").value;
    const year = document.querySelector(".year").value;
    const modelInfo = getModelsForBrand(brand);
    const modelWithPrice = modelInfo.find(modelInfo => modelInfo[0] === model);
    const yearMultiplyer = YEARS.find(YEARS => YEARS[0] == year);
    let finalPrice = calcTotalPrice(modelWithPrice[1], yearMultiplyer[1]);
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

function calcTotalPrice(modelPrice, yearMultiplier) {
    return modelPrice * yearMultiplier;
}