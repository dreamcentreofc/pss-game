let player = "";
let round = 1;
let score = 0;

function startGame() {
    player = document.getElementById("playerName").value.trim();
    if (!player) return alert("Enter your BGMI name!");

    document.getElementById("loginBox").classList.add("hidden");
    document.getElementById("gameBox").classList.remove("hidden");

    document.getElementById("welcomeText").innerText = `Welcome, ${player}`;
}

function play(move) {
    const choices = ["rock", "paper", "scissor"];
    const bot = choices[Math.floor(Math.random() * 3)];

    let result = "";

    if (move === bot) result = "Draw!";
    else if (
        (move === "rock" && bot === "scissor") ||
        (move === "paper" && bot === "rock") ||
        (move === "scissor" && bot === "paper")
    ) {
        result = "You Win!";
        score++;
    } else {
        result = "You Lose!";
    }

    document.getElementById("result").innerText = `You: ${move} | Bot: ${bot} → ${result}`;

    if (round === 3) {
        endGame();
    } else {
        round++;
        document.getElementById("round").innerText = round;
        document.getElementById("score").innerText = score;
    }
}

function endGame() {
    document.getElementById("gameBox").classList.add("hidden");
    document.getElementById("finalBox").classList.remove("hidden");

    const final = score >= 2 ? "🏆 You Won the Match!" : "❌ You Lost the Match";

    document.getElementById("finalResult").innerText =
        `${player}, your score: ${score}/3 — ${final}`;
}

function restart() {
    location.reload();
}
