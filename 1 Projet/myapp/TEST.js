const express = require('express')
const mysql = require("mysql2")
const port = process.env.PORT || 3001
const app = express()
app.use(express.json())
const connection = mysql.createConnection({
  user: 'root',
  password: 'Rinepo13',
  host: 'localhost',
  port: '3306',
  database: 'base_donnée_restapi'
})

connection.connect((err) => {
  if (err) {
    console.error("Erreur de connexion : " + err.stack)
    return;
  }
  console.log("Connexion réussie avec la bdd !")
});
app.get('/items', (req, res) => {
  var parameters = req.query.parameters
  if (!parameters) {
    connection.query("SELECT * FROM items", function (err, result, fields) {
      if (err) {
        console.log(err)
      } else {
        res.send(result)
      }
    }
    )
  }
  else if (parameters) {
    var cheminpara = "SELECT * FROM items WHERE " + parameters;
    connection.query(cheminpara, function (err, result, fields) {
      if (err) {
        console.log(err)
      } else {
        res.send(result)
      }
    })
  }

})
app.get('/items/:id', (req, res) => {
  var ID = req.params.id
  var cheminID = "SELECT * FROM items WHERE ID=?";
  connection.query(cheminID, ID, function (err, result, fields) {
    if (err) {
      console.log(err)
    } else {
      res.send(result)
    }
  })
})
app.post('/items',(req,res)=>{
const ID = req.body.id;
const Name = req.body.name;
const Price = req.body.price;
const Description = req.body.description;
connection.query('insert into items values(?,?,?,?)',[ID,Name,Price,Description],(err,result)=>{
  if (err) {
    console.log(err)
  } else {
    res.send("Posted")
  }
})
})
app.put('/items/:id', (req, res) => {
  var ID = req.params.id;
  const Name = req.body.name;
  const Price = req.body.price;
  const Description = req.body.description;
  connection.query('UPDATE items SET Name=?, Price=?, Description=? WHERE id=?',[Name,Price,Description,ID],(err,result)=>{
      if (err) {
    console.log(err)
  } else {
    res.send("Updated ")
  }
  })
})
app.delete('/items/:id',(req,res)=>{
  var ID = req.params.id;
  connection.query('DELETE from items WHERE id=?', ID,(err,result)=>{
      if (err) {
    console.log(err)
  } else {
    res.send("Deleted")
    console.log(result)
  }
})
})
app.get('/category', (req, res) => {
  var parameters = req.q
    connection.query("SELECT * FROM category", function (err, result, fields) {
      if (err) {
        console.log(err)
      } else {
        res.send(result)
      }
})
app.post('/category',(req,res)=>{
  const ID = req.body.id;
  const Name = req.body.name;
  const Description = req.body.description;
  connection.query('insert into category values(?,?,?)',[ID,Name,Description],(err,result)=>{
    if (err) {
      console.log(err)
    } else {
      res.send("Posted")
    }
  })
  })
})
app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
