// 1. Find all documents in the collection where the age is greater than 30, and only return the name and email fields.
db.test.find({age: { $gt: 30 }})
.project({ name: 1, email:1, age:1 }).sort({ age:1 })

// 2. Find documents where the favorite color is either "Maroon" or "Blue."
db.test.find({
    $or: [{favoutiteColor: "Maroon"}, {favoutiteColor: "Blue"}]
    })
.project({ favoutiteColor: 1 })

// 3. Find all documents where the skill is an empty array.
db.test.find({
    skills: { $size: 4 }
})
    .project({ skills: 1 })

// 4. Find documents where the person has skills in both "JavaScript" and "Java."

// 5. Add a new skill to the skills array for the document with the email "amccurry3@cnet.com". The skill is
// {"name": "Python"
// ,
// "level": "Beginner"
// ,
// "isLearning": true}
// Note: At first, you will have to insert the given email then add the skill
// mentioned above

// 6. Add a new language "Spanish" to the list of languages spoken by the person.

// 7. Remove the skill with the name "Kotlin" from the skills array.