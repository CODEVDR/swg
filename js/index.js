let round = 1;
let comp = 0;
let user = 0;
const chk = (val) => {
  document.getElementById("rounds").innerHTML = "Round - " + round;
  if (val != null) {
    let usr = document.getElementById("userSelected");
    // Condition Check
    if (val == 0) {
      usr.innerHTML = "User Selected Snake";
      var audio = new Audio("audio/snake_audio.wav");
      audio.play();
    }
    if (val == 1) {
      usr.innerHTML = "User Selected Water";
      var audio = new Audio("audio/water_audio.wav");
      audio.play();
    }
    if (val == 2) {
      usr.innerHTML = "User Selected Gun";
      var audio = new Audio("audio/gun_audio.wav");
      audio.play();
    }
    // Disabling User Choices
    document.getElementById("snake").disabled = true;
    document.getElementById("water").disabled = true;
    document.getElementById("gun").disabled = true;
    // Checking Condition and Giving Animation
    setTimeout(() => {
      document.getElementById("computerSelected").innerHTML =
        "Computer Selecting..";
    }, 500);
    let count = 0;
    let arr = [
      document.getElementById("snake"),
      document.getElementById("water"),
      document.getElementById("gun"),
    ];
    let computerChoice = Math.floor(Math.random() * 3);
    console.log(computerChoice);
    setTimeout(() => {
      document.getElementById("computerSelected").innerHTML =
        "Computer Selected.. Waiting For Result..";
    }, 1000);
    // Checking Cases
    setTimeout(() => {
      let res = document.getElementById("result");
      if (val === computerChoice) {
        res.innerHTML = "Draw";
        var audio = new Audio("audio/draw.wav");
        audio.play();
      } else if (computerChoice === 0 && val === 1) {
        res.innerHTML = "Computer Won";
        var audio = new Audio("audio/comp_won.wav");
        audio.play();
        comp += 1;
      } else if (computerChoice === 1 && val === 2) {
        res.innerHTML = "Computer Won";
        var audio = new Audio("audio/comp_won.wav");
        audio.play();
        comp += 1;
      } else if (computerChoice === 2 && val === 0) {
        res.innerHTML = "Computer Won";
        var audio = new Audio("audio/comp_won.wav");
        audio.play();
        comp += 1;
      } else {
        res.innerHTML = "User Won";
        var audio = new Audio("audio/user_won.wav");
        audio.play();
        user += 1;
      }
    }, 3000);
  }
  setTimeout(() => {
    document.getElementById("snake").disabled = false;
    document.getElementById("water").disabled = false;
    document.getElementById("gun").disabled = false;
    document.getElementById("userSelected").innerHTML = "";
    document.getElementById("computerSelected").innerHTML = "";
    document.getElementById("result").innerHTML = "";
    round += 1;
  }, 5000);
  if (round === 10) {
    if (comp === user) {
      alert("Draw");
    } else if (comp > user) {
      alert("Computer Won");
    } else {
      alert("User Won");
    }
    setTimeout(() => {
      document.getElementById("rounds").innerHTML = "CLICK ON IMAGES TO PLAY";
      location.reload;
    }, 2000);
  }
};
