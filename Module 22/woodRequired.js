function woodRequired(table, chair, bed) {
    const tableWood = 15;
    const chairWood = 10;
    const bedWood = 25;
    let tableWoodNeed = tableWood * table;
    let chairWoodNeed = chairWood * chair;
    let bedWoodNeed = bedWood * bed;
    let totalWood = tableWoodNeed + chairWoodNeed + bedWoodNeed;
    return totalWood;
}
const wood = woodRequired(8, 12, 5);
console.log(wood);