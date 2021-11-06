import { useEffect, useState } from "react";

const Header = () => {
    const [darkMoode, setDarkMode] = useState(false)
    function dMode(){
        document.documentElement.style.setProperty("--Light-Mode-Elements", 'var(--Dark-Blue-Dark-Mode-Elements)')
        document.documentElement.style.setProperty("--Very-Light-Gray-Light-Mode-Background", 'var(--Very-Dark-Blue-Dark-Mode-Background)')
        document.documentElement.style.setProperty("--Very-Dark-Blue-Light-Mode-Text", 'var(--White-Dark-Mode-Text)')
        document.documentElement.style.setProperty("--Dark-Gray-Light-Mode-Input", 'var(--White-Dark-Mode-Text)')
    }
    function lMode(){
        document.documentElement.style.setProperty("--Light-Mode-Elements", 'hsl(0, 0%, 100%)')
        document.documentElement.style.setProperty("--Very-Light-Gray-Light-Mode-Background", 'hsl(0, 0%, 98%)')
        document.documentElement.style.setProperty("--Very-Dark-Blue-Light-Mode-Text", 'hsl(200, 15%, 8%)')
        document.documentElement.style.setProperty("--Dark-Gray-Light-Mode-Input", 'hsl(0, 0%, 52%)')
    }
    const handleMode = ()=>{
        if(!darkMoode){
            dMode()
            localStorage.setItem('restCountryDarkmode', true)
        }else{
            lMode()
            localStorage.setItem('restCountryDarkmode', false)
        }
        return darkMoode? setDarkMode(false):setDarkMode(true)
    }
    useEffect(()=>{
        let darkMode = localStorage.getItem('restCountryDarkmode')
        if(darkMode=='true'){
            setDarkMode(true)
            dMode()
        }
    }, [])
    return (  
        <header>
            <h4>Where in the world?</h4>
            <div className="mode" onClick={handleMode}>
                {!darkMoode&& <ion-icon name="moon-outline"></ion-icon>}
                {darkMoode&& <ion-icon name="moon"></ion-icon>}
                <h5>Dark Mode</h5>
            </div>
        </header>
    );
}

export default Header;