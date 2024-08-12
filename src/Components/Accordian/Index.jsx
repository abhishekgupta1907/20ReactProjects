//Single Selection

import { useState } from "react";
import Data from "./data";
import "./Style.css";
//Multiple Selection
export default function Accordian() {
    const [selected, setSelected] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [multiple, setMultiple] = useState([]);

    function handleSingleSelection(getCurrentId) {
        setSelected(getCurrentId === selected ? null : getCurrentId);
    }

    function handleMultiSelection(getCurrentId) {
        let copyMutiple = [...multiple];
        const findIndexOfCurrentId = copyMutiple.indexOf(getCurrentId);

        if (findIndexOfCurrentId === -1) copyMutiple.push(getCurrentId);
        else copyMutiple.splice(findIndexOfCurrentId, 1);

        setMultiple(copyMutiple);
    }
    return (
        <div className="wrapper">
            <button
                onClick={() => setEnableMultiSelection(!enableMultiSelection)}
            >
                Enable Multiselection
            </button>
            <div className="accordian">
                {Data && Data.length != 0 ? (
                    Data.map((item) => (
                        <div className="item" key={item.id}>
                            <div
                                onClick={
                                    enableMultiSelection
                                        ? () => handleMultiSelection(item.id)
                                        : () => handleSingleSelection(item.id)
                                }
                                className="title"
                            >
                                <h3>{item.name}</h3>
                                <span>+</span>
                            </div>
                            {enableMultiSelection
                                ? multiple.indexOf(item.id) !== -1 && (
                                      <div className="content">
                                          {item.email}
                                      </div>
                                  )
                                : selected === item.id && (
                                      <div className="content">
                                          {item.email}
                                      </div>
                                  )}
                            {/* {selecteed === item.id ||
                            Multiple.indexOf(item.id) !== -1 ? (
                                <div className="content">{item.email}</div>
                            ) : null} */}
                        </div>
                    ))
                ) : (
                    <div>No Data Found</div>
                )}
            </div>
        </div>
    );
}
