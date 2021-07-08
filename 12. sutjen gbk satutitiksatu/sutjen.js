const game = ()=>{
    let pScore = 0;
    let cScore = 0;

    const startGame = () =>{
        const playBtn = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");

        playBtn.addEventListener("click", ()=>{
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    };

    //play match

    const playMatch =()=>{
        const options = document.querySelectorAll(".pilihan button");
         const playerHand = document.querySelector(".tangan-pemain");
        const computerHand = document.querySelector(".tangan-komputer");
        //pilihan komputer acak
        const computerOptions = ["JEMPOL","TELUNJUK","KELINGKING"];


        options.forEach( options=> {
            options.addEventListener("click",function () {
                const computerNumber = Math.floor(Math.random()*3);
                const computerChoice = computerOptions[computerNumber];
                const winner = document.querySelector('.winner');

                compareHands(this.textContent,computerChoice);
                
                playerHand.src = `gbk style/${this.textContent}.png`;
                computerHand.src = `gbk style/${computerChoice}.png`;    
            });       
        });

        const updateScore = () =>{
            const playerScore = document.querySelector('.score-pemain p');
            const computerScore = document.querySelector('.score-komputer p');
            playerScore.textContent = pScore;
            computerScore.textContent = cScore;
            
        }
        
        const compareHands = (playerChoice, computerChoice) =>{
            const winner = document.querySelector(".winner");
            if (playerChoice === computerChoice) {
                winner.textContent = "ini seri";
                return;
            }
            //
            if (playerChoice === "JEMPOL") {
                if (computerChoice === "TELUNJUK") {
                    winner.textContent = "Anda menang";
                    pScore++;
                    updateScore();
                    return;
                }else {
                    winner.textContent = "Anda kalah";
                    cScore++;
                    updateScore();
                    return;
                }
            }
            //
            if (playerChoice === "TELUNJUK") {
                if (computerChoice === "KELINGKING") {
                    winner.textContent = "Anda menang";
                    pScore++;
                    updateScore();
                    return;
                } else {
                    winner.textContent = "Anda kalah";
                    cScore++;
                    updateScore();
                    return;
                }
            };
            //
            if (playerChoice === "KELINGKING") {
                if (computerChoice === "JEMPOL") {
                    winner.textContent = "Anda menang";
                    pScore++;
                    updateScore();
                    return;
                } else{
                    winner.textContent ="Anda Kalah";
                    cScore++;
                    updateScore();
                    return;
                };  
            };
        };
    };
    
    
    
    startGame();
    playMatch();
};

game();