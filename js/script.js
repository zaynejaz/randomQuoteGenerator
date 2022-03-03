$(document).ready(function () {
    // predefined quotes list
    var quoteSource = [
        {
            quote: "Your imagination is your preview of life's coming attractions",
            name: "Albert Einstein"
        },
        {
            quote: "Can you imagine what I would do if I do all I can",
            name: "Sun Tzu"
        },
        {
            quote: "A person who never made a mistake never tried anything new",
            name: "Albert Einstein"
        },
        {
            quote: "Ask yourself what you truly desire, and be honest,<br>otherwise there's no point",
            name: "Anonymous"
        },
        {
            quote: "The greatest mysteries come in threes.<br>Birth, Life , Death.<br>Past, Present, Future",
            name: "Michael Burnham",
        },
        {
            quote: "The best revenge is massive success",
            name: "Frank Sinatra"
        },
        {
            quote: "Wanting things makes us happier than having them",
            name: "Lindsay Abrams"
        },
        {
            quote: "We document life so much, <br>we forget to cherish the moments we have",
            name: "Anonymous"
        },
        {
            quote: "Prosperity is about having peace in your life",
            name: "Anonymous"
        },
        {
            quote: "I don't see my glass half empty, or half full.<br>I'm just thankful to have a glass",
            name: "Nick Scott"
        },
        {
            quote: "What's the one thing you gain from losing everything?<br>Perspective",
            name: "Anonymous"
        },
        {
            quote: "Opportunities multiply as they are seized",
            name: "Sun Tzu"
        },
        {
            quote: "Know thy self, know thy enemy.<br>A thousand battles, a thousand victories.",
            name: "Sun Tzu"
        },
        {
            quote: "All warfare is based on deception.",
            name: "Sun Tzu"
        },
        {
            quote: "An action comitted in anger <br>is an action doomed to failure",
            name: "Gengis Khan"
        },
        {
            quote: "If you're afraid - don't do it, - <br>if you're doing it - don't be afraid!”",
            name: "Gengis Khan"
        },
        {
            quote: "I am the punishment of God",
            name: "Gengis Khan"
        },
        {
            quote: "A person's a person, <br>no matter how small",
            name: "Dr. Seuss"
        },
        {
            quote: "Don't cry because it's over. <br>Smile because it happened",
            name: "Dr. Seuss"
        },
        {
            quote: "Today you are you! That is truer than true! <br>There is no one alive who is you-er than you!",
            name: "Dr. Seuss"
        },
        {
            quote: "Thought I wouldn't when I would, would when I wouldn't, <br>I still did it for the reason everybody said I couldn't",
            name: "Seth B. Binzer"
        },
        {
            quote: "Greed, <br>for the lack of a better word, <br>is good",
            name: "Gordon Geko"
        },
        {
            quote: "Keep your friends close, <br>but your enemies closer",
            name: "Sun Tzu"
        },
        {
            quote: "Logic is the beginning of wisdom, <br>not the end",
            name: "Spock"
        },
        {
            quote: "Things are only impossible <br>until they're not",
            name: "Jean-Luc Picard"
        },
        {
            quote: "Change is the essential process of all existence",
            name: "Spock"
        },
        {
            quote: "It is possible to commit no errors and still lose. <br>That is not a weakness. <br>That is life",
            name: "Jean-Luc Picard"
        },
        {
            quote: "Without freedom of choice <br>there is no creativity",
            name: "James T. Kirk"
        },
        {
            quote: "You can use logic to justify almost anything.<br>That's its power.<br>And its flaw",
            name: "Cathryn Janeway"
        },
        {
            quote: "In my experience<br>there is no such thing as luck",
            name: "Obi-Wan Kenobi"
        },
        {
            quote: "Your focus determines your reality",
            name: "Qui-Gon Jinn"
        },
        {
            quote: "Do. Or do not.<br>There is no try",
            name: "Yoda"
        },
        {
            quote: "The purpose of our lives <br>is to be happy",
            name: "Dalai Lama"
        },
        {
            quote: "Get busy living <br>or get busy dying",
            name: "Steven King"
        },
        {
            quote: "You only live once, <br>but if you do it right, <br>once is enough",
            name: "Mae West"
        },
        {
            quote: "Not how long, <br>but how well you have lived <br>is the main thing",
            name: "Seneca"
        },
        {
            quote: "The unexamined life <br>is not worth living",
            name: "Scoretes"
        },
        {
            quote: "Life is not a problem to be solved, <br>but a reality to be experienced",
            name: "Søren Kierkegaard"
        },
        {
            quote: "You never really learn much <br>from hearing yourself speak",
            name: "George Clooney"
        },
        {
            quote: "Life is really simple, <br>but men insist on making it complicated",
            name: "Confucious"
        },
        {
            quote: "Life is like a coin. <br>You can spend it any way you wish, <br>but you only spend it once",
            name: "Lilian Dickson"
        },
        {
            quote: "In three words <br>I can sum up everything I’ve learned about life: <br>It goes on.",
            name: "Robert Frost"
        },
        {
            quote: "The healthiest response to life <br>is joy",
            name: "Deepak Chopra"
        },
        {
            quote: "Health is the greatest gift, <br>contentment the greatest wealth, <br>faithfulness the best relationship",
            name: "Buddha"
        },
        {
            quote: "Life would be tragic <br>if it weren’t funny",
            name: "Steven Hawking"
        },
        {
            quote: "Life is what we make it, <br>always has been, <br>always will be",
            name: "Grandma Moses"
        },
        {
            quote: "Life’s tragedy is that <br>we get old too soon <br>and wise too late",
            name: "Benjamin Franklin"
        },
        {
            quote: "Life is about making an impact, <br>not making an income",
            name: "Kevin Kruse"
        },
        {
            quote: "The two most important days in your life are <br>the day you are born and <br>the day you find out why",
            name: "Mark Twain"
        },
        {
            quote: "I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed",
            name: "Michael Jordan"
        },
        {
            quote: "Too many of us are not living our dreams because we are living our fears",
            name: "Les Brown"
        },
        {
            quote: "I believe every human has a finite number of heartbeats. I don’t intend to waste any of mine",
            name: "Neil Armstrong"
        },
        {
            quote: "Live as if you were to die tomorrow. <br>Learn as if you were to live forever",
            name: "Mahatma Gandhi"
        },
        {
            quote: "When you cease to dream <br>you cease to live",
            name: "Malcom Forbes"
        },
        {
            quote: "If you can do what you do best and be happy, you’re further along in life than most people",
            name: "Leonardo DiCaprio"
        },
        {
            quote: "It is our choices that show what we truly are, far more than our abilities",
            name: "J K Rowling"
        },
        {
            quote: "The best way to predict your future <br>is to create it",
            name: "Abraham Lincoln"
        },
        {
            quote: "You must expect great things of yourself before you can do them",
            name: "Michael Jordan"
        },
        {
            quote: "There are no mistakes, <br>only opportunities",
            name: "Tina Fey"
        },
        {
            quote: "It takes 20 years to build a reputation and five minutes to ruin it. If you think about that, you’ll do things differently",
            name: "Warren Buffet"
        },
        {
            quote: "Sometimes you can’t see yourself clearly until you see yourself through the eyes of others",
            name: "Ellen DeGeneres"
        },
        {
            quote: "Do not dwell in the past, <br>do not dream of the future, <br>concentrate the mind on the present moment",
            name: "Buddha"
        },
        {
            quote: "Life is a dream for the wise, <br>a game for the fool, <br>a comedy for the rich, <br>a tragedy for the poor",
            name: "Sholom Aleichem"
        },
        {
            quote: "If you love life, <br>don’t waste time, <br>for time is what life is made up of",
            name: "Bruce lee"
        },
        {
            quote: "When one door closes, <br>another opens; <br>but we often look so long and so regretfully upon the closed door that we do not see the one that has opened for us",
            name: "Alexander Graham Bell"
        },
        {
            quote: "Never take life seriously. <br>Nobody gets out alive anyway",
            name: "Anonymous"
        },
        {
            quote: "Be happy for this moment. <br>This moment is your life",
            name: "Omar Khayyam"
        },
        {
            quote: "When it is obvious that goals can’t be reached, don’t adjust the goals, but adjust the action steps",
            name: "Confucius"
        },
        {
            quote: "There may be people who have more talent than you, but there’s no excuse for anyone to work harder than you do",
            name: "Derek Jeter"
        },
        {
            quote: "Don’t be afraid to fail. <br>It’s not the end of the world, and in many ways, it’s the first step toward learning something and getting better at it",
            name: "Jon Hamm"
        },
        {
            quote: "I don’t believe in happy endings, but I do believe in happy travels, because ultimately, you die at a very young age, or you live long enough to watch your friends die. It’s a mean thing, life",
            name: "George Clooney"
        },
        {
            quote: "I guess it comes down to a simple choice, really. Get busy living or get busy dying",
            name: "Andy Dufresne"
        },
        {
            quote: "Happy is the man <br>who can make a living by his hobby",
            name: "George Bernard Shaw"
        },
        {
            quote: "Surround yourself with people <br>who make you a better person",
            name: "Karl Marx"
        },
        {
            quote: "You will meet two kinds of people in life: ones who build you up and ones who tear you down. But in the end, you’ll thank them both",
            name: "Anonymous"
        },
        {
            quote: "It is impossible to live without failing at something, unless you live so cautiously, that you might as well not have lived at all – in which case you fail by default",
            name: "Anonymous"
        },
        {
            quote: "Life doesn’t require that we be the best, only that we try our best",
            name: "H. Jackson Brown Jr."
        },
        {
            quote: "Today, you have <br>100% of your life left",
            name: "Tom Landry"
        },
        {
            quote: "Nobody who ever <br>gave his best regretted it",
            name: "George Halas"
        },
        {
            quote: "Make each day <br>your masterpiece",
            name: "John Wooden"
        },
        {
            quote: "You can’t put a limit on anything. <br>The more you dream, <br>the farther you get",
            name: "Michael Phelps"
        },
        {
            quote: "Go fuck up on purpose <br>and liberate yourself",
            name: "Gary Vaynerchuck"
        },
        {
            quote: "A wise leader allows his people their ways",
            name: "Kublai Khan"
        },
        {
            quote: "it's better to be hated for who you are <br>than loved for who you are not",
            name: "Andre Gide"
        },
        {
            quote: "Untrue by an inch,<br> Untrue by a mile",
            name: "Bayan of the Baarin"
        },
        {
            quote: "A man wishing to be unhappy <br>finds manny ways to prove his cause",
            name: "Bayan of the Baarin"
        },
        {
            quote: "The inability to sleep <br>is the curse of the aged <br>and the guilty",
            name: "Bayan of the Baarin"
        },
        {
            quote: "If the Gods are watching, <br>we might as well put on a good show",
            name: "Bayan of the Baarin"
        },
        {
            quote: "choose wisdom over wrath",
            name: "Carl Reindolf Agyeman Mensah"
        },
        {
            quote: "Remember, hesitation will draw danger to you like fire.But trust the path you choose and it will protect you.",
            name: "Geralt of Rivia"
        },
        {
            quote: "War is pointless.<br>It never ends.",
            name: "Bayan of the Baarin"
        },
        {
            quote: "The man you must truly pay can never collect his debt.",
            name: "Anonymous"
        },
        {
            quote: "I hear and I forget.<br>I see and I remember.<br>I do and I understand.",
            name: "Anonymous"
        },
        {
            quote: "No man who leads is pure of heart.",
            name: "Anonymous"
        },
        {
            quote: "The dead are never truly dead. But everything that once lived, lives on forever in the eternity of time.",
            name: "Anonymous"
        },
        {
            quote: "That which does not kill us makes us stronger.",
            name: "Friedrich Nietzsche"
        },
        {
            quote: "He who fights with monsters should look to it that he himself does not become a monster…  When you gaze into the abyss the abyss also gazes into you.",
            name: "Friedrich Nietzsche"
        },
        {
            quote: "All the paths we take in our lives we, every choice we make is guided by our deepest desires.",
            name: "Tannahus"
        },
        {
            quote: "The journey of a thousand miles begins with one step.",
            name: "Lao Tzu"
        },
        {
            quote: "You only live once, but if you do it right, once is enough.",
            name: "Mae West"
        },
        {
            quote: "Whether you think you can or you think you can’t, you’re right.",
            name: "Henry Ford"
        },
        {
            quote: "You miss 100 percent of the shots you never take.",
            name: "Wayne Gretzky"
        },
        {
            quote: "If you’re going through hell, keep going.",
            name: "Winston Churchill"
        },
        {
            quote: "Strive not to be a success, but rather to be of value.",
            name: "Albert Einstein"
        },
        {
            quote: "I came,<br>I saw,<br>I conquered.",
            name: "Julius Caesar"
        },
        {
            quote: "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do.",
            name: "Mark Twain"
        },
        {
            quote: "Great minds discuss ideas;<br>average minds discuss events;<br>small minds discuss people.",
            name: "Eleanor Roosevelt"
        },
        {
            quote: "The opposite of love is not hate; it’s indifference.",
            name: "Elie Wiesel"
        },
        {
            quote: "Dream big and dare to fail.",
            name: "Norman Vaughan"
        },
        {
            quote: "Every man is guilty of all the good he did not do.",
            name: "Voltaire"
        },
        {
            quote: "A successful man is one who can lay a firm foundation with the bricks others have thrown at him.",
            name: "David Brinkley"
        },
        {
            quote: "Have no fear of perfection,<br>you’ll never reach it.",
            name: "Salvador Dalí"
        },
        {
            quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
            name: "Nelson Mandela"
        },
        {
            quote: "Sing like no one’s listening, love like you’ve never been hurt, dance like nobody’s watching, and live like it’s heaven on earth.",
            name: "Mark Twain"
        },
        {
            quote: "If you want to be happy, be.",
            name: "Leo Tolstoy"
        },
        {
            quote: "The only impossible journey is the one you never begin.",
            name: "Tony Robbins"
        },
        {
            quote: "The only person you are destined to become is the person you decide to be.",
            name: "Ralph Waldo Emerson"
        },
        {
            quote: "May you live all the days of your life.",
            name: "Jonathan Swift"
        },
        {
            quote: "Those who cannot remember the past are condemned to repeat it.",
            name: "George Santayana"
        },
        {
            quote: "Life would be tragic if it weren’t funny.",
            name: "Stephen Hawking"
        },
        {
            quote: "Simplicity is the ultimate sophistication.",
            name: "Leonardo da Vinci"
        },
        {
            quote: "The power of imagination makes us infinite.",
            name: "John Muir"
        },
        {
            quote: "Everything you’ve ever wanted is on the other side of fear.",
            name: "George Addair"
        },
        {
            quote: "Shoot for the moon.<br>Even if you miss, you’ll land among the stars.",
            name: "Les Brown"
        },
        {
            quote: "Genius is eternal patience.",
            name: "Michelangelo"
        },
        {
            quote: "If you tell the truth, you don’t have to remember anything.",
            name: "Mark Twain"
        },
        {
            quote: "Knowing yourself is the beginning of all wisdom.",
            name: "Aristotle"
        },
        {
            quote: "We are what we repeatedly do; excellence, then, is not an act but a habit.",
            name: "Aristotle"
        },
        {
            quote: "The question isn’t who is going to let me; it’s who is going to stop me.",
            name: "Ayn Rand"
        },
        {
            quote: "What you do speaks so loudly that I cannot hear what you say.",
            name: "Ralph Waldo Emerson"
        },
        {
            quote: "Those who make you believe absurdities can make you commit atrocities.",
            name: "Voltaire"
        },
        {
            quote: "You can discover more about a person in an hour of play than in a year of conversation.",
            name: "Plato"
        },
        {
            quote: "Once you’ve accepted your flaws, no one can use them against you.",
            name: "George R. R. Martin"
        },
        {
            quote: "When we strive to become better than we are, everything around us becomes better too.",
            name: "Paolo Coelho"
        },
        {
            quote: "Challenges are what make life interesting and overcoming them is what makes life meaningful.",
            name: "Joshua J. Marine"
        },
        {
            quote: "The secret of getting ahead is getting started.",
            name: "Mark Twain"
        },
        {
            quote: "Always forgive your enemies; nothing annoys them so much.",
            name: "Oscar Wilde"
        },
        {
            quote: "Do not go where the path may lead; go instead where there is no path and leave a trail.",
            name: "Ralph Waldo Emerson"
        },
        {
            quote: "Always remember that you are absolutely unique. Just like everyone else.",
            name: "Margaret Meade"
        },
        {
            quote: "A mind is like a parachute. It doesn’t work if it isn’t open.",
            name: "Frank Zappa"
        },
        {
            quote: "A friend is someone who gives you total freedom to be yourself.",
            name: "Jim Morrison"
        },
        {
            quote: "You’ll never find a rainbow if you’re looking down.",
            name: "Charlie Chaplin"
        },
        {
            quote: "You know you’re in love when you can’t fall asleep because reality is finally better than your dreams.",
            name: "Dr. Seuss"
        },
        {
            quote: "If you don’t stand for something you will fall for anything.",
            name: "Gordon A. Eadie"
        },
        {
            quote: "We don’t stop playing because we grow old; we grow old because we stop playing.",
            name: "George Bernard Shaw"
        },
        {
            quote: "Holding onto anger is like drinking poison and expecting the other person to die.",
            name: "Buddha"
        },
        {
            quote: "The further a society drifts from the truth, the more it will hate those that speak it.",
            name: "George Orwell"
        },
        {
            quote: "Life itself is the most wonderful fairy tale.",
            name: "Hans Christian Andersen"
        },
        {
            quote: "You are never too old to set another goal or to dream a new dream.",
            name: "C.S. Lewis"
        },
        {
            quote: "Try to be a rainbow in someone else’s cloud.",
            name: "Maya Angelou"
        },
        {
            quote: "In the middle of difficulty lies opportunity.",
            name: "Albert Einstein"
        },
        {
            quote: "Be yourself; everyone else is already taken.",
            name: "Oscar Wilde"
        },
        {
            quote: "Time you enjoy wasting is not wasted time.",
            name: "Marthe Troly-Curtin"
        },
        {
            quote: "Actions speak louder than words.",
            name: "Abraham Lincoln"
        },
        {
            quote: "The time is always right to do what is right.",
            name: "Martin Luther King, Jr."
        },
        {
            quote: "There is nothing impossible to him who will try.",
            name: "Alexander the Great"
        },
        {
            quote: "This above all: to thine own self be true.",
            name: "William Shakespeare"
        },
        {
            quote: "All that we are is the result of what we have thought.",
            name: "Buddha"
        },
        {
            quote: "Arguing with a fool proves there are two.",
            name: "Doris Smith"
        },
        {
            quote: "Necessity is the mother of invention.",
            name: "Plato"
        },
        {
            quote: "An ounce of action is worth a ton of theory.",
            name: "Ralph Waldo Emerson"
        },
        {
            quote: "If you cannot do great things, do small things in a great way.",
            name: "Napoleon Hill"
        },
        {
            quote: "If opportunity doesn’t knock, build a door.",
            name: "Milton Berle"
        },
        {
            quote: "Wise men speak because they have something to say; fools because they have to say something.",
            name: "Plato"
        },
        {
            quote: "Whenever you find yourself on the side of the majority, it is time to pause and reflect.",
            name: "Mark Twain"
        },
        {
            quote: "You must be the change you wish to see in the world.",
            name: "Mahatma Gandhi"
        },
        {
            quote: "The way to get started is to quit talking and begin doing",
            name: "Walt Disney"
        },
        {
            quote: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
            name: "James Cameron"
        },
        {
            quote: "Money and success don’t change people; they merely amplify what is already there.”",
            name: "Will Smith"
        },
        {
            quote: "The early bird gets the worm, but the second mouse gets the cheese.",
            name: "Anonymous",
        },
        {
            quote: "Nothing is impossible to a willing heart.",
            name: "Anonymous",
        },
        {
            quote: "Don’t worry about money. The best things in life are free.",
            name: "Anonymous",
        },
        {
            quote: "Don’t pursue happiness<br>create it.",
            name: "Anonymous",
        },
        {
            quote: "Courage is not the absence of fear; it is the conquest of it.",
            name: "Anonymous",
        },
        {
            quote: "A ship in harbor is safe, but that’s not why ships are built.",
            name: "Anonymous",
        },
        {
            quote: "If you don't like the road you're walking, start paving another one.",
            name: "Dolly Parton",
        },
        {
            quote: "Your time is limited, so don't waste it living someone else's life.",
            name: "Steve Jobs",
        },
        {
            quote: "When you get tired, learn to rest, not to quit.",
            name: "Banksy",
        },
        {
            quote: "All we have is now.",
            name: "Anonymous",
        },
        {
            quote: "When you want to live a happy life, tie it to a goal, not to people or objects.",
            name: "Albert Einstein",
        },
        {
            quote: "Whoever is happy will make others happy too.",
            name: "Anne Frank",
        },
        {
            quote: "Let's get one thing clear!<br>I don't give a fuck about you guys...<br>But I do care!",
            name: "Zayn Ejaz"
        },

    ];


    $('#quoteButton').click(function (evt) {
        //define containers of targeted info
        var quote = $('#quoteContainer p').text();
        var quoteGenius = $('#quoteGenius').text();
        //prevent browser default action
        evt.preventDefault();
        //get new random number to attach to quote + set limit
        var sourceLength = quoteSource.length;
        var randomNumber = Math.floor(Math.random() * sourceLength);
        //set new quote
        for (i = 0; i <= sourceLength; i += 1) {
            var newQuoteText = quoteSource[randomNumber].quote;
            var newQuoteGenius = quoteSource[randomNumber].name;
            //console.log(newQuoteText,newQuoteGenius);
            var timeAnimation = 500;
            var quoteContainer = $('#quoteContainer');
            //fade out animation with callback
            quoteContainer.fadeOut(timeAnimation,
                function () {
                    quoteContainer.html('');
                    quoteContainer.append('<p>' + newQuoteText + '</p>' + '<p id="quoteGenius">' + '								' + newQuoteGenius + '</p>');
                    //fadein animation
                    quoteContainer.fadeIn(timeAnimation);
                });
            break;
        };//for loop END

    });//quoteButton func END

});

