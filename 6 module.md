Aggregation & Indexing

Aggregation is a pipeline method where we can filter with some condition and give data.

$match - Give data which are Match condition
        db.test.aggregate([
            //stage-1
            {$match :{gender: "Male", age: {$lt: 30}}}
        ])

$project - Give the data we want to see
            db.test.aggregate([
            //stage-1
            {$match :{gender: "Male", age: {$lt: 30}}},
            //stage-2
            {$project: {name:1, age:1, gender:1}}
        ])

        