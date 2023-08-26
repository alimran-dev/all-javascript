const heights = [157, 183, 137, 148, 142, 179, 158];
function whoTallest(heights) {
    let tallest = heights[0];
    for (i = 1; i < heights.length; i++){
        let height = heights[i];
        if (height > tallest) {
            tallest = height;
        }
    }
    return tallest;
}
const tallestAmongAll = whoTallest(heights);
console.log("Tallest height is:", tallestAmongAll);