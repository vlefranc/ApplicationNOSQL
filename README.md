# ApplicationNOSQL

## Introduction:

This specific document has been written to help anyone to better understand the application made for the asignment in noSQL.

## Installation:

### Prequisites:
To run the app, you need to have the following installed on your device:
    MongoDb
    NodeJs

### Install

Start by cloning the project from github
```
git clone https://github.com/vlefranc/ApplicationNOSQL.git
```

Then, add all the dependencies required with
```
npm install 
```
(see the package.json file)

### Import Companies dataset in MongoDB

To run this project, you need first to import the dataset companies2.json (we provided the file in this project) into your MongoDB server.

Once MongoDB is started on your device, run the following commands in a new prompt:
```
cd path\to\MongoDB\directory\bin
mongoimport --db applicationdb --collection companies --drop --file path/to/companies2.json

```

## How it works:

Finally, if you wish to run the app, please use the following code

```sh
$ node server.js 
```

