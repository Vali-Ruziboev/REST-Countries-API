import { useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";
import useFetchCountries from "./useFetchCountries";


const CountryDetails = () => {
    const {name} = useParams()
    const {data, isPending, error} = useFetchCountries(`https://restcountries.com/v2/name/${name}?fullText=true`);
    const {data:allData} = useFetchCountries("https://restcountries.com/v2/all")
    const history = useHistory()
    const handleClick = ()=>{
        history.push('/')
    }
    return ( 
        <div className = 'country-details-wrapper'>
            <button onClick={handleClick}><svg xmlns="http://www.w3.org/2000/svg" width="584.602" height="355.882" viewBox="0 0 584.602 355.882">
    <path id="arrow-back-outline" d="M244,400,100,256,244,112M120,256H636.6" transform="translate(-76 -78.059)"  strokeLinejoin="round" strokeWidth="48"/>
</svg>
Back</button>
            {data &&  <div className="country-details">
                <img src={data[0].flag} alt="" />
                <div className="country-detail-wrap">  
                    <h3>{data[0].name}</h3>
                    <div className="contry-infomration-wrapper">
                        <div className="country-info1"> 
                            <h5><strong>Native Name:</strong> <span>{data[0].nativeName && data[0].nativeName}</span></h5>
                            <h5><strong>Population:</strong> <span>{data[0].population && data[0].population}</span></h5>
                            <h5><strong>Region:</strong> <span>{data[0].region && data[0].region}</span></h5>
                            <h5><strong>Sub Region:</strong> <span>{data[0].subregion && data[0].subregion}</span></h5>
                            <h5><strong>Capital:</strong> <span>{data[0].capital && data[0].capital}</span></h5>
                        </div>
                        <div className="country-info2">
                            <h5><strong>Top Level Domain:</strong> <span>{data[0].topLevelDomain && data[0].topLevelDomain.map((e)=>{return e}).join(", ")}</span></h5>
                            <h5><strong>Currencies:</strong> <span>{data[0].currencies && data[0].currencies.map((e)=>{return e.name}).join(", ")}</span></h5>
                            <h5><strong>Languages:</strong> <span>{data[0].languages && data[0].languages.map((e)=>{return e.name}).join(", ")}</span></h5>
                        </div>
                    </div>
                    <div className="border-countries">
                    {data[0].borders && <>
                        <h4>Border Countries:</h4>
                        {data[0].borders && data[0].borders.map((b)=>{
                            const countryName = allData && allData.map((c)=>{
                                if(c.alpha3Code.match(b)){
                                    return <Link to={`/${c.name}`}className="border" key={c.name}>{c.name}</Link>
                                }
                                return null
                            })
                            return countryName
                        })}
                        </>}
                    </div>
                </div>
            </div>}
            {isPending && <svg className="loading" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ><path d="M12 22c5.421 0 10-4.579 10-10h-2c0 4.337-3.663 8-8 8s-8-3.663-8-8c0-4.336 3.663-8 8-8V2C6.579 2 2 6.58 2 12c0 5.421 4.579 10 10 10z"></path></svg>}
            {error && <h5>{error}</h5>}
        </div>

);
}

export default CountryDetails;
