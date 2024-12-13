// model/dataModel.js
const data = [];

module.exports = {
    getData: () => data,
    addData: (item) => {
        data.push(item);
    }
};
