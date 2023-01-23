function generate() {
    var quotes = ["Sex is always about emotions. Good sex is about free emotions; bad sex is about blocked emotions.",
    "I was not born to be free---I was born to adore and obey.",
    "Life calls the tune, we dance.",
    "Him that I love, I wish to be free -- even from me."]



    var autors = Object.keys(quotes);

    console.log(author);
    var author = autors[Math.floor(Math.random() * autors.length)];

    var quote = quotes[author];

    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;
}