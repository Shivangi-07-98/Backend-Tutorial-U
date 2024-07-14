// paste this code in server.js 

// redirects
app.get('/about', (req, res) => {
  res.redirect('/def');
})

// send file

// app.get('/abc', (req, res) => {
//     res.sendFile('C:\aayanProjects\Self\Backend\BackendTutorial_U\notes\express\about.html');
// });

app.get('/abc', (req, res) => {
  res.sendFile('C:/aayanProjects/Self/Backend/BackendTutorial_U/notes/express/about.html');
});

// app.get('/abc', (req, res) => {
//     res.sendFile(path.join(__dirname, 'notes', 'express', 'about.html'));
// });

app.get('/def', (req, res) => {
  res.sendFile('./notes/express/about.html', { root: __dirname });
});


// 404 page
app.use((req, res) => {
  res.status(404).send('page not found :(');
})
