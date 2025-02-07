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

        We can modify title with $project
        {$project: {fullName: "name"}} //data will given as fullName

$addfields - Only apply to the document in the pipeline, does not modifies to original
            {$addfields: {course: "Level-2"}}


$out - To create a new output/collection with selected fields
        {$out : "New-Collection-Name"}

$marge - To modify collection
        {$marge: "Collection Name"}

$group - To find by title data
        {$group : {_id: "$address.country", count : {$sum : 1}}}
        result - _id : country names, count : same data number

        $push - works on $group to see more fields
        {$group : {_id: "$address.country", count : {$sum : 1}, doc : {$push : "$name"}}}
        {$group : {_id: "$address.country", count : {$sum : 1}, doc : {$push : "$$ROOT"}}} // $$ROOT to see all data

        if we use push then we have to use ush title in project
        {$project: {"doc.name":1, "doc.email":1}}

        we can use in $group - $count, $max, $min, $avg, $sum, $push

        to sum all data values
        {$group: {
            _id: null,  //null uses as all data
            totalSalary: {$sum: "$salary"}
        }}

        We can not work directly on array, so we need to divide in several times by array data
        db.test.aggregate([
            {
                $unwind: "$arrayTitle"
            },
            {
                $group: {_id:"age", interestsPerAge: {$push: "$interests" }}
            }
        ])


$bucket - Use to set boundaries to divide some condition
          db.test.aggregate([
            //stage-1
            {
                $bucket: {
                      groupBy: "$age",
                      boundaries: [ 20, 40, 60,80 ],
                      default: "Others",
                      output: {
                        "count": { $sum: 1 },
                        "titles" : { $push: "$$ROOT" }
                      }},
            },
            //stage-2
            {$sort: {count: -1}            },
            //stage-3
            {$project: {count:1}}
        ])