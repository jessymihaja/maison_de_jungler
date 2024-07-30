import '../styles/Banner.css'
import logo from '../assets/logo.png'
function Banner() {
    return (
        <div className="lmj-banner">
            <img src={logo} alt='la maison jungle' className='lmj-logo'></img>
            <h1 className='lmj-title'>la maison de la jungle</h1>
        </div>
    )
}
export default Banner;