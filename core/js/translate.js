country_array = ["CZ", "SK"];
if(country_array.includes(geoplugin_countryCode())) {
  console.log(geoplugin_countryCode());
     czechtranslate()
     showToast()
}

country_array = ["DE"];
if(country_array.includes(geoplugin_countryCode())) {
  console.log(geoplugin_countryCode());
     translateToGermany()
     showToast()
}     

function czechtranslate() {
    showToast();
    var nav1 = document.getElementById("nav1")
    var nav2 = document.getElementById("nav2")
    var nav3 = document.getElementById("nav3")
    var experiences1 = document.getElementById("experiences1")
    var experiences2 = document.getElementById("experiences2")
    var hire = document.getElementById("hire")
    var ourteam = document.getElementById("ourteam animate__animated animate__bounceIn")
    var coloricon = document.getElementById("coloricon")
    var headerabout = document.getElementById("headerabout animate__animated animate__jackInTheBox")
    var aboutus1 = document.getElementById("aboutus1 animate__animated animate__bounceIn")
    var aboutus2 = document.getElementById("aboutus2 animate__animated animate__jackInTheBox")
    var whatwedo1 = document.getElementById("whatwedo1")
    var whatwedo2 = document.getElementById("whatwedo2")
    var footer = document.getElementById("footer")

    headerabout.innerHTML = "Organizace zaměřující se na vývoj stránek a aplikací v Discord.js"
    nav1.innerHTML = " O nás"
    nav2.innerHTML = "  tým"
    nav3.innerHTML = " Kontakt"






    let githubs = "GitHuby"
    let githubs2 = githubs.link("https://github.com/orgs/metnity/people");

    let discordsvr = "Discord serveru"
    let discordsvr2 = discordsvr.link("https://discord.gg/PDsZWKwz");

    let discord = "Discord"
    let discord2 = discord.link("https://discord.com/");

    let js = "JavaScriptu"
    let js2 = js.link("https://discord.js.org/#/");

    let python = "Pythonu"
    let python2 = python.link("https://discordpy.readthedocs.io/en/stable/");

    let ethxrnity = "ethxrnity"
    let ethxrnity2 = ethxrnity.link("https://ethxrnity.is-a.dev")

    let icon1 = ('<i class="fa-solid fa-address-card"></i>');
    aboutus1.innerHTML = icon1 + " O nás"

    let icon2 = ('<i class="fa-solid fa-code"></i>')
    whatwedo1.innerHTML = icon2 + " Na čem děláme"
    whatwedo2.innerHTML = "Naším hlavním cílem je vývoj webových stránek což zahrnuje front-end a back-end. Avšak, téměř se zaměřujeme na " + discord2 + " boty. Tyto boty dokážeme vytvářet jak v " + js2 + " tak i v " + python2 + "."
    
    let icon3 = ('<i class="fa-solid fa-certificate"></i>')
    experiences1.innerHTML = icon3 + " Naše zkušenosti"
    experiences2.innerHTML = "Jsme velmi zkušení v práci, kterou vám poskytujeme. Oba již pár let pracujeme s vývoji webů a vytvářením " + discord2 + " botů. Pro ukázku naší sólo práce můžete navštívit naše " + githubs2 + ", nebo se nás můžete rovnou zeptat na našem " + discordsvr2 + " pro více informací!"

    let icon4 = ('<i class="fa-solid fa-address-card"></i>')
    ourteam.innerHTML = icon4 + " Náš tým"

    let icon5 = ('<i class="fa-solid fa-lightbulb"></i>')
    hire.innerHTML = icon5 + " Pokud máš zájem se k nám připojit, kontaktuj nás na našem " + discordsvr2

    let icon6 = ('<i class="fa-solid fa-circle-info"></i>')
    coloricon.innerHTML = icon6 + " Chceš se s námi spojit? Zkus nás kontaktovat z níže uvedených služeb, nebo nám rovnou pošli email z našich stránek."

    let icon7 = ('<i class="fa-solid fa-heart"></i>')
    let icon8 = ('<i class="fa-solid fa-mug-saucer"></i>')
    footer.innerHTML = "© metnity 2022. Vyrebo s " + icon7 + " a spoustou " + icon8 + " v Česku od " + ethxrnity2;
    
    let github = "kluci"
    let github2 = github.link("https://github.com/metnity");
    aboutus2.innerHTML = "Jsme dva " + github2 + " z Česka (Praha a Liberec), kteří se snaží vést tuto firmu. Naším hlavním cílem je poskytovat a vytvářet nejlepší webové stránky co to jen jde pro naše zákazníky. Poskytujeme design vašeho webu a statických stránek až po jejich údržbu.";
}

function showToast() {
    var x = document.getElementById("snackbar");
  
    x.className = "show";
  
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 2500);
  } 
   