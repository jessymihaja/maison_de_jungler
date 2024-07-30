import CareScale from "./CareScale"
import '../styles/PlantItem.css'
function PlantItem({name,cover,id,light,water,isSpecialOffer,price}) {
    function handleClick(plantName) {
        alert(`Vous voulez acheter 1 ${name} ? Très bon choix 🌱✨`)
    }
    return(
        <li key={id} className='lmj-plant-item'>
            {isSpecialOffer && <div className="lmj-sales">SOLDES</div>}
			<img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} onClick={handleClick}/>
			{name}
            <span className='lmj-plant-item-price'>{price}€</span>
            
			<div>
				<CareScale careType='water' scaleValue={water} />
				<CareScale careType='light' scaleValue={light} />
			</div>
		</li>
    )
}
export default PlantItem;