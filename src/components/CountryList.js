import { Link } from "react-router-dom";

const CountryList = ({countries}) => {
    return (  
        <div className="countries-continainer">
            {countries.map((country)=>(
            <div className="country-preview" key={country.name}>
                <Link to={`/${country.name}`}>
                    <img src={country.flag} alt="" />
                    <div className="country-detailed">  
                        <h3>{country.name}</h3>
                        <div className="country-info">
                            <h5><strong>Population:</strong> <span>{country.population}</span></h5>
                            <h5><strong>Region:</strong> <span>{country.region}</span></h5>
                            <h5><strong>Capital:</strong> <span>{country.capital}</span></h5>
                        </div>
                    </div>
                </Link>
            </div>
            ))}
        </div>
    );
}

export default CountryList;
