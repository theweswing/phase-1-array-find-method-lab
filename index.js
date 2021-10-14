const record = [
    {year: "2018", result: "L"},
    {year: "2017", result: "W"},
    {year: "2016", result: "N/A"}
    //...
  ]

function superbowlWin(array){
    const winningYear = array.find(array => array.result==="W")
    if (winningYear){
        return winningYear.year
    } else {
        return undefined
    }
}



























function superbowlWinForOf(array){
    for (const objects of array){
        if (objects.result==="W"){
            return objects.year
        }
    }
}


const nbaTeams=[
    {city: "New York",
    team: "Knicks",},
    {city: "Los Angeles",
    team: "Lakers,"},
    {city: "Memphis",
    team: "Grizzlies",}
]

