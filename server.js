const express = require('express')  
const supabaseClient = require('@supabase/supabase-js')
const app = express()
const port = 3000
app.use(express.static(__dirname + '/public'))
//line 7 is added by himani, its the json that is used for the api endpoints 
app.use(bodyParser.json());


const supabaseUrl = 'https://vyundpotrrqaqgkvyyqc.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ5dW5kcG90cnJxYXFna3Z5eXFjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTYwNTk2MjAsImV4cCI6MjAzMTYzNTYyMH0.Yy5GL-WeoYevJYFPZbXkFAPukJmZUAjgmhmXRvq0jQo'
const supabase = createClient(supabaseUrl, supabaseKey)


app.get('/movies', async (req, res) => {
    console.log('Grabbing movies searched')
    const { data, error } = await supabase
        .from('movies')
        .insert({'movie_name': movie_name})
        .select();

        console.log('Data', data)
        console.log('Error', error)

    if (error) {
        res.send('Error');
    } else {
        res.send(data);
    }
});

app.post('/feedback', async (req, res) => {
    const { data, error } = await supabase
    .from('feedback')
    .insert([{[feedback]: 1}])
    res.send({ message: 'Feedback received, thank you!' });
}); 

//everything below is made by himani not entirely sure if correct but here is some code to work with if it can help  
// API endpoint to retrieve data from the 'movies' table
app.get('/movies', async (req, res) => {
    console.log('Fetching movies from database');
    const { data, error } = await supabase
        .from('movies')
        .select('*'); // Adjust the columns as needed

    if (error) {
        console.log('Error fetching movies:', error);
        res.status(500).send('Error fetching movies');
    } else {
        console.log('Movies data:', data);
        res.json(data);
    }
});

// API endpoint to write feedback to the 'feedback' table
app.post('/feedback', async (req, res) => {
    const { feedback } = req.body; // Assumes the feedback data is sent in the request body

    if (!feedback) {
        return res.status(400).send({ message: 'Feedback is required' });
    }

    const { data, error } = await supabase
        .from('feedback')
        .insert([{ feedback }]);

    if (error) {
        console.error('Error inserting feedback:', error);
        res.status(500).send('Error inserting feedback');
    } else {
        console.log('Feedback data:', data);
        res.send({ message: 'Feedback received, thank you!' });
    }
});

//app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});




