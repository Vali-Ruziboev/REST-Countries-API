import { useState } from "react";
import CountryList from "./CountryList";
import useFetchCountries from "./useFetchCountries";

const Home = () => {
    const {data, isPending, error} = useFetchCountries('https://restcountries.com/v2/all')
    const [countries, setCountries] = useState(null)
    const [showLImit, setShowLImit] = useState(16)
    const [searchedCountry, setSearchedCountry] = useState("")
    const handleSelect = (e)=>{
        const filteredCountry =  data.filter(country=>{
            return country.region ===e.target.value
        })
        setCountries(filteredCountry)
    }
const handleSearch = (e)=>{
    if(data){
        const filteredCountry = data.filter(country=>{
        if(country.name.toLowerCase().match(e.target.value)){
            return country
        } 
        return null
        })
        setSearchedCountry(filteredCountry)
    }
}


window.onscroll = ()=>{
    if(window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight){
        setShowLImit(showLImit+showLImit)
    }
}

    return (
        <>
            <div className="tools">
                <div className="searchbar">
                    <ion-icon name="search-outline"></ion-icon>
                    <input onChange={handleSearch} onInput={handleSearch} type="text" className="search" placeholder='Search for a country...' />
                </div>
                <select onChange={handleSelect} className="filter" defaultValue ="Filter by Region">
                    <option value=""  hidden>Filter by Region</option>
                    <option value="Africa">Africa</option>
                    <option value="Americas">America</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </div>
            {error && <h5>{error}</h5>}
            {isPending && <svg className="loading" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 22c5.421 0 10-4.579 10-10h-2c0 4.337-3.663 8-8 8s-8-3.663-8-8c0-4.336 3.663-8 8-8V2C6.579 2 2 6.58 2 12c0 5.421 4.579 10 10 10z"></path></svg>}
            {!countries && searchedCountry=="" && data && <CountryList countries={data.slice(0, showLImit)}/>}
            {searchedCountry=="" && countries && <CountryList countries={countries.slice(0, showLImit)}/>}
            {!searchedCountry =="" && <CountryList countries  = {searchedCountry.slice(0, showLImit)}/> }
        </>
    );
}

export default Home;