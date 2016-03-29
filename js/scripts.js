$(document).ready(function(){
  $('#button').click(function(event){

    var phrase = $('#palindrome').val().split("");
    var phrase1 = $('#palindrome').val().split("");

    phrase = phrase.reverse();
    
    if(phrase1.toString() === phrase.toString()){
      console.log("you got it");
    }else{
      console.log("wrong");
    }
    event.preventDefault();
  });
});
