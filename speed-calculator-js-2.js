// function ValidateSpeedCalculatorForm(speed, distance, time)
// {
//     _cmnRemoveAllErrorMessage();
//     validSpeed = true;

//     var validDistance = true, validTime = true;
 
//     if(distance <= 0)
//     {
//         _cmnShowErrorMessageBottomOfTheInputFiled("Distance", "Enter correct value.");
//         validDistance = false;
//     }
    
//     if(time <= 0)
//     {
//         _cmnShowErrorMessageBottomOfTheInputFiled("Time", "Enter correct value.");
//         validTime = false;
//     }   

   
    
//     if(speed <= 0)
//     {
//         _cmnShowErrorMessageBottomOfTheInputFiled("Speed", "Enter correct value.");
//         validSpeed = false;
//     } 
    
//     if(speed == "" && distance =="" && time == "")
//     {
//         _cmnShowErrorMessageBottomOfTheInputFiled("Speed", "Enter correct value.");
//         _cmnShowErrorMessageBottomOfTheInputFiled("Time", "Enter correct value.");
//         _cmnShowErrorMessageBottomOfTheInputFiled("Distance", "Enter correct value.");
//     }

//     if(validDistance == true && validSpeed == true || 
//             validDistance == true && validTime == true || 
//             validTime == true && validSpeed == true)
//     {
//         _cmnRemoveAllErrorMessage();
//         return true;
//     }

//     return false;
// }

// function ResetSpeedCalculator()
// {
//     if(confirm("Are you sure want to reset?")){
//         document.getElementById("Distance").value = "";
//        document.getElementById("Time").value = "";
//        document.getElementById("Speed").value = "";
       
//        _cmnRemoveAllErrorMessage();

//        _cmnHideElement("OutputResult");
//        _cmnShowElement("OutputInfo", "flex");
//    }
// }

// function CalculateSpeed_2()
// {
//     var distanceInputFiled = document.getElementById("Distance");
//     var speedInputFiled = document.getElementById("Speed");
//     var timeInputFiled = document.getElementById("Time");

//     var showTimeDiv = document.getElementById("ShowTime");
//     var showSpeedDiv = document.getElementById("ShowSpeed");
//     var showDistanceDiv = document.getElementById("ShowDistance");

//     var showDistance_hDiv = document.getElementById("ShowDistance_h");
//     var showDistance_12hDiv = document.getElementById("ShowDistance_12h");

//     var speed = Number(speedInputFiled.value);
//     var time = Number(timeInputFiled.value);
//     var distance = Number(distanceInputFiled.value);

//         if(distance == "" && time == "" && speed != "")
//         {
//             calculatedDistance = speed * 60;
//             calculatedDistance_h = (speed * 3600) / 1000;
//             calculatedDistance_12h = (speed * 43200) / 1000000;

//             distanceInputFiled.value = calculatedDistance;
//             distanceInputFiled.focus();
//             showDistanceDiv.innerHTML = calculatedDistance + ` Ko`;
//             showDistance_hDiv.innerHTML = calculatedDistance_h + ` Mo`;
//             showDistance_12hDiv.innerHTML = calculatedDistance_12h + ` Go`;
//         }
//         else if(time == "" && speed != "" && distance != "")
//         {
//             calculatedTime = distance / speed;
//             calculatedTime = calculatedTime.toFixed(2);

//             timeInputFiled.value = calculatedTime;
//             timeInputFiled.focus();
//             showTimeDiv.innerHTML = `Temps = `+ calculatedTime + `s`;
//         }
//         else if(speed == "" && time != "" && distance != "")
//         {
//             calculatedSpeed = distance / time;
//             calculatedSpeed = calculatedSpeed.toFixed(2);

//             speedInputFiled.value = calculatedSpeed;
//             speedInputFiled.focus();
//             showSpeedDiv.innerHTML = `Perte=`+ calculatedSpeed + `Ko/s`;
//         }
//         else if (time != "" && speed != "" && distance == "")
//         {
//             calculatedDistance = speed * time ; 
//             distanceInputFiled.value = calculatedDistance;
//             distanceInputFiled.focus();
//             showDistanceDiv.innerHTML = calculatedDistance + ` Ko`;

