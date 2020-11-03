var pickColour = function(colour){
    let backgroundColour =""

    switch(colour){
        case "darkblue":
            backgroundColour = "bg-primero-darkBlue";
            break;
        case "lightblue":
            backgroundColour = "bg-primero-lightBlue";
            break;
        case "orange":
            backgroundColour = "bg-primero-orange";
            break;
        default:
            backgroundColour = "bg-primero-white";
            break;
    }

    return backgroundColour;
}

exports.setBGColourClass = pickColour;