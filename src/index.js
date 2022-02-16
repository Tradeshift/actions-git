const core = require('@actions/core');

module.exports = async function run() {
    const myInput = core.getInput('myInput') || '';
    console.log(myInput);
    // Or actually do something useful here
};