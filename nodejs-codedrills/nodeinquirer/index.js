var inquirer = require("inquirer");

var quotes = [
    {
        author: "Aristotle",
        quote:  "There is only one way to avoid criticism: do nothing, say nothing, and be nothing."
    },
    {
        author: "Dhirubhai Ambani",
        quote: "If you don’t build your dream, someone else will hire you to help them build theirs."
    },
    {
        author: "Robert Louis Stevenson",
        quote: "Don’t judge each day by the harvest you reap but by the seeds that you plant."
    },
    {
        author: "Ayn Rand",
        quote: "The question isn’t who is going to let me; it’s who is going to stop me.",
    }
]
 readQuotes()
   function readQuotes() {
    console.log("Hello World \n");
    chooseOption();
   }
   function chooseOption() {
    inquirer.prompt([
        {
            type: "list",
            name:"quotechoice",
            message: "What would you like to do?",
            choices: ["View quote","Add a quote", "Done"]
        }
    ]).then(function(userChoice){
        switch(userChoice.quoteChoice) {
            case "View quote":
            showQuotes();
                break;
            case "Add a quote":
                addQuote();
                break;
            case "Done":
                done();
                console.log("Finish.. exit \n");
        }
    })
   }

   //functions to view,add quotes and to finish
   function showQuotes() {
    authorsSelect = []
       for(var quo=0; quo<quotes.length; quo++){
           authorsSelect.push(quo + ")" + quotes[quo].author);
       }
       inquirer.prompt([
           {
               type: "list",
               name: "authorChoice",
               message: "Which authors quote you want?",
               choices: authorsSelect
           }
       ]).then(function(userChoice){
           var auth = authorsSelect.indexOf(userChoice.authorsSelect);
            console.log(quotes[auth].quote);
           readQuotes();
       });
   }
 function addQuote() {
    inquirer.prompt([
        {
            type: "list",
            name: "author",
            message: "Please enter author name here:",
        },
        {
            type: "input",
            name: "quote",
            message: "Enter the quote you want to add",
        }
    ]).then(function(Userresponse) {
         quotes.push({
             author:Userresponse.author,
             quote: Userresponse.quote
         });
         readQuotes();
    })
 }
