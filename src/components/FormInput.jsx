import React, { Component } from 'react'

class FormInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
    };
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { addData } = this.props;

    const newData = {
      id: +new Date,
      title: this.state.title,
      body: this.state.body,
      archived: false, 
      createdAt: new Date,
    }

    addData(newData);
    this.setState({ title: '', body: '' });
  }

  handleTitleChange = (e) => {
    const value = e.target.value;
    if (value.length <= 50) {
      this.setState({ title: e.target.value });
    }
  };

  handleBodyChange = (e) => {
    this.setState({ body: e.target.value });
  };

  render() {
    const { title, body } = this.state;

    return (
      <section className='note-input'>
        <h2 className='note-input__title'>Buat Catatan</h2>
        <h4 className='note-input__title__char-limit'>
          Sisa karakter : {50 - title.length}
        </h4>
        <form className='note-input__body' onSubmit={this.onSubmit}>
          <input
            type='text'
            className='note-input__title'
            value={title}
            onChange={this.handleTitleChange}
            placeholder='Masukkan judul...'
            required
          />
          <textarea
            className='note-input__body'
            cols='30'
            rows='10'
            value={body}
            onChange={this.handleBodyChange}
            placeholder='Tuliskan catatanmu di sini...'
            required
          />
          <button type='submit'>Buat</button>
        </form>
      </section>
    );
  }
}

export default FormInput;