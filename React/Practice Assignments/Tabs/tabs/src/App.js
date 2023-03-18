import './App.css';
import React, { useState } from 'react';
import Tabs from "./components/Tabs.js";

function App() {
    const tabArray = [{label: "Tab1", content: "Stuff for Tab 1"},
                    {label: "Tab2", content: "More stuff for Tab 2"},
                    {label: "Tab3", content: "Less stuff for Tab 3"},
                    {label: "Tab4", content: "Even more stuff for Tab 4"}];

    const [ tabs, setTabs ] = useState(tabArray);

    return (
        <div className="App">
            <Tabs tabs={ tabs } setTabs={ setTabs } />
        </div>
    );
}

export default App;
