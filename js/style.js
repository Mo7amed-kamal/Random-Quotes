


var output = document.getElementById("outPut")
var quotes = [

    `“Insanity is doing the same thing, over and over again, but expecting different results.”<br/>
    --Narcotics Anonymous `,
    "“It is better to be hated for what you are than to be loved for what you are not.”<br/> ---Andre Gide",
    "“A friend is someone who knows all about you and still loves you.”<br/> --Elbert Hubbard",
    "“To live is the rarest thing in the world. Most people exist, that is all.”<br/> --Oscar Wilde",
    "“Live as if you were to die tomorrow. Learn as if you were to live forever.”<br/>--Mahatma Gandhi",
    "“Be the change that you wish to see in the world.”<br/> --Mahatma Gandhi",
    "“So many books, so little time.”<br/> --Frank Zappa",
    "“Sometimes the questions are complicated and the answers are simple.” <br/>--Dr. Seuss"

]


function randomQuotes() {
    var random = quotes[Math.floor(Math.random() * quotes.length)]

    output.innerHTML = random
}

