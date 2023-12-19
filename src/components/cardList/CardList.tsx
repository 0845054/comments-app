import React from 'react'
import './CardList.css'
import Card from '../card/Card'

type Props = {
    comments: Object[]
}

const CommentsList = ({ comments }: Props) => {
    const renderList = () => {
        return comments.map((comment) => <Card comment={comment} />)
    }
    return (
        <div className='comments-list-container'>{renderList()}</div>
    )
}

export default CommentsList