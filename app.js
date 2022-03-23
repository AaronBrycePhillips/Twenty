 var compwin = [];
 var humanwin = [];

do{
    
    alert(`Welcome to the game! Witchever player gets closer to 20 without going over wins. you will be playing agenst a computer. You will draw numbers up to ten and the computer will stop once it reaches 16. Computer goes first`)
    var ran = Math.floor(Math.random() * 10) + 1
    do{
    

        var compscore = ran + Math.floor(Math.random() * 10) + 1
    if(compscore <= 16){
        var compscore2 = compscore + Math.floor(Math.random() * 10) + 1
    }else{
        var compscore2 = compscore
    }
    
}while(compscore2 <= 16)
    
    alert(`it's current number is ${ran}
    it's total number is ${compscore} `)

    alert(`the computers final score ${compscore2}`)
    
    
    
    
        var ran2 = Math.floor(Math.random() * 10) + 1
        alert(` your current number is ${ran2}`)

        var humanscore1 = ran2 + Math.floor(Math.random() * 10) + 1

        var humanscore2 = humanscore1
        alert(` your current number is ${humanscore2}`)
        do{
            
        if(humanscore2 <= 20){
            var question = prompt("if you want to pull another then type 'y' in not then type 'n'");
            if (question = "y"){
                var humanscore = humanscore2 + Math.floor(Math.random() * 10) + 1
            }

        }
        
        alert(` your current number is ${humanscore}`)
    }while (question == "y")

    if (compscore2 >= 20){
        alert(`The computer went over 20, you win!`)
        var win = "y"
    }
    else if (humanscore >= 20){
        alert(`You went over 20, you lose!`)
        var lose = "y"
    }
    else if (compscore2 > humanscore){
        alert (`the computer got ${compscore2} and you got ${humanscore}. You lose!`)
        var lose = "y"
    }

    else if (humanscore > compscore2){
        alert (`the computer got ${compscore2} and you got ${humanscore}. You Win!`)
        var win = "y"
    }

    else if ((compscore2 >= 20)&&(humanscore >= 20)){
        alert ("Tie, you both whent over 20, no point added")
    }

    else {
        alert ("Tie, no point added")
    }

    if (win == "y"){
            humanwin.push("a")
            alert(`Computer score:${compwin.length}            Your score: ${humanwin.length}`)
    }
    else if (lose == "y"){
        compwin.push("a")
        alert(`Computer score:${compwin.length}            Your score: ${humanwin.length}`)
    }

    var repeat = prompt("Do you want to continue? YES(y) NO(n)")

    }while (repeat == "y")