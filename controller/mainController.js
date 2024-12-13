// controller/mainController.js
const model = require('../model/dataModel');
const view = require('../view/renderView');

module.exports = {
    addAndRender: (item) => {
        model.addData(item);
        const data = model.getData();
        view.renderData(data);
    }
};
