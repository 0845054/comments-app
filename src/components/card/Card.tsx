import React from 'react'
import './Card.css'

type Props = {
    comment: Object
}

const Card = ({ comment }: Props) => {
    const { id, name, body, email }: any = comment;
    return (
        <div className='card-container'>
            <div className='card-header'>
                <div className='card-header-id'>
                    <b>Post Id:</b> {id}
                </div>
                <div className='card-header-name'>
                    <b>Name:</b> {name}
                </div>
                <div className='card-header-email'>
                    <b>Email:</b> <em>{email}</em>
                </div>
            </div>
            <div className='card-body'>
                {body}
            </div>
        </div>
    )
}

export default Card