function superbowlWin(array){
    for (const objects of array){
        if (objects.result==="W"){
            return objects.year
        }
    }
}