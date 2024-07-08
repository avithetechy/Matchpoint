const express = require('express');
const mysql = require('mysql2');
const cors=require('cors');
const app = express();
// const mysql=require('mysql2');
// const app=require('express');
// const bodyParser = require('body-parser');
// const cors=require("cors");

// app.use(cors());
// Create MySQL connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Anand2040@',
    database: 'admin'
});
const corsOptions = {
    origin: "http://127.0.0.1:5500",
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  };
app.use(cors(corsOptions));
// Connect to MySQL
connection.connect(err => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

// API endpoint to fetch book data
app.get('/adminblock', (req, res) => {
    console.log('sucess');
    const sql = 'SELECT * FROM adminblock';
    connection.query(sql, (err, results) => {
        if (err) {
            console.error('Error fetching data from MySQL:', err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }
        console.log(results);
        res.json(results);
    });
});
// Route to render admindisplay.ejs with fetched data

// app.use(express.static(path.join(__dirname, 'public')));

// app.get('C:\Users\Dell\OneDrive\Desktop\libraryTask\UI\admin\Admincore.html', (req, res) => {
//     res.render('C:\Users\Dell\OneDrive\Desktop\libraryTask\UI\admin\admindisplay.ejs'); // Render the admindisplay.ejs template
// });


const PORT = process.env.PORT || 3300;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
