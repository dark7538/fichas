import React from 'react';

const Header = (props) =>{
    return (<div className='header'>
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>
        <h3>{props.trititle}</h3>
        </div>);
}
export default Header;