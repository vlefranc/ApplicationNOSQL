const Company = require('./model');
const CompanyRouter = require('express').Router;
const CompanyQuery = require('.queries');

CompanyRouter.get('/competitors', (req, res ,next) => {
    MoviesController.sortCompetitors(req, req, (err,list) => {
          if(err) {
                console.log("Error " + err);
                res.sendStatus(500);
          } else {
                res.json(list);
          }
    });
});

moviesRouter.get('/buyers', (req, res ,next) => {
    MoviesController.GroupByBuyers(req, req, (err,list) => {
          if(err) {
                console.log("Error " + err);
                res.sendStatus(500);
          } else {
                res.json(list);
          }
    });
});

moviesRouter.get('/offices', (req, res ,next) => {
    MoviesController.PrintOfficesEuro(req, req, (err,list) => {
          if(err) {
                console.log("Error " + err);
                res.sendStatus(500);
          } else {
                res.json(list);
          }
    });
});