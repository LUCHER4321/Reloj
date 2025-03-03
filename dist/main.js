"use strict";
let dateTime = new Date();
const getLabel = (id) => document.getElementById(id);
const units = ["day", "month", "year", "hour", "minute", "second"];
const getFromDate = [
    (d) => d.getDay(),
    (d) => d.getMonth(),
    (d) => d.getFullYear(),
    (d) => d.getHours(),
    (d) => d.getMinutes(),
    (d) => d.getSeconds()
];
const labels = units.map(u => getLabel(u));
const unitLabelMap = new Map();
const unitGetMap = new Map();
units.forEach((unit, index) => {
    unitLabelMap.set(unit, labels[index]);
    unitGetMap.set(unit, getFromDate[index]);
});
const setUnitLabel = (unit, date) => {
    var _a;
    const label = unitLabelMap.get(unit);
    const value = (_a = unitGetMap.get(unit)) === null || _a === void 0 ? void 0 : _a(date);
    const zero = value && (value < 10 ? "0" : "");
    if (label) {
        label.textContent = value ? zero + value.toString() : "00";
    }
};
setInterval(() => {
    dateTime = new Date();
    for (const unit of units) {
        setUnitLabel(unit, dateTime);
    }
}, 500);
