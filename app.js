console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

const numbers = [2, 22, 12, 17, 18, 39, 129];

function arraySum(arr) {
    let sum = 0;
    arr.forEach((number) => {
        sum += number;
    });

    return sum
}

console.log(arraySum(numbers));


// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

const book = {
    title: "",
    author: "",
    numPages: null,
    isRead: false,

}

book.title = "Stuart Little";
book.author = "E. B. White"
book.numPages = 128;
book.readCount = 2;

book.info = function () {
    return `${this.title}, ${this.numPages} pages, read ${this.readCount} times`;
};

console.log(book.title);
console.log(book.numPages);
console.log(book.info());


//Exercise 3:
console.log("Exercise 3: \n=========\n");

let sentence = "The quick brown fox jumps over the lazy dog";

function reversedWords(sentence) {

    let result = [];
    let passage = sentence.split(" ");
    
    for (let i = 0; i < passage.length; i++) {
        let letters = passage[i].split("");
        letters.reverse();
        let reverseWord = letters.join("");
        result.push(reverseWord);    
    }

    return result.join(" ");

}

console.log(reversedWords(sentence));
console.log(reversedWords("One For All And All For One"));

//Exercise 4:
console.log("Exercise 4: \n===========\n");

let csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";
let objSplit = csvData.split("\n");
let headers = objSplit[0].split(",");
console.log(headers);
const resultObjects = [];

for (let i = 1; i < objSplit.length; i++){
    let values = objSplit[i].split(",");
    let obj = {};
    console.log(headers[0]);
    for (let o = 0; o < headers.length; o++){
        obj[headers[o]] = values[o];
    }

    console.log(obj);
    resultObjects.push(obj);
}

console.log(resultObjects);

   


