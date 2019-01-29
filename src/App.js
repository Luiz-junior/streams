import React, { Component } from 'react';
import Header from './components/Header';
import { BrowserRouter, Route } from 'react-router-dom';
import StreamCreate from './components/streams/StreamCreate';
import StreamDelete from './components/streams/StreamDelete';
import StreamEdit from './components/streams/StreamEdit';
import StreamList from './components/streams/StreamList';
import StreamShow from './components/streams/StreamShow';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route path="/" exact component={StreamList}></Route>
            <Route path="/streams/new" exact component={StreamCreate}></Route>
            <Route path="/streams/edit" exact component={StreamEdit}></Route>
            <Route path="/streams/delete" exact component={StreamDelete}></Route>
            <Route path="/streams/show" exact component={StreamShow}></Route>
          </div>
        </BrowserRouter>
       
      </div>
    );
  }
}

export default App;
