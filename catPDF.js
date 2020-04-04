//Write a program that, when run, will save a PDF with a cat fact to your filesystem
//Cat Facts Code
const catFacts = require("cat-facts");

let randomFact = catFacts.random();

//PDF Document code
const PDFDocument = require("pdfkit");
const fs = require("fs");

const doc = new PDFDocument();

doc.pipe(fs.createWriteStream("output2.pdf"));

doc.text(randomFact);

doc.end();
