
const supabaseClient = require('@supabase/supabase-js');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

const supabaseUrl = 'https://vyundpotrrqaqgkvyyqc.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ5dW5kcG90cnJxYXFna3Z5eXFjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTYwNTk2MjAsImV4cCI6MjAzMTYzNTYyMH0.Yy5GL-WeoYevJYFPZbXkFAPukJmZUAjgmhmXRvq0jQo';
const supabase = supabaseClient.createClient(supabaseUrl, supabaseKey);
// #1
// app.get('/', (req, res) => {
//     res.sendFile('public/index.html', { root: __dirname });
// });

app.get('/movies', async (req, res) => {
    res.header('Content-type', 'application/json');
    const { data, error } = await supabase
        .from('movies')
        .select('*');

    if (error) {
        console.log('Error fetching movies:', error);
        res.status(500).send('Error fetching movies');
    } else {
        console.log('Movies data:', data);
        res.send(data);
    }
});

app.post('/movies', async (req, res) => {
    console.log(`Adding Movies`);
    console.log(req.body);
    var movie_name = req.body.movie_name;

    const { data, error } = await supabase
        .from('Feedback')
        .insert({ "movie_name": movie_name})
        .select()

    if (error){
        console.log(error)
        res.send(error)
    } else {
        res.send(data)
    }
});

app.get('/feedback', async (req, res) => {
    console.log("attempting 2 GET all feedback");
    const { data , error } = await supabase
        .from('Feedback')
        .select()
    
    if (error){
        console.log(error)
        res.send(error)
    } else {
        res.send(data)
    }

}); 

app.post('/feedback', async (req, res) => {
    console.log(`Adding Feedback`);
    console.log(req.body);
    var isLiked = req.body.isLiked;

    const { data, error } = await supabase
        .from('Feedback')
        .insert({ "isLiked": isLiked})
        .select()

    if (error){
        console.log(error)
        res.send(error)
    } else {
        res.send(data)
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
