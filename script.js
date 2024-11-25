function changeCity() {

    var City = prompt("What city do you live in?");  
    var Temperature = prompt("What temperature is it?");
    let Icon =  document.querySelector(".top-icon");
    let Title = document.querySelector(".Title");
     
    if (Temperature <= 0 ) {
        Icon.src = "Icons/crying.png";
    }
    else if (Temperature > 0 & Temperature <= 19) {
        Icon.src = "Icons/sad-face.png";
    }
    else if (Temperature >= 20 & Temperature <= 29) {
        Icon.src = "Icons/happy-face.png";
    }
    else if (Temperature >= 30) {
        Icon.src = "Icons/sweating.png";
    }

    Title.innerHTML = "Currently " + Temperature + "&#176 in " + City;
};