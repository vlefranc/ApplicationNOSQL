const Company = require('./model');

//Company.find({},{"name":1,"_id":0,"homepage_url":1, "overview":1,})


//Company.find({"total_money_raised":{ $regex: "€", $options: 'si' }},{"name":1,"_id":0,"total_money_raised":1})

//Sort the companies in descending order by the number of their competitors. 
//(In order to buy the companies with less competitors to crush them.)

exports.sortCompetitors = function(callback){

    var matchEmployees={$match:{"competitions":{'$not': {'$size': 0}}}}
    var unwindCompetitors={$unwind: "$competitions"}
    var groupComp={$group : {"_id":"$name","nb_of_competitors":{$sum:1}}}
    var sortDown={$sort:{"nb_of_competitors":1}}
    Company.aggregate([unwindCompetitors,matchEmployees,groupComp,sortDown], callback);
}

//For each company acquired by another one, group them by the name of the buying 
//company and sort these buyers by the number of companies they bought.

exports.GroupByBuyers = function(callback){
    var unwindCompany ={$unwind:"$acquisition.acquiring_company.name"};
    var groupByBuyers ={$group: {"_id":"$acquisition.acquiring_company.name","nb_of_companies_bought":{$sum:1}}};
    var sortByNumberBought= {$sort:{"nb_of_companies_bought":-1}};
    Company.aggregate([unwindCompany, groupByBuyers, sortByNumberBought], callback);
}


//For each company, print their name and the addresses of their offices in the US, 
//only if the total money they raised is in Euro.

exports.PrintOfficesEuro = function(callback)
{
    var unwindOffice= {$unwind : "$offices"}
    var matchEuroInUsa={$match:{"offices.country_code":"USA","total_money_raised":{$regex:"€",$options:"i"}}}
    var projectInfo= {$project: {"_id":0,"name":1}}
    var groupBy={$group: {"_id":"$name","nb_of_offices":{$sum:1}}}
    var sortByAsc={$sort:{"nb_of_offices":-1}}
    Company.aggregate([unwindOffice, matchEuroInUsa,projectInfo,groupBy,sortByAsc], callback);
}



