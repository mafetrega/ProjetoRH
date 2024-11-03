const fs = require('fs');

const getData = () => {
    const rawData = fs.readFileSync('data.json');
    return JSON.parse(rawData);
};

module.exports = { getData };
