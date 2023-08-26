function mileToKm(mile) {
    const km = mile * 1.6;
    return km;
};

const convertedValue = mileToKm(34);
console.log("Equal to:", convertedValue, "km");