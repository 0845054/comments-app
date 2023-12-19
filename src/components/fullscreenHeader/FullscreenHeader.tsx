import React, { useContext } from 'react'

import './FullscreenHeader.css'
import { SizeContext } from '../context/SizeContext'

type Props = {}

const FullscreenHeader = (props: Props) => {
    const { width, height } = useContext(SizeContext);
    return (
        <div className='fullscreen-header-container'>
            <h1 className='fullscreen-header-title'>Welcome to Comments App!</h1>
            <p>This React application is to practice API calls and creating a responsive website.</p>
            <p>This React application uses the following features:</p>
            <span> - API </span>
            <span> - Responsive web </span>
            <span> - React Hooks (useState, useEffect, useContext) </span>

            <br /><br /><br />
            <em>Fullscreen {'>'} 1200</em>
            <span>Width: {width}</span>
            <span>Height: {height}</span>
        </div>
    )
}

export default FullscreenHeader