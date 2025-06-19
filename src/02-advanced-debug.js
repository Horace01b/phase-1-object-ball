console.log('Advanced debugging example running.')
debugger

// first, define the function.
function goodPractices() {
  let game = gameObject();
  for (let gameKey in game) {
    // are you ABSOLUTELY SURE what 'gameKey' is?
    // use the debugger to find out!
    debugger
    let teamObj = game[gameKey]
    for (let teamKey in teamObj) {
      // are you ABSOLUTELY SURE what 'teamKey' is?
      // use debugger to find out!
      debugger

      // what is 'data' at each loop through out this block?
      // when will the following line of code work and when will it break?
      let data = teamObj.player
      for (let key in data) {
        debugger
      }
    }
  }
}


goodPractices()

function numPointsScored(playerName) {
  const game = gameObject();

  for (let team in game) {
    const players = game[team].players;
    if (players[playerName]) {
      return players[playerName].points;
    }
  }

  return null; 
}

function shoeSize(playerName) {
  const game = gameObject();

  for (let team in game) {
    const players = game[team].players;
    if (players[playerName]) {
      return players[playerName].shoe;
    }
  }

  return null;
}

function teamColors(teamName) {
  const game = gameObject();

  for (let team in game) {
    if (game[team].teamName === teamName) {
      return game[team].colors;
    }
  }

  return null;
}

function teamNames() {
  const game = gameObject();
  return [game.home.teamName, game.away.teamName];
}

function playerNumbers(teamName) {
  const game = gameObject();

  for (let team in game) {
    if (game[team].teamName === teamName) {
      return Object.values(game[team].players).map(player => player.number);
    }
  }

  return [];
}

function playerStats(playerName) {
  const game = gameObject();

  for (let team in game) {
    const players = game[team].players;
    if (players[playerName]) {
      return players[playerName];
    }
  }

  return null;
}

function bigShoeRebounds() {
  const game = gameObject();

  let largestShoeSize = 0;
  let rebounds = 0;

  for (let teamKey in game) {
    const players = game[teamKey].players;

    for (let playerName in players) {
      const player = players[playerName];

      if (player.shoe > largestShoeSize) {
        largestShoeSize = player.shoe;
        rebounds = player.rebounds;
      }
    }
  }

  return rebounds;
}


