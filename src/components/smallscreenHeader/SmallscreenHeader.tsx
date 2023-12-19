import React, { useContext } from 'react'

import './SmallscreenHeader.css'
import { SizeContext } from '../context/SizeContext';

type Props = {}

const SmallscreenHeader = (props: Props) => {
    const { width, height } = useContext(SizeContext);
    return (
        <div className='smallscreen-header-container'>
            <h1 className='smallscreen-header-title'>Welcome to Comments App!</h1>
            <em>Small screen {'<'} 1200</em><br />
            <span>Width: {width}</span><br />
            <span>Height: {height}</span>
        </div>
    )
}

export default SmallscreenHeader