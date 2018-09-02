const fs = require("fs");

console.time("time to read files");

const file1 = fs.readFileSync('./files/file-1.txt', 'utf-8');
const file2 = fs.readFileSync('./files/file-2.txt', 'utf-8');
const file3 = fs.readFileSync('./files/file-3.txt', 'utf-8');
const file4 = fs.readFileSync('./files/file-4.txt', 'utf-8');

const data = file1 + file2 + file3 + file4;
const dataArr = data.match(/\S+/g) || [];
const words = getWordFrequency(dataArr);
console.log(words)
console.timeEnd("time to read files");



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