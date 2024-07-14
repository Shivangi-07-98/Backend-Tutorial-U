let users = [
  {
    "id": 1,
    "name": "abhishek"
  },
  {
    "id": 2,
    "name": "jasbir"
  },
  {
    "id": 3,
    "name": "kartik"
  },
  {
    "id": 4,
    "name": "ram"
  }
]

app.get('/people', (req, res) => {
  console.log(req.query);
  res.send(users);
})