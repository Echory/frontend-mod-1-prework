/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {
  constructor(author, content, timeStamp, numberOfLikes, comments){
    this.author = author;
    this.content = content;
    this.timeStamp = timeStamp;
    this.numberOfLikes = numberOfLikes;
    this.comments = comments;
  }

  addLike() {
    this.numberOfLikes++;
  }
  addComment(newComment) {
    this.comments.push(newComment);
  }

};
var myTweet = new Tweet('Joe', 'Bird', '08/02/21-4:00', 0, []);
console.log(myTweet);
myTweet.addLike();
myTweet.addComment('Nice');
console.log(myTweet);

var myTweetTwo = new Tweet('Rashida', 'Snack', '07/09/21-7:20', 12, []);
console.log(myTweetTwo);
myTweetTwo.addLike();
myTweetTwo.addComment('Tasty!');
console.log(myTweetTwo);

var myTweetThree = new Tweet('Addison', 'New puppy', '08/20/21-9:40', 0, []);
console.log(myTweetThree);
myTweetThree.addLike();
myTweetThree.addComment('So cute wow');
console.log(myTweetThree);
