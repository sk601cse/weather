let input=document.querySelector(".search-container input");
let searchBtn=document.querySelector("button");
let searchCity= document.querySelector("#search-city");
let tem=document.querySelector(".city p");
let humidity=document.querySelector(".humidity p");
let air=document.querySelector(".air p")
let img=document.querySelector(".show-container img");

searchBtn.addEventListener("click",async()=>{
    
    
           let  apiKey="26233c49ad2a982a4c5744ece9c77e7a"
           const BASE_URL=`https://api.openweathermap.org/data/2.5/weather?q=${input.value.toUpperCase()}`
           const response= await fetch(BASE_URL+`&appid=${apiKey}`);
           let data=await response.json();
         
           
           searchCity.innerHTML=data.name;
           let T=(Math.floor(data.main.temp)-273);
            tem.innerHTML=`${T}°c`;
           
            humidity.innerHTML=`${data.main.humidity}%`;
            air.innerHTML=`${data.wind.speed}km/h`;

        if(data.weather[0].main=="Clouds"){
            img.src="images/clouds.png";
        } else if(data.weather[0].main=="Clear"){
            img.src="images/clear.png";
        } else if(data.weather[0].main=="Drizzle"){
            img.src="images/drizzle.png";
        } else if(data.weather[0].main=="Mist"){
            img.src="images/mist.png";
        } else if (data.weather[0].main=="Rain"){
            img.src="images/rain.png";
        } else{
            img.src="images/snow.png";
        }
      
});