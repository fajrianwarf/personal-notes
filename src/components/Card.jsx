import React, { Component } from 'react';
import { showFormattedDate } from '../utils';

class Card extends Component {
  render() {
    const { title, createdAt, body, archived, onClick, onDelete } = this.props;
    return (
      <div className='note-item'>
        <div className='note-item__content'>
          <h3 className='note-item__title'>{title}</h3>
          <p className='note-item__date'>{showFormattedDate(createdAt)}</p>
          <p className='note-item__body'>{body}</p>
        </div>
        <div className='note-item__action'>
          <button className='note-item__delete-button' onClick={onDelete}>Delete</button>
          <button className='note-item__archive-button' onClick={onClick}>{archived ? 'Pindahkan' :'Arsipkan'}</button>
        </div>
      </div>
    );
  }
};

export default Card;