//         }
//         //show result div
//         _cmnHideElement("OutputInfo");
//         _cmnShowElement("OutputResult", "flex");
// }

function ValidateSpeedCalculatorForm(distance,time,speed)
{
    _cmnRemoveAllErrorMessage();
    var validDistance = true, validTime = true, validSpeed = true;
 
    if(distance == "" || distance <= 0)
    {
        _cmnShowErrorMessageBottomOfTheInputFiled("Distance", "Entrez une valeur.");
        validDistance = false;
    }
    
    if(time == "" || time <= 0)
    {
        _cmnShowErrorMessageBottomOfTheInputFiled("Time", "Entrez une valeur.");
        validTime = false;
    }   
    
    if(speed == "" || speed <= 0)
    {
        _cmnShowErrorMessageBottomOfTheInputFiled("Speed", "Entrez une valeur.");
        validSpeed = false;
    }  


    if(validDistance == true && validSpeed == true && validTime == true){

        if(speed.toFixed(2) == (distance / time).toFixed(2)){
            _cmnRemoveAllErrorMessage();
            return true;
        }else{
            _cmnShowErrorMessageBottomOfTheInputFiled("Speed", "Enter correct value.");
            _cmnShowErrorMessageBottomOfTheInputFiled("Time", "Enter correct value.");
            _cmnShowErrorMessageBottomOfTheInputFiled("Distance", "Enter correct value.");
        }

    }else if(validDistance == true && validSpeed == true || 
            validDistance == true && validTime == true || 
            validTime == true && validSpeed == true)
    {
        _cmnRemoveAllErrorMessage();
        return true;
    }

    return false;
}

function ResetSpeedCalculator()
{
    if(confirm("Are you sure want to reset?")){
         document.getElementById("Distance").value = "";
        document.getElementById("Time").value = "";
        document.getElementById("Speed").value = "";
        
        _cmnRemoveAllErrorMessage();

        _cmnHideElement("OutputResult");
        _cmnShowElement("OutputInfo", "flex");
    }
}

function CalculateSpeed_2()
{
    var distanceInputFiled = document.getElementById("Distance");
    var timeInputFiled = document.getElementById("Time");
    var speedInputFiled = document.getElementById("Speed");

    var showDistanceDiv = document.getElementById("ShowDistance");
    var showTimeDiv = document.getElementById("ShowTime");
    var showSpeedDiv = document.getElementById("ShowSpeed");

    var distance = Number(distanceInputFiled.value);
    var time = Number(timeInputFiled.value);
    var speed = Number(speedInputFiled.value);
    
    var calculatedSpeed, calculatedTime, calculatedDistance;


    if(ValidateSpeedCalculatorForm(distance,time,speed))
    {

        showDistanceDiv.innerHTML   = `Volume = `+ distance + `Ko`;
        showTimeDiv.innerHTML       = `Temps = `+ time + `s`;
        showSpeedDiv.innerHTML      = `Perte = `+ speed + `Ko/s`;


        if(distance == "")
        {
            calculatedDistance = speed * time;
            calculatedDistance = calculatedDistance.toFixed(2);

            distanceInputFiled.value = calculatedDistance;
            distanceInputFiled.focus();
            showDistanceDiv.innerHTML = `Volume = `+ calculatedDistance + `Ko`;
        }
        else if(time == "")
        {
            calculatedTime = distance / speed;
            calculatedTime = calculatedTime.toFixed(2);

            timeInputFiled.value = calculatedTime;
            timeInputFiled.focus();
            showTimeDiv.innerHTML = `Time = `+ calculatedTime + `s`;
        }
        else if(speed == "")
        {
            calculatedSpeed = distance / time;
            calculatedSpeed = calculatedSpeed.toFixed(2);

            speedInputFiled.value = calculatedSpeed;
            speedInputFiled.focus();
            showSpeedDiv.innerHTML = `Perte = `+ calculatedSpeed + `Ko/s`;
        }

        //show result div
        _cmnHideElement("OutputInfo");
        _cmnShowElement("OutputResult", "flex");
    }
}