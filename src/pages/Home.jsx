import React, { Component } from 'react'

import Card from '../components/Card';
import FormInput from '../components/FormInput';

import { getInitialData } from '../utils';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      notes: getInitialData(),
    };
  }

  addData = (payload) => {
    this.setState((prevState) => ({
      notes: [...prevState.notes, payload],
    }));
  };

  toggleArchived = (id) => {
    this.setState((prevState) => ({
      notes: prevState.notes.map((note) => {
        if (note.id === id) {
          note.archived = !note.archived;
        }
        return note;
      }),
    }));
  };

  onDelete = (id) => {
    this.setState((prevState) => ({
      notes: prevState.notes.filter((note) => note.id !== id),
    }));
  };

  handleSearchChange = (e) => {
    this.setState({ search: e.target.value });
  };

  
  render() {
    const { search, notes } = this.state;

    const activeNotes = notes.filter(note => !note.archived && note.title.toLowerCase().includes(search.toLowerCase()));
    const archivedNotes = notes.filter(note => note.archived && note.title.toLowerCase().includes(search.toLowerCase()));

    return (
      <>
        <nav className='note-app__header'>
          <h1>Notes</h1>
          <div className='note-search'>
            <input type='text' value={search} onChange={this.handleSearchChange} placeholder='Cari catatan' />
          </div>
        </nav>
        <main className='note-app__body'>
          <FormInput addData={this.addData} />
          <h2>Catatan Aktif</h2>
          <div className='notes-list'>
            {activeNotes.length > 0 ? (
              activeNotes.map((note) => (
                <Card
                  key={note.id}
                  onClick={() => this.toggleArchived(note.id)}
                  onDelete={() => this.onDelete(note.id)}
                  title={note.title}
                  createdAt={note.createdAt}
                  body={note.body}
                  archived={note.archived}
                />
              ))
            ) : (
              <p className='notes-list__empty-message'>Tidak ada catatan</p>
            )}
          </div>
          <h2>Arsip</h2>
          <div className='notes-list'>
            {archivedNotes.length > 0 ? (
              archivedNotes.map((note) => (
                <Card
                  key={note.id}
                  onClick={() => this.toggleArchived(note.id)}
                  onDelete={() => this.onDelete(note.id)}
                  title={note.title}
                  createdAt={note.createdAt}
                  body={note.body}
                  archived={note.archived}
                />
              ))
            ) : (
              <p className='notes-list__empty-message'>Tidak ada catatan</p>
            )}
          </div>
        </main>
      </>
    );
  };
};

export default Home;