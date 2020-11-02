$(document).ready(function(){
    // predefined quotes list
    var quoteSource=[
        {
            quote:"Quote 1 goes here",
            name:"reference 1"
        },
        {
            quote:"Quote 2 goes here",
            name:"reference 2"
        }
    ];
    

    $('#quoteButton').click(function(evt){
        //define containers of targeted info
        var quote = $('#quoteContainer p').text();
        var quoteGenius = $('#quoteGenius').text();
            //prevent browser default action
            evt.preventDefault();
        //get new random number to attach to quote + set limit
        var sourceLength = quoteSource.length;
        var randomNumber= Math.floor(Math.random()*sourceLength);
        //set new quote
        for(i=0;i<=sourceLength;i+=1){
        var newQuoteText = quoteSource[randomNumber].quote;
        var newQuoteGenius = quoteSource[randomNumber].name;
        //console.log(newQuoteText,newQuoteGenius);
        var timeAnimation = 500;
        var quoteContainer = $('#quoteContainer');
            //fade out animation with callback
            quoteContainer.fadeOut(timeAnimation, 
                function(){
                    quoteContainer.html('');
                    quoteContainer.append('<p>'+newQuoteText+'</p>'+'<p id="quoteGenius">'+'-								'+newQuoteGenius+'</p>');
                    //fadein animation
                    quoteContainer.fadeIn(timeAnimation);
                });  
            break;
        };//for loop END

    });//quoteButton func END
      
});

