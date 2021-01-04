import React, { useState, useEffect } from 'react';
import AddMember from './AddMember';
import MembersList from './MembersList';
import DeleteMember from './DeleteMember';
import EditMember from './EditMember';
import Header from './Header';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import './Example.css';

function Example() {

    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path="/add" component={AddMember} />
                <Route exact path="/" component={MembersList} />
                <Route exact path="/delete/:id" component={DeleteMember} />
                <Route exact path="/edit/:id" component={EditMember} />
            </Switch>
        </Router>
    );
}

export default Example;

if (document.getElementById('root')) {
    ReactDOM.render(<Example />, document.getElementById('root'));
}
