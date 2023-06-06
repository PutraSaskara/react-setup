import React, {Component} from 'react';
import './index.css';

class MyButton extends Component {
    render () {
        return <button className='button'><p style={{
            fontSize: '18px', fontWeight: 'bold'
        }}>Login</p></button>
    }
}

export default MyButton