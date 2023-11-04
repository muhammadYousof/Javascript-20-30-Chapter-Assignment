
//   question Number 1


var num = (3.45214)

document.write("Number :"+" "+ num,"<br>");

 num = Math.round(3.45214)

document.write("Rounf Off Value :",num,"<br>")

 num = Math.floor(3.45214)
 
document.write("Floor Value :",num,"<br>")

num = Math.ceil(3.45214)

document.write("Ceil Value :",num,"<br>")


document.write("<br>","<br>","<br>")

//   question Number 2


var num = (-2.673)

document.write("Number"+" "+ num,"<br>");

var num = Math.round(-2.673)

document.write("Rounf Off Value :",num,"<br>")

var num = Math.floor(-2.673)
 
document.write("Floor Value :",num,"<br>")

var num = Math.ceil(-2.673)

document.write("Ceil Value :",num,"<br>")


document.write("<br>","<br>","<br>")

//   question Number 3


var dicenum = Math.ceil(Math.random() * 6)

document.write("Randome Dice Value :" + " " + dicenum)



document.write("<br>","<br>","<br>")

// //   question Number 4


var randome =  Math.floor(Math.random() * 2) +1

if(randome === 1){
    document.write(randome + "<br>")
    document.write("Randome Coin Value : Tails")
}else{
    document.write(randome + "<br>")
    document.write("Randome Coin Value : Heads")
}

//   question Number 5

var randome =  Math.ceil(Math.random() * 100) +1

document.write("Random Number Between 1 and 100 :" + " " +randome)


document.write("<br>","<br>","<br>")

//   question Number 6

var Secratenum = 3;
var Guessnum   =  Number(prompt("Enter Your Lucky Number between 1 to 10"));

if( Guessnum === Secratenum){
    alert("Congratulate")
}
else{
    alert("Sorry Wrong Number Please try Again Leter!!!")
}


document.write("<br>","<br>","<br>")


//   question Number 7

var user = prompt("What is your weight?");

var result = "";

for (var i = 0; i < user.length; i++) {
    if (!isNaN(user[i]) || user[i] === ".") {
        result += user[i];
    }
}

if (result !== "") {
    document.write("The weight of user is " + result + " kilograms.");
} else {
    alert("Please Enter your valid weight.");
}



document.write("<br>","<br>","<br>")


//   question Number 8

var age = Number(prompt("Enter Your Age"))

var y = new Date()

var Curruntyear= y.getFullYear()

var birthyear = Curruntyear - age

document.write("Your Age Is :" + age)
document.write("<br>")
document.write("Your Birth Year Is :" + birthyear)


document.write("<br>","<br>","<br>")


//   question Number 9


var curruntdate = new Date()

var date = curruntdate.getDate()

if(date < 16){
        document.write("First Fifteen Days Of The Month")
}
else{
        document.write("last days of The Month")
}













