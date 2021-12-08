const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes')


const app = express();

// Connect to mongoDB
const dbURI = 'mongodb+srv://testuser:!QAZ2wsx@cluster0.mv479.mongodb.net/node-tuts?retryWrites=true&w=majority'
mongoose.connect(dbURI)
  .then((result) => app.listen(3000))
  .catch(error => console.log('dbConnectionError', error))

// register view engine
app.set('view engine', 'ejs')


// middlewares and static files ---------------------------

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

// middleware for logging the information without morgan ----------
// app.use((req, res, next) => {
//   console.log('new request made:');
//   console.log('host: ', req.hostname);
//   console.log('path: ', req.path);
//   console.log('method: ', req.method);
//   next();
// })

// app.use((req, res, next) => {
//   console.log('In the next middleware:');
//   next();
// })

// middleware for logging the information WITH MORGAN ------------

app.use(morgan('dev'));

// mongoose and mongo sandbox routes -----------------------

// app.get('/add-blog', (req, res) => {
//   const blog = new Blog({
//     title: 'New blog 2 simple',
//     snippet: 'About my new blog',
//     body: 'More about my new blog',
//   });
//   blog.save()
//     .then((result) => {
//       res.send(result)
//     })
//     .catch((err) => console.log('DBERROR', err))
// })

// app.get('/all-blogs', (req, res) => {
//   Blog.find()
//     .then((result) => {
//       res.send(result)
//     })
//     .catch((err) => console.log('Error in get all blogs', err))
// })

// app.get('/single-blog', (req, res) => {
//   Blog.findById('61b098e58149ab34b45c51f4')
//   .then((result) => {
//     res.send(result)
//   })
//   .catch((err) => console.log('Get by unic ID error', err))
// })

// ---------------------------------- 

app.get('/', function (req, res) {
  //   res.send('<h2>This is our Home page</h2>')
  res.redirect('./blogs');
});

app.get('/about', function (req, res) {
  // res.send('<h2>This is our About page</h2>')
  res.render('about', {title: "About"});
});

// blogRoutes

app.use('/blogs', blogRoutes)

// 404 page ----------------------------
app.use((req, res) => {
    res.status(404).render('404', {title: "404"});
})