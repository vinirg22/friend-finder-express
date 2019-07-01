

const friends = require("../data/friends");


module.exports = (app) => {

    app.get("/api/friends", (req, res) => {
        res.json(friends);
    });

    app.post("/api/friends", (req, res) => {
        //Comparing user with their best friend match 
        const difference = 0;
        
        const bestMatch = {
            name: "",
            photo: "",
            friendDiff: 1000
        };

      // result of user's survey
        const userData = req.body;
        const userName = userData.name;
        const userScores = userData.scores;
        
        const b = userScores.map(function (item) {
            return parseInt(item, 10);
        });
        userData = {
            "name": req.body.name,
            "photo": req.body.photo,
            "scores": b
        }


        console.log("Name: " + userName);
        console.log("User Score " + userScores);

        const sum = b.reduce((a, b) => a + b, 0);
        console.log("Sum of users score " + sum);
        console.log("Best match friend diff " + bestMatch.friendDiff);


        console.log("+++++++=================++++++++++");
        // Loop through all the friend chances
        for (const i = 0; i < friends.length; i++) {

            console.log(friends[i].name);
            difference = 0;
            console.log("Total Diff " + difference);
            console.log("Best match friend diff " + bestMatch.friendDiff);

            const friendScore = friends[i].scores.reduce((a, b) => a + b, 0);
            console.log("Total friend score " + friendScore);
            difference += Math.abs(sum - friendScore);
            console.log(" -------------------> " + difference);
         
            if (difference <= bestMatch.friendDiff) {

            
                bestMatch.name = friends[i].name;
                bestMatch.photo = friends[i].photo;
                bestMatch.friendDiff = difference;
            

            }
            console.log(difference + " Total Difference");

        }
       
        friends.push(userData);
        console.log("New User added");
      
        // Return a JSON with the user's bestMatch.
        res.json(bestMatch);

    });

}
