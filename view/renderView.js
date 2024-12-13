// view/renderView.js
module.exports = {
    renderData: (data) => {
        console.log("Rendering Data:");
        data.forEach((item, index) => {
            console.log(`${index + 1}: ${item}`);
        });
    }
};
