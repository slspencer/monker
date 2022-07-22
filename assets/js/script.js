
// Open Weather Map API key
var apiKey = "ae73148c56c6f5580bee66b9c7ed810c";

// check if city is empty
function checkCity(event) {
    event.preventDefault(); //standard//
    
    var city = $("#search-city").val();
    
    // check if city is empty
    if(!city)
    {
        return;
    } 
    
    getStorage(city);
   
    getWeather(city);
    
    addCityHistory(city);
    
    $("#search-city").val(""); //clear the city field //
}

//list that city's weather history from local storage
function getStorage(city) {

    var cityHistory = JSON.parse(localStorage.getItem("cityHistory"));
    
    // if cityHistory exists in local storage
	if (cityHistory) {
		
        var cityLast = cityHistory[0];  
        getWeather(cityLast); //get cityLast's weather

        for(var i = 0 ; i < cityHistory.length; i++){
            var weather = $("<li>").addClass("list-group-item previousCity").text(cityHistory[i]);
            $("#cityHistoryList").append(weather);    
            
        }
        
    } else {   	
    	// hide empty weather history elements     
    }

// get weather from openweathermap API
getWeather(city) {
    var searchURL = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+ apiKey; 
    
    //do some fetching here//
    //fetch to get weather for city
    //then with result send results to the console
    //save the Date, temperature, humidity, and windspeed
    //add this info to the city-card   
}
$(document).ready(function(){
    //when page loads,then

	//when search button is clicked...
    $("#search-button").on("click",checkCity);
    

});