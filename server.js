const express = require('express')  
const supabaseClient = require('@supabase/supabase-js')
const app = express()
const port = 3000
app.use(express.static(__dirname + '/public'))

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




