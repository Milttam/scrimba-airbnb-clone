function Card(props) {
    let badgeTest
    if (props.item.openSpots === 0) {
        badgeTest = "SOLD OUT"
    }
    else if (props.item.location === "Online") {
        badgeTest = "ONLINE"
    }

    return (
        <div className="card">
        {badgeTest && <div className="card-badge">{badgeTest}</div>}
            <img className="card-img" src={props.item.coverImg} alt="users"></img>
            <div className="card-stats">
                <img className="star" src="Star 1.png" alt="star"></img>
                <span>{props.item.rating}</span>
                <span className="gray"> ({props.item.stats.reviewCount})</span>
                <span className="gray">{props.item.location}</span> 
            </div>
            <p className="card-name">{props.item.title}</p>
            <p className="card-price"><span className="bold">From ${props.item.price}</span> / person</p>
        </div>
    )
}

export default Card;