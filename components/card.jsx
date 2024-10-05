

function CardItem(props) {
  return (
    <>
    <div className="main">
        <div className="card">
            <img src={props.src} alt="" />
            <hr />
            <p className="price">{props.price}</p>
            <p className="details">{props.details}</p>
            <button>buy</button>
        </div>
    </div>
    
    </>
  );
}

export default CardItem;