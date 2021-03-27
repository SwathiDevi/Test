import React, { useEffect, useState } from 'react';


function WeatherApp() {
  const [weatherData, SetWeatherData] = useState(false);
  const [activeId, SetActiveId] = useState(3);

  useEffect(()=>{
        fetch(`http://www.7timer.info/bin/astro.php?lon=113.2&lat=23.1&ac=0&unit=metric&output=json&tzshift=0`)
          .then(response => response.json())
          .then(data =>
            SetWeatherData(data)
          )
          .catch(error => SetWeatherData(error));
  },[])

  function findWeatherType(cloudcover){
      let cloudData= {
          type :'',
          img :''
      }
      switch(cloudcover){
            case 1:
                cloudData.type='Clear'
                cloudData.img='http://www.7timer.info/img/misc/about_civil_clear.png'
                break;
            case 2:
                cloudData.type='Clear'
                cloudData.img='http://www.7timer.info/img/misc/about_civil_clear.png'
                break;
            case 3:
                cloudData.type='Partly Cloudy'
                cloudData.img='http://www.7timer.info/img/misc/about_civil_pcloudy.png'
                break;
            case 4:
                cloudData.type='Partly Cloudy'
                cloudData.img='http://www.7timer.info/img/misc/about_civil_pcloudy.png'
                break;
            case 5:
                cloudData.type='Partly Cloudy'
                cloudData.img='http://www.7timer.info/img/misc/about_civil_pcloudy.png'
                break;
            case 6:
                cloudData.type='Partly Cloudy'
                cloudData.img='http://www.7timer.info/img/misc/about_civil_pcloudy.png'
                break;
            case 7:
                cloudData.type='Partly Cloudy'
                cloudData.img='http://www.7timer.info/img/misc/about_civil_pcloudy.png'
                break;
            case 8:
                cloudData.type='Cloudy'
                cloudData.img="http://www.7timer.info/img/misc/about_civil_mcloudy.png"
                break;
            case 9:
                cloudData.type='Cloudy'
                cloudData.img="http://www.7timer.info/img/misc/about_civil_mcloudy.png"
                break;
            default:
                cloudData.type='Not Available';
      }
      return cloudData;
  }
  
  function convertCtoF(value){
      let f=(value * 9/5) + 32
      return f
  }

  function SetSelectedActiveId(id){
    SetActiveId(id);
    window.scrollTo(0,0)
  }

  return (
      <>
      {weatherData ?
        <div className="d-flex">
            <div className="side-menu-container">
                {weatherData && weatherData.dataseries.length>0 && weatherData.dataseries.map((item)=>(
                    <div id={item.timepoint} 
                        className={`menu-item ${activeId === item.timepoint ? 'active':''}`} 
                        onClick={()=>SetSelectedActiveId(item.timepoint)}>
                        {item.timepoint} {item.timepoint <=3 ? 'rd':'th'} Day Report
                    </div>
                ))
                }
            </div>
            {weatherData && weatherData.dataseries.length>0 && weatherData.dataseries.map((item)=>(
                    <div className={`main-content ${activeId === item.timepoint ? "d-block": "d-none"}`}>
                        <div><h3><b>Sivakasi weather Report</b></h3><h6>({item.timepoint} {item.timepoint <=3 ? 'rd':'th'} Day Report)</h6></div>
                        <h6>India</h6>
                        <h6>{Date().toLocaleString()}</h6>
                        <br></br>
                        <div className='d-flex justify-content-between'>
                            <div>
                                <div className='d-flex'>
                                    <img src={findWeatherType(item.cloudcover).img} className='cloud-img' alt='weather-img'></img>
                                    <h2 className='ml-1'><i>{findWeatherType(item.cloudcover).type}</i></h2>
                                </div>
                                <h1>{item.temp2m} <span>&#8451;</span></h1>
                                <p>{convertCtoF(item.temp2m)}<span>&#x2109;</span></p>
                            </div>
                            <div>
                                <h6>Preciption Type: {item.prec_type}</h6>
                                <h6>Humidity: {item.rh2m}</h6>
                                <h6>Wind: {item.wind10m.speed}km/h {item.wind10m.direction}</h6>
                                <h6>Astronomical seeing: {item.seeing}</h6>
                                <h6>atmospheric transparency: {item.transparency}</h6>
                                <h6>Lifted Index: {item.lifted_index} </h6>
                            </div>
                        </div>
                    </div>
                ))
            }
      </div>:<p>Please wait</p>} 
      </>
   );
}

export default WeatherApp;
