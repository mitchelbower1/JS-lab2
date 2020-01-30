const randomDamage = _ => {
  return Math.floor(Math.random() * 11);
};

//console.log(randomDamage());

const chooseOption = (opt1, opt2) => {
  const randNum = Math.floor(Math.random() * 2);
  return randNum === 0 ? opt1 : opt2;
};

//console.log(chooseOption);

const attackPlayer = health => {
  return health - randomDamage();
};

const logHealth = (player, health) => {
  console.log(`${player} health: ${health}`);
};

const logDeath = (winner, loser) => {
  console.log(`${winner} defeated ${loser}`);
};

const isDead = health => {
  return health <= 0 ? true : false;
};

const fight = (player1, player2, player1Health, player2Health) => {
  while (true) {
    let attacker = chooseOption(player1, player2);

    if (attacker === player1) {
      player2Health = attackPlayer(player2Health);

      logHealth(player2, player2Health);
      isDead(player2Health);

      if (isDead(player2Health)) {
        logDeath(player1, player2);
        break;
      }
    } else {
      if (attacker === player2) {
        player1Health = attackPlayer(player1Health);
        logHealth(player1, player1Health);
        if (isDead(player1Health)) {
          logDeath(player2, player1);
          break;
        }
      }
    }
  }
};
fight("alex", "jet", 300, 300);
