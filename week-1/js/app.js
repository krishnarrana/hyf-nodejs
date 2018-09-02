const fs = require("fs");
const util = require("util");

const readFile = util.promisify(fs.readFile);

console.time("time to read files");

const promiseFile1 = readFile('./files/file-1.txt', 'utf-8');
const promiseFile2 = readFile('./files/file-2.txt', 'utf-8');
const promiseFile3 = readFile('./files/file-3.txt', 'utf-8');
const promiseFile4 = readFile('./files/file-4.txt', 'utf-8');


Promise.all([promiseFile1, promiseFile2, promiseFile3, promiseFile4])
    .then((data) => {
        const dataArr = data.join(" ").match(/\S+/g) || [];
        const words = getWordFrequency(dataArr);
        console.log(words)
        console.timeEnd("time to read files");
    })
    .catch((err) => {
        console.log("err", err);
    })

function getWordFrequency(arr) {
    const wordsFrequency = arr.reduce((obj, item) => {
        if (!obj[item]) {
            obj[item] = 0
        }
        obj[item]++;
        return obj;
    }, {});
    return wordsFrequency;
}