//Write a program that, when run, will save a PDF with a cat fact to your filesystem
//Cat Facts Code
const catFacts = require("cat-facts");//requiring cat-facts

let randomFact = catFacts.random();  //setting up random cat fact

//PDF Document code
const PDFDocument = require("pdfkit"); //requiring PDFkit
const fs = require("fs"); //this is a Node module.  It allows your code to access/write documents on your computer.

const doc = new PDFDocument();  //creating a document

doc.pipe(fs.createWriteStream("output2.pdf")); //setting where the text is output to

doc.text(randomFact); //setting the text of our doc

doc.end();  //finalizes and ends our document
