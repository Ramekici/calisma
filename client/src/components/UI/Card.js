import React, {useState, useRef, useEffect} from 'react'
import {Link} from 'react-router-dom';
import './Card.css';


const Card = (props) => {

    const [toggle, setToggle]= useState(false);
    const [setHeight, setHeightState] = useState("0px");


    const content = useRef(null);

    useEffect(()=>{
        if (null !== content.current) {
        setHeightState(`${content.current.scrollHeight}px`)
        }
    },[toggle])

  const onGoruntuleHandler = () => {
    setToggle(prev => !prev)
    if (null !== content.current) {
        setHeightState(!toggle ? "0px" : `${content.current.scrollHeight}px`);     
    }
  }


    return (
        <div className="card_body">
            <div className="card_upper">
                <div className="image">
                    <img src={props.imageUrl}
                    alt="Kullanıcı Foto" className="image_foto"/>
                </div>
                <div className="card_items">
                    <div className="card_item"> <span className="text-muted"> UserId :</span> {props.id} </div>
                    <div className="card_item text-capitalize"> <span className="text-muted"> Username :</span> {props.userName} </div>
                    <div className="card_item"><span className="text-muted"> Email :</span>  { props.email} </div>
                    <div className= { toggle ? "accordion__content" : "accordion__bos"} 
                        ref={content}
                        style={{maxHeight: `${setHeight}`}}
                        >
                        <div className="card_item text-capitalize"> <span className="text-muted"> Name :</span> {props.name} </div>
                        <div className="card_item text-capitalize"> <span className="text-muted"> Surname :</span> {props.surName} </div>
                        <div className="card_item"> <span className="text-muted"> Birth Date:</span> {new Date(props.birthDate).toISOString().split('T')[0]} </div>
                        <div className="card_item"> <span className="text-muted"> Description :</span> {props.description} </div>
                        <div className="card_item"> <span className="text-muted"> ImageUrl :</span> {props.imageUrl} </div>
                    </div>
                </div>
                
            </div>
            
            <div className="card_buttons"> 
                <button className="card_button card_button_display" onClick={onGoruntuleHandler}>
                    {toggle ? "Close" : "Show Details" }  </button>
                <button className="card_button card_button_delete" onClick = {() => props.deleteFonk(props.id)} > Delete </button>
                <Link
                onClick={() => props.updateFonk(props.id)} 
                to={`edit/${props.id}`} 
                className="card_button card_button_edit" >
                    Update
                </Link>
            </div>
        </div>
    )
}

export default Card;