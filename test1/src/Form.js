import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Form1 = () => {
    const [searchField, setSearchField] = useState('')
    const [toggle, setToggle] = useState(false)
    const [apiResponse, setApiResponse] = useState()

    /**
     * @method getUsersWeather
     * @description to get weather data
     */

    const getUsersWeather = async () => {
        try {
            /**
             * this api url gives error thats why I used my own url
             */
            // const response = await axios.get('http://api.weatherstack.com/current?access_key=bb85adaac47d508337508075779a3c70&query=' + searchField)

            const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${searchField}&appid=d958001e6a31efdebac4b4104c82843d`)
            setToggle(true)
            setApiResponse(response.data)
        } catch (err) {
            setToggle(false)
            console.log(err, "error in getUsersWeather")
        }
    }

    useEffect(() => {
        const res = setTimeout(() => {
            getUsersWeather()
        }, 3000)

        return () => clearInterval(res)
    }, [searchField])

    return (<div className='taskConatiner'>
        {!toggle && <div className="serachBarContainer ">
            <label className=''>Find your location</label>
            <input
                type="text"
                className=''
                placeholder='Enter your location'
                onChange={e => {
                    setSearchField(e.target.value)
                }} />
        </div>}
        {toggle && <div className='cardContainer'>
            <div className='backContainer' >
                <input type='button' value={'Search'} onClick={() => { setToggle(false) }} />
            </div>
            <h3 className='cityName'>{apiResponse.name}</h3>
            <div className='divider' />
            <div className='imageContainer'>
                <img src='https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png' alt='' className='image' />
                <h3 className='data'>{(apiResponse.main.temp_max - 273.15).toFixed(2)}
                    <sup style={{
                        top: '-0.9em'
                    }}>o</sup>
                    <span style={{
                        fontSize: '18px', letterSpacing: '1px', fontWeight: '300'
                    }}>Cel</span>
                </h3>
            </div>
            <div className='divider' />
            <div className='footerContainer'>
                <div className='footerContainerInner'>
                    <h3 className='data'>{(apiResponse.main.temp_max - 273.15).toFixed(2)}
                        <sup style={{
                            top: '-0.9em'
                        }}>o</sup>
                        <span style={{
                            fontSize: '18px', letterSpacing: '1px', fontWeight: '300'
                        }}>Cel</span>
                    </h3>
                    <h5>Max Temp</h5>
                </div>
                <div className='footerContainerInner'><h3 className='data'>{(apiResponse.main.temp_max - 273.15).toFixed(2)}
                    <sup style={{
                        top: '-0.9em'
                    }}>o</sup>
                    <span style={{
                        fontSize: '18px', letterSpacing: '1px', fontWeight: '300'
                    }}>Cel</span>
                </h3>
                    <h5>Max Temp</h5>
                </div>
                <div className='footerContainerInner'><h3 className='data'>{apiResponse.main.humidity}
                    <sup style={{
                        top: '-0.9em'
                    }}>o</sup>
                    <span style={{
                        fontSize: '18px', letterSpacing: '1px', fontWeight: '300'
                    }}>Cel</span>
                </h3>
                    <h5>Humidity</h5>
                </div>
            </div>
        </div>}
    </div>
    )
}

export default Form1