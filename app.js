const express = require('express');
const mustache = require('mustache-express');

const app = express();
app.engine('mustache', mustache());

app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

app.get('/', function(req, res) {
  //TODO: Create a mustache index view that links to the other pages below
  res.render('index');
});

app.get('/simpleobject', function(req, res) {
  let president = { firstName: 'Franklin', lastName: 'Roosevelt' }

  //TODO: Create a view and render `president`
  res.render('president', president);
});

app.get('/nestedobject', function(req, res) {
  let person = {
    firstName: 'Frank',
    lastName: 'Underwood',

    politicalParty: {
      name: 'Democrat'
    }
  }
  res.render('person',person);
  //TODO: Create a view and render `person`.
});

app.get('/nestedarray', function(req, res) {
  let dude = {
    name: 'Jimmy McEatalot',

    favoriteFoods: ['steak', 'shrimp', 'wings', 'nachos']
  };
  res.render('dude', dude);
  //TODO: Create a view and render `dude`
});


app.get('/nestedarrayofobjects', function(req, res) {
  let library = {
    name: 'J Jonah Jameson Public Library',
    books: [
      {
        title: 'Spider-Man: Bad or The Worst?',
        publicationDate: 2008,
        author: 'J. Jonah Jameson'
      },
      {
        title: 'Suicide Squad was Horrible',
        publicationDate: 2017,
        author: 'Roger Ebert'
      },
      {
        title: 'How I Was Bitten by a Radioactive Spider and Lived',
        publicationDate: 2012,
        author: 'Speter Sparker'
      },
      {
        title: 'Dr. Pepper Is Healthy: The Case for Drinking More',
        publicationDate: 2017,
        author: 'Eric Sowell'
      }
    ]
  }
  //TODO: Create a view and render `library`
  res.render('library',library);
});

app.get('/renderconditionally', function(req, res) {
  let secretAgent = {
    fakeName: 'Fakey McFakerson',
    showRealName: true,
    realName: 'Bobby McBobberson'
  }

  //TODO: Create a view and render `secretAgent`. If the `showRealName` property is `false`, don't render `realName`. If it is `true`, render `realName`. To test this, try changing the value above back and forth
  res.render('secret-agent', secretAgent);
});

app.get('/renderconditionallyinarray', function(req, res) {

  let libraryAccount = {
    borrower: 'Peter Parker',
    books: [
      {
        title: 'Spider-Man: Bad or The Worst?',
        publicationDate: 2008,
        author: 'J. Jonah Jameson',
        isLate: true
      },
      {
        title: 'Suicide Squad was Horrible',
        publicationDate: 2017,
        author: 'Roger Ebert',
        isLate: false
      },
      {
        title: 'How I Was Bitten by a Radioactive Spider and Lived',
        publicationDate: 2012,
        author: 'Speter Sparker',
        isLate: false
      },
      {
        title: 'Dr. Pepper Is Healthy: The Case for Drinking More',
        publicationDate: 2017,
        author: 'Eric Sowell',
        isLate: true
      }
    ]
  }
res.render('libraryAccount',libraryAccount);
  //TODO: Create a view and render `libraryAccount`. Use different styling for the late books than the non-late books.
});


app.listen(3000, function() {
  console.log('Listening on port 3000.');
});
