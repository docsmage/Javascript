// JS 304: OO & MVC

// Sides available at: http://www.teaching-materials.org/jsoo/#/8

// Exercise #1

// Defining Objects in JS:
// var videolist = [];
// // The constructor function
// function Video(title, uploader, seconds) {
//   // The properties of this object
//   this.title = title;
//   this.uploader = uploader;
//   this.seconds = seconds;
//   this.currentSeconds = 0;
// }

// // A method on the object
// Video.prototype.watch = function() {
//   this.currentSeconds = this.seconds;
//   console.log(this.seconds + " seconds of " + this.title + "!");
// }

// // Instantiating a new object
// var video = new Video("Otters Holding Hands", "YouTube", 60);
// video.watch();
// videolist.push(video);
// var video2 = new Video("The Oooooh cat", "YouTube", 120);
// video2.watch();
// videolist.push(video2);
// var video3 = new Video("Gangnam Style", "YouTube", 320);
// video3.watch();
// // console.log(videolist);
// videolist.push(video3);

// We need to modify the prototype instead of just the object, in order to define watch as a function for all prototypes of "Video".
// This is a constructor invocation pattern, wehen it's a function that is modified (because we're modifying the constructor, yah!)

// console.log("**********************");

// var cat = {
//   title: "duke of cattingham",
//   decree: function(){
//     console.log("I'm hungry")
//   }
// }

// var Cat = function(title) {
//   this.title = title;
// }

// var duke = new Cat ("earl of cattingham")
// var secondCat = new Cat("new duke of cattingham")

// console.log(duke.decree); // not working!

// Exercise #2:

// var videolist = [];
// secondswatched = 0;
// // The constructor function
// function Video(title, uploader, seconds) {
//   // The properties of this object
//   this.title = title;
//   this.uploader = uploader;
//   this.seconds = seconds;
//   this.currentSeconds = 0;
// }

// // A method on the object
// Video.prototype.watch = function() {
//   this.currentSeconds = this.seconds;
//   secondswatched += this.seconds;
//   console.log("You watched " + this.seconds + " seconds of " + this.title + "!");
// }

// // Instantiating a new object
// var video = new Video("Otters Holding Hands", "Otters holding hands", 100);
// video.watch();
// videolist.push(video);
// var video2 = new Video("The Oooooh cat", "Stefan Petrov", 20);
// video2.watch();
// videolist.push(video2);
// var video3 = new Video("Gangnam Style", "officialpsy", 252);
// video3.watch();
// videolist.push(video3);

// // The constructor function
// function musicVideo(title, uploader, seconds, artist) {
//   Video.call(this, title, uploader, seconds);
//   this.artist = artist;
// }
// // Extending the Video object
// musicVideo.prototype = Object.create(Video.prototype);

// musicVideo.prototype.rockout = function() {
//   secondswatched += this.seconds;
//   console.log("You rocked out to " + this.seconds + " seconds of " + this.title + " by " + this.artist + "!")
// }

// var blankspaces = new musicVideo("Blank Spaces", "TaylorSwiftVEVO", 272, "Taylor Swift");
// videolist.push(blankspaces);
// blankspaces.rockout();
// console.log("Omg, you've watched " + secondswatched + " seconds of YouTube today. Go outside or something!")
// console.log(videolist);

// Check out config! This is a way to do optional arguments in Javascript. It's the equivalent of Ruby's args.

// function Book(config) {
//   this.title = config.title;
//   this.author = config.author;
//   this.numPages = config.numPages;
//   this.currentPage = 0;
// }

// var book = new Book({
//     title: "Robot Dreams",
//     author: "Isaac Asimov",
//     numPages: 320});

// // Using config to establish optional arguments:

// function Book(config) {
//   config = config || {};
//   this.title = config.title || "Untitled";
//   this.author = config.author || "Unknown";
//   this.numPages = config.numPages || 100;
//   this.currentPage = 0;
// }

// var book = new Book({
//     title: "Robot Dreams",
//     numPages: 320});

// Exercise 3:

secondswatched = 0;
// The constructor function
function Video(config) {
  // The properties of this object
  this.title = config.title || "Untitled";
  this.uploader = config.uploader || "Unknown";
  this.seconds = config.seconds || 0;
  this.currentSeconds = 0;
}
// A method on the object
Video.prototype.watch = function() {
  this.currentSeconds = this.seconds;
  secondswatched += this.seconds;
  console.log("You watched " + this.seconds + " seconds of " + this.title + "!");
}

// Instantiating a new object
var video = new Video({
  title: "Otters Holding Hands",
  uploader: "Otters holding hands",
  seconds: 100});
video.watch();
// var video2 = new Video("The Oooooh cat", "Stefan Petrov", 20);
// video2.watch();
// var video3 = new Video("Gangnam Style", "officialpsy", 252);
// video3.watch();

// The constructor function
// function musicVideo(title, uploader, seconds, artist) {
//   Video.call(this, title, uploader, seconds);
//   this.artist = artist;
// }
// // Extending the Video object
// musicVideo.prototype = Object.create(Video.prototype);

// musicVideo.prototype.rockout = function() {
//   secondswatched += this.seconds;
//   console.log("You rocked out to " + this.seconds + " seconds of " + this.title + " by " + this.artist + "!")
// }

// var blankspaces = new musicVideo("Blank Spaces", "TaylorSwiftVEVO", 272, "Taylor Swift");
// videolist.push(blankspaces);
// blankspaces.rockout();
// console.log("Omg, you've watched " + secondswatched + " seconds of YouTube today. Go outside or something!")
