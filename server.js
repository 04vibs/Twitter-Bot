var twit=require('twit');
var keys=require('./config');
console.log(keys);
var t=new twit(keys);

var tweet={ status: 'Tweeting from node server!' };
t.post('statuses/update',tweet , function(err, reply) {
if(err)
    console.log("Error occurred: "+err);
    else
        console.log("Tweeted");
});
   