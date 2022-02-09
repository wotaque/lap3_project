import React ,{Fragment} from 'react';
import Image from './winners.png';
 
const Parent = (props) => {
    return (
    <Fragment>
        <div style={{
            backgroundImage: `url(${Image})`,
            backgroundRepeat:'no-repeat',
        }}>
            {props.children}
        </div>
    </Fragment>
    )
}
 
export default Parent;