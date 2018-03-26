const Company = require('./model');
const CompanyRouter = require('express').Router();
const CompanyQuery = require('./queries');

CompanyRouter.get('/competitors', (req, res ,next) => {
    CompanyQuery.sortCompetitors((err,list) => {
          if(err) {
                console.log("Error " + err);
                res.sendStatus(500);
          } else {
                res.json(list);
          }
    });
});

CompanyRouter.get('/buyers', (req, res ,next) => {
    CompanyQuery.GroupByBuyers((err,list) => {
          if(err) {
                console.log("Error " + err);
                res.sendStatus(500);
          } else {
                res.json(list);
          }
    });
});

CompanyRouter.get('/offices', (req, res ,next) => {
    CompanyQuery.PrintOfficesEuro((err,list) => {
          if(err) {
                console.log("Error " + err);
                res.sendStatus(500);
          } else {
                res.json(list);
          }
    });
});

module.exports = CompanyRouter;