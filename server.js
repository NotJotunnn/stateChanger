var fs = require('fs');

const express = require('express');

const app = express();

const port = 3000

app.listen(port, () => console.log(`Listening to port . . . ${port}`));

var data = fs.readFileSync('words.json')

var words = JSON.parse(data)

console.log(`server is starting. . . at ${new Date().getHours().toString().padStart(2, '0')}:${new Date().getMinutes().toString().padStart(2, '0')}:${new Date().getSeconds().toString().padStart(2, '0')}`);

app.use(express.static('website'));

app.get('/add/:word/:score?', addWord);

function addWord(request, response) {
    var data = request.params;
    var word = data.word;
    var score = data.score;
    

    words[word] = Number(score)
    
    
    var data = JSON.stringify(words, null, 2);

    // fs.writeFile('words.json', data, finished);
    fs.writeFile('words.json', data, () => response.send('done'));

    // function finished(err) {
        
    //     var reply = {
    //         msg: "Thank you for your word!"
    //     }
    //     response.send(reply);
    // }


}

// function sendHome(request, response) {
//     var data = request.params;
//     var name = data.name;
//     var surname = data.surname;
//     var reply = ""

//     for (var i = 0; i < surname; i++ ) {
//         reply += `Welcome Home ${name}. ${i + 1}!<br/>`
//     }

//     response.send(reply);
// }

app.get('/all', sendAll);

function sendAll(request, response) {
    response.send(words);
}

// app.get('/search/:word', searchWord);

// function searchWord(request, response) {
//     var word = request.params.word
//     var reply;

//     if (words[word]) {
//         reply = {
//             status: "200",
//             word: word,
//             score: words[word]
//         }
//     } else {
//         reply = {
//             status: "404",
//             word: word,
//         }
//     }

//     response.send(reply);
// }