let dateTime = new Date();

const getLabel = (id: string) => document.getElementById(id) as HTMLLabelElement;

const units = ["day", "month", "year", "hour", "minute", "second"];
const getFromDate: ((d: Date) => number)[] = [
    (d) => d.getDate(),
    (d) => d.getMonth() + 1,
    (d) => d.getFullYear(),
    (d) => d.getHours(),
    (d) => d.getMinutes(),
    (d) => d.getSeconds()
];
const labels = units.map(u => getLabel(u));
const unitLabelMap = new Map<string, HTMLLabelElement>();
const unitGetMap = new Map<string, (d: Date) => number>();
units.forEach((unit, index) => {
    unitLabelMap.set(unit, labels[index]);
    unitGetMap.set(unit, getFromDate[index]);
});

const setUnitLabel = (unit: string, date: Date) => {
    const label = unitLabelMap.get(unit);
    const value = unitGetMap.get(unit)?.(date);
    const zero = value && (value < 10 ? "0" : "");
    if(label) {
        label.textContent = value ? zero + value.toString() : "00";
    }
}

setInterval(() => {
    dateTime = new Date();
    for(const unit of units) {
        setUnitLabel(unit, dateTime);
    }
}, 500);