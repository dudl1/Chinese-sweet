const express = require('express');
const {createClient} = require("@supabase/supabase-js");
const app = express();

const port = process.env.PORT || 5000;

const supabase = createClient(
  "https://qtsdplzasxqzgskoybdj.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF0c2RwbHphc3hxemdza295YmRqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzYwNDYwMzUsImV4cCI6MTk5MTYyMjAzNX0.hvCWqLQqfHswrUkCKF6uvj3MKV6mBjHb_Iy9W8pMnEI"
);

app.get('/', function (req, res)
{
    app.use(express.static(__dirname + "/assets"));
    res.sendFile(__dirname + '/assets/index.html');

    async function getDataDb()
    {
        const { data, error } = await supabase.from("appeal").select();
        console.log(data);
    }
    getDataDb();
})

app.listen(port, function()
{
    console.log("Server start!")
})
