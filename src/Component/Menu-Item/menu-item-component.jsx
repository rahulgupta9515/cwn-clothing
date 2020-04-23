import React from 'react';
import {withRouter} from 'react-router-dom'; 
import './menu-item.style.scss'

const MenuItem = ({title, image, size, history, linkUrl, match}) => ( 
    <div className = {`${size} menu-item`} onClick = {() => history.push(`${match.url}${linkUrl}`)}>
        <div className = 'background-image'
            style = {{backgroundImage: `url(${image})` }}
        />
        <div className = 'content'>
            <h1 className = 'title'>{title.toUpperCase()}</h1>
            <span className = 'subtitle'>Shop</span>
        </div>
    </div>
)

export default withRouter(MenuItem);