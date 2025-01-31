# Insert

to add in Database - InsertOne, InsertMany
to find all - find
to find by key - db.collectionName.find({ keyTitle : "Property" })
            ex - db.test.find({gender : "Male"})
            ex - db.test.find({gender : "Male"}. {name : 1}) //1 is true - to show this in output
to filter - project
            ex - db.collectionName.find({ keyTitle : "Property" })f



MongoDB Operators - https://www.mongodb.com/docs/manual/reference/operator/query/

Name    Description
$eq     Matches values that are equal to a specified value.

$gt     Matches values that are greater than a specified value.

$gte    Matches values that are greater than or equal to a specified value.

$in     Matches any of the values specified in an array.

$lt     Matches values that are less than a specified value.

$lte    Matches values that are less than or equal to a specified value.

$ne     Matches all values that are not equal to a specified value.

$nin    Matches none of the values specified in an array.

$and    

$or

$exits

$type

$size

$all

$elemMatch

$set

$addToSet

$push

$pop

$pull

$pullAll


    ex
    db.test.find({age : {$gte: 30}}).sort({age : 1})  //1 for ascending


to find between data with sort and filtering
    ex
    db.test.find({gender: "Female" ,age: {$gte: 18 , $lte : 30}} , {age: 1}).sort({age:1})
    Its called - implicit and
    

Explicit $and - to use same property
    ex

    db.test.find({
        $and:[
            {gender: "Female"},
            {age : { $ne : 15}},
            {age : { $lte: 30}}
        ]
    }).project({        //to filter property
        age: 1,
        gender : 1
    }).sort({
        age: 1
    })



