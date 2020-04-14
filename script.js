window.addEventListener("load", function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        response.json().then(function(json){
            json.sort(function(a,b){return b.hoursInSpace - a.hoursInSpace});
            const container = document.getElementById("container");
            let index;
            for (index = 0; index < json.length; index++){
        //console.log(json);
            let color = 'red';
            if (json[index].active === true) {

            }
            container.innerHTML += `
            <div class="astronaut">
                <div class="bio">
                <h3>${json[index].firstName} ${json[index].lastName}</h3>
                <ul>
                <li>Hours in space: ${json[index].hoursInSpace}</li>
                <li>Active: ${json[index].active}</li>
                <li>Skills: ${json[index].skills}</li>
                </ul>
                </div>
            <img class="avatar" src=${json[index].picture}>
            </div>
            `;   
            }
        });
    });
 });
