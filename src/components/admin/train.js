import { useState } from "react";
// import { CommonTable } from "../common/common.table";

export function Train({train, submitTrain}) {
    if (!train) {
        train = {
            name: '',
            number: ''
        };
    }

    const [trainObject, updateValue] = useState(train);

    const changeValue = (key, event) => {
        if (key === 'name') {
            updateValue({...trainObject, name: event.target.value});
        } else if (key === 'number') {
            updateValue({...trainObject, number: event.target.value});
        }
    }
    return (
        <div className="add-train-container">
            <div className="heading">Add Train Details</div>
            <form name="train-input-form">
                <div>
                    <label htmlFor="trainname" className="form-label">Train Name</label>
                    <input id="trainname" className="form-control" type="text" maxLength="40" value={trainObject.name} onChange={(event) => changeValue('name', event)} />
                </div>
                <div>
                    <label htmlFor="trainnumber" className="form-label">Train Number</label>
                    <input id="trainnumber" className="form-control" type="text" maxLength="5" value={trainObject.number} onChange={(event) => changeValue('number', event)} />
                </div>
            </form>
            <button className="add-button" onClick={() => submitTrain(trainObject)}>Submit</button>
            {/* <CommonTable selectedTrain={trainObject.number}></CommonTable> */}
        </div>
    );
}
