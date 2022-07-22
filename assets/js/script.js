// Variables
// Open Weather Map API key
var key = "ae73148c56c6f5580bee66b9c7ed810c";

//==========================================================================
// when search button is clicked, check if city search field is empty
function checkCity(event) {
    event.preventDefault(); //standard//
    
    var city = $("#search-city").val();
    
    // check if city is empty
    if(!city)
    {
        return;
    } 
    
    getWeather(city);  
        
    //clear the city field //
    $("#search-city").val(""); 
}

//==========================================================================

function getWeather(city) {

    // get & display city's current weather
    var cityWeather = getCurrentWeather(city); //get city's weather
    showCurrentWeather(cityWeather);

    //get city's historyfrom storage
    var cityHistory = JSON.parse(localStorage.getItem("cityHistory"));
	if (cityHistory) { // if cityHistory exists in local storage	
        var cityItem = cityHistory[0];  
        for(var i = 0 ; i < cityHistory.length; i++) {
            //add city's current weather to cityHistory //
        }
        // save current weather to local storage//
        saveStorage(city);
        
    } else {   	
    	// hide empty weather history elements     
    }
    // get & display city's 5 day forecast
    var cityForecast = getForecast(city); // get city's 5 day forecast
    showForecast(cityForecast);
}

//==========================================================================
// get current weather from openweathermap API
function getCurrentWeather(city) {
    var searchURL = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+key; 
    
    //do some fetching here//
    //fetch to get weather for city
    //then with result send results to the console
    //save the Date, temperature, humidity, and windspeed
    //return to getStorage() 
}

//==========================================================================
// save city's name to storage
function saveStorage(city){

    var cityHistory = JSON.parse(localStorage.getItem("cityHistory"));  
    var ;

    // If exists 
    if(cityHistory){

        for(var i = 0 ; i < cityHistory.length; i++) {        
            if(cityHistory[i] === city){ //if it exists in storage, don't bother//
                return;
            }         
    else {
			// stringify the data and save to local storage
    }
  	// 
}


//==========================================================================
// get 5 day forecast from openweathermap API
function getForecast(city) {
    var searchURL = "https://api.openweathermap.org/data/2.5/forecast?id="+city"&cnt=5&units=imperial&appid="+key;
    
    //do some fetching here//
    //fetch to get 5 day forecast for city
    //then with result send results to the console
    //save the Date, temperature, humidity, and windspeed
    //add this info to the city-card   
}

    // api.openweathermap.org/data/2.5/forecast?id={city ID}&cnt=5&units=imperial&appid={your api key}
    var temp, humidity,icon;
$(document).ready(function(){
    //when page loads,then

	//when search button is clicked...
    $("#search-button").on("click",checkCity);
    

});