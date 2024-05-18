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
        .select();

        console.log('Data', data)
        console.log('Error', error)
});

app.post('/feedback', async (req, res) => {
    const { liked } = req.body;
    console.log(`Feedback received: User ${liked ? 'liked' : 'did not like'} the website.`);
    res.status(200).json({ message: 'Feedback received, thank you!' });
//     res.status(200).send({ message: 'Feedback received, thank you!' }); try either one couldnt find why its not sending a message
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
