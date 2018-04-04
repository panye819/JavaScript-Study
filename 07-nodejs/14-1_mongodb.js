var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
const url = 'mongodb://localhost:27017';
const dbName = 'node-mongo-examples';
MongoClient.connect(url,function (err,client) {
    assert.equal(null,err);
    console.log("成功建立数据库连接......");
    const db = client.db(dbName);
    insertDocuments(db,function () {
        client.close();
    });
});
const insertDocuments = function (db,callback) {
    const collection = db.collection('documents');
    //Insert some documents
    collection.insertMany([{a:1},{a:2},{a:3}],function (err,result) {
        assert.equal(err,null);
        assert.equal(3,result.result.n);
        assert.equal(3,result.ops.length);
        console.log("Inserted 3 documents into the collection");
        callback(result);
    });
};

