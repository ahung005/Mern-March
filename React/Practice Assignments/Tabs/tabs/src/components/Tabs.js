import React, { useState } from "react";

const Tabs = (props) => {
    const { tabs, setTabs } = props;
    const [ currentTab, setCurrentTab ] = useState(0);

const selectedTab = (index) => {
    return index === currentTab ? "tab_selected" : "tab_notselected";
    }

    return (
        <div>
            <div className="d-flex justify-content-start">
                {
                tabs.map( (item, index) => 
                    <div className={"tab border px-2 me-1 " + selectedTab(index) } onClick={ () => { setCurrentTab(index) }}>{ item.label }</div>
                )
                }
            </div>
            <div className="border p-1 my-2 content_box">
                {
                tabs[currentTab].content
                }
            </div>
        </div>
    );
}

export default Tabs;