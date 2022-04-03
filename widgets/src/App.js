import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';
import Link from './components/Link';

const items = [
    {
        title: 'What is React',
        content: 'React is a front end JS framework'
    },
    {
        title: 'Why use React',
        content: 'React is favorite JS library among Engineers'
    },
    {
        title: 'How to use React',
        content: 'Use React by creating components'
    }
]

const options = [
    {
        label: 'The color red',
        value: 'red'
    },
    {
        label: 'The color green',
        value: 'green'
    },
    {
        label: 'The shade of blue',
        value: 'blue'
    },
];

export default () => {
    const [selected, setSelected] = useState(options[0])

    return (
        <div>
            <Header />
            <Route path="/">
                <Accordion items={items} />
            </Route>
            <Route path="/list">
                <Search />
            </Route>
            <Route path="/dropdown">
                <Dropdown
                    label="Selected a color"
                    options={options}
                    selected={selected}
                    onSelectedChange={setSelected}
                />
            </Route>
            <Route path="/translate">
                <Translate />
            </Route>
        </div>
    );
};