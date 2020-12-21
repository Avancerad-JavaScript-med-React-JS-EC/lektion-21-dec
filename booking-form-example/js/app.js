import React, { Component } from 'react';

import Destination from './destination';
import Form from './form';
import Button from './button';

class App extends Component {
    render() {
        return (
            <section className="booking">
                <h1>Åka Tåg</h1>
                <Destination from="Stockholm" to="Göteborg" />
                <Form />
                <Button />
            </section>
        )
    }
}

export default App;