function Categories(strong, salty, bitter, sweet, fruity) {
  this.strong = strong;
  this.salty = salty;
  this.bitter = bitter;
  this.sweet = sweet;
  this.fruity = fruity;
}

function Pantry(ingredients) {
  this.ingredients = ingredients;
}

function getAllKeyValues(object) {
  var keys = Object.keys(object);
  var values = [];
  for (var property in object) {
    object[property].forEach(function(v) {
      values.push(v);
    });
  }
  return values;
}

function generateQuestions() {
  $("#strong-question").text(bartenderQuestions.strong);
  $("#salty-question").text(bartenderQuestions.salty);
  $("#bitter-question").text(bartenderQuestions.bitter);
  $("#sweet-question").text(bartenderQuestions.sweet);
  $("#fruity-question").text(bartenderQuestions.fruity);
}

var bartenderQuestions = new Categories("Do ye like yer drinks strong?",
  "Do ye like it with a salty tang?",
  "Are ye a lubber who likes it bitter?",
  "Would ye like a bit of sweetness with yer poison?",
  "Are ye one for a fruity finish?"
);

var ingredients = new Categories(["Glug of rum", "slug of whisky", "splash of gin"], ["Olive on a stick", "salt-dusted rim", "rasher of bacon"], ["Shake of bitters", "splash of tonic", "twist of lemon peel"], ["Sugar cube", "spoonful of honey", "splash of cola"], ["Slice of orange", "dash of cassis", "cherry on top"]);

function prefsCheck(preferences) {
  a = Object.keys(preferences);
  for (var taste in a) {
    var keyName = a[taste];
    if ($("#" + keyName + "-yes").is(":checked")) {
      userPrefs[keyName] = true;
    } else {
      userPrefs[keyName] = false;
    }
  }
}

function getRandomInt() {
  //returns a random number up to 3(number of indexes in the array)
  return Math.floor(Math.random() * (3 - 0)) + 0;
}

function Bartender() {
  this.getDrink = function(userPrefs) {
    var spicyMeatball;
    for (var prefs in userPrefs) {
      if (userPrefs[prefs] === true) {
        var randomNumber = getRandomInt();
        if (spicyMeatball)
          spicyMeatball += " and " + ingredients[prefs][randomNumber];
        else
          spicyMeatball = ingredients[prefs][randomNumber];
      }
    }
    return spicyMeatball;
  };
}

var myPantry = new Pantry(getAllKeyValues(ingredients));

var userPrefs = new Categories();

var theBartender = new Bartender();

$(function() {
  generateQuestions();
  $("#submit").click(function(e) {
    e.preventDefault();
    prefsCheck(userPrefs);
    $(".your-drink").text(theBartender.getDrink(userPrefs));
  });
});
