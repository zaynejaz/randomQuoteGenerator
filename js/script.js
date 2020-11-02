$(document).ready(function(){
    // predefined quotes list
    var quoteSource=[
        {
            quote:"Your imagination is your preview of life's coming attractions",
            name:"Albert Einstein"
        },
        {
            quote:"Can you imagine what I would do if I do all I can",
            name:"Sun Tzu"
        },
        {
            quote:"A person who never made a mistake never tried anything new",
            name:"Albert Einstein"
        },
        {
            quote:"Ask yourself what you truly desire, and be honest,<br>otherwise there's no point",
            name:"Anonymous"
        },
        {
            quote:"The greatest mysteries come in threes.<br>Birth, Life , Death.<br>Past, Present, Future",
            name:"Michael Burnham",
        },
        {
            quote:"The best revenge is massive success",
            name:"Frank Sinatra"
        },
        {
            quote:"Wanting things makes us happier than having them",
            name:"Lindsay Abrams"
        },
        {
            quote:"We document life so much, we forget to cherish the moments we have",
            name:"Anonymous"
        },
        {
            quote:"Prosperity is about having peace in your life",
            name:"Anonymous"
        },
        {
            quote:"I don't see my glass half empty, or half full. I'm just thankful to have a glass",
            name:"Nick Scott"
        },
        {
            quote:"What's the one thing you gain from losing everything?<br>Perspective",
            name:"Anonymous"
        },
        {
            quote:"Opportunities multiply as they are seized",
            name:"Sun Tzu"
        },
        {
            quote:"Know thy self, know thy enemy. A thousand battles, a thousand victories.",
            name:"Sun Tzu"
        },
        {
            quote:"All warfare is based on deception.",
            name:"Sun Tzu"
        },
        {
            quote:"An action comitted in anger is an action doomed to failure",
            name:"Gengis Khan"
        },
        {
            quote:"If you're afraid - don't do it, - if you're doing it - don't be afraid!”",
            name:"Gengis Khan"
        },
        {
            quote:"I am the punishment of God",
            name:"Gengis Khan"
        },
        {
            quote:"A person's a person, no matter how small",
            name:"Dr. Seuss"
        },
        {
            quote:"Don't cry because it's over. Smile because it happened",
            name:"Dr. Seuss"
        },
        {
            quote:"Today you are you! That is truer than true! There is no one alive who is you-er than you!",
            name:"Dr. Seuss"
        },
        {
            quote:"Thought I wouldn't when I would, would when I wouldn't, I still did it for the reason everybody said I couldn't",
            name:"Seth B. Binzer"
        },
        {
            quote:"Greed, for the lack of a better word, is good",
            name:"Gordon GekoK"
        },
        {
            quote:"Keep your friends close, but your enemies closer",
            name:"Sun Tzu"
        },
        {
            quote:"Logic is the beginning of wisdom, not the end",
            name:"Spock"
        },
        {
            quote:"Things are only impossible until they're not",
            name:"Jean-Luc Picard"
        },
        {
            quote:"Change is the essential process of all existence",
            name:"Spock"
        },
        {
            quote:"It is possible to commit no errors and still lose. That is not a weakness. That is life",
            name:"Jean-Luc Picard"
        },
        {
            quote:"Without freedom of choice there is no creativity",
            name:"James T. Kirk"
        },
        {
            quote:"You can use logic to justify almost anything. That's its power. And its flaw",
            name:"Cathryn Janeway"
        },
        {
            quote:"In my experience there is no such thing as luck",
            name:"Obi-Wan Kenobi"
        },
        {
            quote:"Your focus determines your reality",
            name:"Qui-Gon Jinn"
        },
        {
            quote:"Do. Or do not. There is no try",
            name:"Yoda"
        },
        {
            quote:"The purpose of our lives is to be happy",
            name:"Dali Lama"
        },
        {
            quote:"Get busy living or get busy dying",
            name:"Steven Kind"
        },
        {
            quote:"You only live once, but if you do it right, once is enough",
            name:"Mae West"
        },
        {
            quote:"Not how long, but how well you have lived is the main thing",
            name:"Seneca"
        },
        {
            quote:"The unexamined life is not worth living",
            name:"Scoretes"
        },
        {
            quote:"Life is not a problem to be solved, but a reality to be experienced",
            name:"Soren Kierkegaard"
        },
        {
            quote:"You never really learn much from hearing yourself speak",
            name:"George Clooney"
        },
        {
            quote:"Life is really simple, but men insist on making it complicated",
            name:"Confucious"
        },
        {
            quote:"Life is like a coin. You can spend it any way you wish, but you only spend it once",
            name:"Lilian Dickson"
        },
        {
            quote:"In three words I can sum up everything I’ve learned about life: It goes on.",
            name:"Robert Frost"
        },
        {
            quote:"The healthiest response to life is joy",
            name:"Deepak Chopra"
        },
        {
            quote:"Health is the greatest gift, contentment the greatest wealth, faithfulness the best relationship",
            name:"Buddhda"
        },
        {
            quote:"Life would be tragic if it weren’t funny",
            name:"Steven Hawking"
        },
        {
            quote:"Life is what we make it, always has been, always will be",
            name:"Grandma Moses"
        },
        {
            quote:"Life’s tragedy is that we get old too soon and wise too late",
            name:"Benjamin Franklin"
        },
        {
            quote:"Life is about making an impact, not making an income",
            name:"Kevin Kruse"
        },
        {
            quote:"The two most important days in your life are the day you are born and the day you find out why",
            name:"Mark Twain"
        },
        {
            quote:"I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed",
            name:"Michael Jordan"
        },
        {
            quote:"Too many of us are not living our dreams because we are living our fears",
            name:"Les Brown"
        },
        {
            quote:"I believe every human has a finite number of heartbeats. I don’t intend to waste any of mine",
            name:"Neil Armstrong"
        },
        {
            quote:"Live as if you were to die tomorrow. Learn as if you were to live forever",
            name:"Mahatma Gandhi"
        },
        {
            quote:"When you cease to dream you cease to live",
            name:"Malcom Forbes"
        },
        {
            quote:"If you can do what you do best and be happy, you’re further along in life than most people",
            name:"Leonardo DiCaprio"
        },
        {
            quote:"It is our choices that show what we truly are, far more than our abilities",
            name:"J K Rowling"
        },
        {
            quote:"The best way to predict your future is to create it",
            name:"Abraham Lincoln"
        },
        {
            quote:"You must expect great things of yourself before you can do them",
            name:"Michael Jorda"
        },
        {
            quote:"There are no mistakes, only opportunities",
            name:"Tina Fey"
        },
        {
            quote:"It takes 20 years to build a reputation and five minutes to ruin it. If you think about that, you’ll do things differently",
            name:"Warren Buffet"
        },
        {
            quote:"Sometimes you can’t see yourself clearly until you see yourself through the eyes of others",
            name:"Ellen DeGeneres"
        },
        {
            quote:"Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment",
            name:"Buddha"
        },
        {
            quote:"Life is a dream for the wise, a game for the fool, a comedy for the rich, a tragedy for the poor",
            name:"Sholom Aleichem"
        },
        {
            quote:"If you love life, don’t waste time, for time is what life is made up of",
            name:"Bruce lee"
        },
        {
            quote:"When one door closes, another opens; but we often look so long and so regretfully upon the closed door that we do not see the one that has opened for us",
            name:"Alexander Graham Bell"
        },
        {
            quote:"Never take life seriously. Nobody gets out alive anyway",
            name:"Anonymous"
        },
        {
            quote:"Be happy for this moment. This moment is your life",
            name:"Omar Khayyam"
        },
        {
            quote:"When it is obvious that goals can’t be reached, don’t adjust the goals, but adjust the action steps",
            name:"Confucius"
        },
        {
            quote:"There may be people who have more talent than you, but there’s no excuse for anyone to work harder than you do",
            name:"Derek Jeter"
        },
        {
            quote:"Don’t be afraid to fail. It’s not the end of the world, and in many ways, it’s the first step toward learning something and getting better at it",
            name:"Jon Hamm"
        },
        {
            quote:"I don’t believe in happy endings, but I do believe in happy travels, because ultimately, you die at a very young age, or you live long enough to watch your friends die. It’s a mean thing, life",
            name:"George Clooney"
        },
        {
            quote:"I guess it comes down to a simple choice, really. Get busy living or get busy dying",
            name:"Andy Dufresne"
        },
        {
            quote:"Happy is the man who can make a living by his hobby",
            name:"George Bernard Shaw"
        },
        {
            quote:"Surround yourself with people who make you a better person",
            name:"Karl Marx"
        },
        {
            quote:"ou will meet two kinds of people in life: ones who build you up and ones who tear you down. But in the end, you’ll thank them both",
            name:"Anonymous"
        },
        {
            quote:"It is impossible to live without failing at something, unless you live so cautiously, that you might as well not have lived at all – in which case you fail by default",
            name:"Anonymous"
        },
        {
            quote:"Life doesn’t require that we be the best, only that we try our best",
            name:"H. Jackson Brown Jr."
        },
        {
            quote:"Today, you have 100% of your life left",
            name:"Tom Landry"
        },
        {
            quote:"Nobody who ever gave his best regretted it",
            name:"George Halas"
        },
        {
            quote:"Make each day your masterpiece",
            name:"John Wooden"
        },
        {
            quote:"You can’t put a limit on anything. The more you dream, the farther you get",
            name:"Michael Phelps"
        },
        {
            quote:"Go fuck up on purpose and liberate yourself",
            name:"Gary Vaynerchuck"
        },
        {
            quote:"Let's get one thing clear! I don't give a fuck about you guys... But I do care!",
            name:"Zayn Ejaz"
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
                    quoteContainer.append('<p>'+newQuoteText+'</p>'+'<p id="quoteGenius">'+'								'+newQuoteGenius+'</p>');
                    //fadein animation
                    quoteContainer.fadeIn(timeAnimation);
                });  
            break;
        };//for loop END

    });//quoteButton func END
      
});

