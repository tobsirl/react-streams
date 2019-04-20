import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

// import components
import StreamCreate from '../components/streams/StreamCreate';
import StreamDelete from '../components/streams/StreamDelete';
import StreamEdit from '../components/streams/StreamEdit';
import StreamList from '../components/streams/StreamList';
import StreamShow from '../components/streams/StreamShow';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Route path="/" exact component={StreamList} />
        <Route path="/new" component={StreamCreate} />
        <Route path="/edit" component={StreamEdit} />
        <Route path="/delete" component={StreamDelete} />
        <Route path="/show" component={StreamShow} />
      </div>
    </BrowserRouter>
  );
};

export default App;
