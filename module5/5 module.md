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

Query Operators:
$and → Matches documents that satisfy all conditions.
$or → Matches documents that satisfy at least one condition.
$exists → Checks if a field exists (true or false).
$type → Matches fields based on their BSON data type.
$size → Matches arrays with a specific length.
$all → Matches arrays containing all specified elements.
$elemMatch → Matches arrays with at least one element satisfying conditions.
Update Operators (Array Modifiers):
$set → Updates or adds a field with a new value.
$addToSet → Adds a value to an array if it doesn’t exist.
$push → Adds a value to an array.
$pop → Removes first (-1) or last (1) element from an array.
$pull → Removes specific elements from an array.
$pullAll → Removes multiple specific values from an array.


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



