$(".button").click(function() {
    var name = $(".name").val();
    $(".nameHolder").text(name);    
    
    var cartoon = $(".cartoon").val();
    $(".cartoonHolder").text(cartoon);    
      
    var crime= $(".crime").val();
    $(".crimeHolder").text(crime);    
    
    var idolHolder = $(".holiday").val();
    $(".idolHolder").text(idolHolder);    
      
       
    var  age = $(".age").val();
    var oldAge=(2060 - 2019)+parseInt(age);
    $(".ageHolder").text(oldAge);    
      
});

