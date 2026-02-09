import {ShieldUser} from 'lucide-react';
function Card(props){
console.log(props.img);

    
    return(
        <div className="card">
            <div className="top">
            <h4 className="free">Available</h4>
            <h4>{props.pay}</h4>
            </div>
            <div className="image">
            <img src={props.img} alt="profilePic" /></div>
            <div className="middle">
            <h3>{props.name}</h3>
            <span>{props.role}</span>
            <p className='user'><ShieldUser size={22} strokeWidth={2} />Freelancer</p>
            <div className="inner-middle">
                <p>{props.tag1}</p>
                <p>{props.tag2}</p>
                <p>{props.tag3}</p>
                <p className='add'>{props.tag4}</p>
            </div>
            <p className='info'>{props.intro}</p>
            <div className="bottom">
                <button >VIEW PROFILE</button>
            </div>
            </div>
                
        </div>
    )
}
export default Card;