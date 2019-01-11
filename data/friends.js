// ===============================================================================
// DATA
// Below data will hold all of the survey contents.
// Initially we just set it equal to a "dummy" surveyor.
// But you could have it be an empty array as well.
// ===============================================================================

var friendsArray = [
  {
    name:"Ahmed",
    email: "am842@gmail.com",
    photo:"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    scores:[
        5,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        1
      ],
    dream:"to hike mount everest",
  }
  ];
  
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = friendsArray;

  // MISSING STEPS
  // after having the data sorted