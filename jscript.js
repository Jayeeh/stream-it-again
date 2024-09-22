// Define an object 'show' with properties and methods
const show = {
    // Property to store the name of the show
    name: "Pick and Shorty",
    // Property to store the number of views
    views: 10,
    // Method to play the show and log its name
    play: function() {
      const showName = this.name; // Access the name property of the show
      console.log(`Now Playing ${showName}`); // Log the name of the show
    },
    // Method to add views to the show
    addViews: function(numberViews) {
      this.views += numberViews; // Increase the views by the specified number
      return this.views; // Return the updated number of views
    }
  };
  
  // Call the play method to log the name of the show
  show.play();
  // Call the addViews method to add 1 view and log the updated number of views
  console.log(show.addViews(1));
  