const express = require('express')     // server
const cors = require('cors')           // Cross Origin Policy
const bodyParser = require('body-parser')   // To extract info from the Json file
const path = require('path')   // to read filepaths on various OS
const fs = require('fs')   // file system on windows / linux / macos

const app = express()     // initialise / start the express server
const port = 8181         // port definition to run the server

app.use(cors())           // initiate the cors policy
app.use(express.json())   // express json module for fetching the data
app.use(bodyParser.json())

const filepath = path.join(__dirname,'data','books.json');

//Helper function are used in multiple cases. Hence they are called helper function.
//Helper function alone does not have any purpose
const readBooksFromFile = ()=>{
    const data = fs.readFileSync(filepath,'utf8');
    return JSON.parse(data);
}

const WriteBooksToFile = (books)=>{
   fs.writeFileSync(filepath, JSON.stringify(books,null,2), 'utf8')
};

//End point to fetch all the books
app.get('/books' , async(req,res)=>{
    fs.readFile (filepath,'utf-8',(err,data)=>{
       if(err){
        console.error('Error reading file', err);
       }
       try{
        const jsonData = JSON.parse(data);
        res.json(jsonData);
       } catch{
        console.error("Some Error")
       }
    })
})

//End point to fetch a particular book with it ID
app.get('/books/:id', (req,res)=>{
    const bookId = parseInt(req.params.id)   //make sure you write the correct parameter spelling
    const books = readBooksFromFile();            //This is a helper function that we need to create 
    const book = books.find(b=> b.id === bookId);

    if (book){
        res.json(book)
    }
    else{
        res.status(404).json({message:'Book Not Found'})
    }
})


//End point to add a book
app.post('/book', (req,res)=>{
    const {title,author,year,language,genre} = req.body;

    //Simple validation is needed so that the required files are added by the user
    if(!title || !author || !year || !language || !genre){
        return res.status(400).json({message:"Missing required Fields"})
    }
    
    const books = readBooksFromFile();
    const newBook = {
        id: books.length + 1,
        title,
        author,
        year,
        language,
        genre
    };

    books.push(newBook);
    //Then we need to write the updated book into the file
    WriteBooksToFile(books)

    }
)

//End point to update a book
app.put('/book/:id', (req,res)=>{
    const bookId = parseInt(req.params.id, 10);
    const {title, author,year,language,genre} = req.body;

    const books  = readBooksFromFile();
    const book = books.find(b=>b.id === bookId)

    if(book){
        book.title = title || book.title;
        book.author = author || book.author;
        book.year = year || book.year;
        book.language = language || book.language;
        book.genre = genre || book.genre;

        WriteBooksToFile(books)
        res.json(book)
    }
    else{
        res.status(404).json({message:"Book not Found"})
    }
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
  



// Operators and Logic Symbols

// !     - Not
// &&    - AND
// ||    - OR
// >     - Greater than
// <     - Less than
// !=    - Not equal
// %     - Modulo
// ^     - Power
// **    - Power
// *     - Multiplication
// =     - Assignment 
// ==    - is it equal to?
// ===   - is it absolutely equal to?
// ()    - parenthesis
// {}    - Curly braces / brackets
// []    - Square braces / array
// =>    - arrow function
// (){}  - anonymous

