let xhr = new XMLHttpRequest(); 

function displayNicely(apiData) {
    apiData = JSON.parse(apiData);
     let htmlString = `<strong>Name:</strong> ${apiData.name} <br />`;
     htmlString += `<strong> Eye Colour:</strong>${apiData.eye_color} <br />`;
     htmlString += `<strong> Height:</strong> ${apiData.height} <br />`;
     htmlString += `<strong> Mass:</strong> ${apiData.mass} <br />`;
     htmlString += `<strong> Hair color:</strong> ${apiData.hair_color} <br />`;
     htmlString += `<strong> Gender:</strong> ${apiData.gender} <br />`;
     htmlString += `<strong> Birth Year:</strong> ${apiData.birth_year} <br />`;
     htmlString += `<strong> Skin Color:</strong> ${apiData.skin_color} <br />`;
     
     
     
     
     document.getElementById("returnData").innerHTML = htmlString;
}

xhr.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200) {  
        displayNicely(this.responseText);
    }
   
}

xhr.open("GET", "https://swapi.co/api/starships/3/");

xhr.send(); 