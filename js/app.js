function Questions(strong,salty,bitter,sweet,fruity) {
  this.strong = strong;
  this.salty = salty;
  this.bitter = bitter;
  this.sweet = sweet;
  this.fruity = fruity;
}

function Ingredients(strong,salty,bitter,sweet,fruity) {
  this.strong = strong;
  this.salty = salty;
  this.bitter = bitter;
  this.sweet = sweet;
  this.fruity = fruity;
}

function Pantry(ingredients) {
  this.ingredients = ingredients
}


var bartenderQuestions = new Questions("Do ye like yer drinks strong?",
                                       "Do ye like it with a salty tang?",
                                       "Are ye a lubber who likes it bitter?",
                                       "Would ye like a bit of sweetness with yer poison?",
                                       "Are ye one for a fruity finish?"
                                      );

var ingredients = new Ingredients(["Glug of rum", "slug of whisky", "splash of gin"],
                                  ["Olive on a stick", "salt-dusted rim", "rasher of bacon"],
                                  ["Shake of bitters", "splash of tonic", "twist of lemon peel"],
                                  ["Sugar cube", "spoonful of honey", "splash of cola"],
                                  ["Slice of orange", "dash of cassis", "cherry on top"]
                                 );

function getAllKeyValues(object) {
  var keys = Object.keys(object);
  var values = []
  for(var property in object) {
    object[property].forEach(function(v) {
      values.push(v);
    })
  }
  return values
}


var myPantry = new Pantry(getAllKeyValues(ingredients))

$(function() {
  $("#strong-question").text(bartenderQuestions.strong)
  $("#salty-question").text(bartenderQuestions.salty)
  $("#bitter-question").text(bartenderQuestions.bitter)
  $("#sweet-question").text(bartenderQuestions.sweet)
  $("#fruity-question").text(bartenderQuestions.fruity)
})
