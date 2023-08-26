const heights = [148, 184, 153, 146, 169, 135, 182, 162, 173];
function whoSmall(heights) {
    let smallest = heights[0];
    for (let i = 1; i < heights.length; i++){
        let height = heights[i];
        if (height < smallest) {
            smallest = height;
        }
    }
    return smallest;
}

const smallestAmongAll = whoSmall(heights);
console.log("Smallest height is:", smallestAmongAll)