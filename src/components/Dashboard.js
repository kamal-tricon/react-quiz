import { apiCalls } from "../services/train.service";
import { Train } from "./admin/train";
import { CommonDropdown } from "./common/dropdown.common";
import { QuizDashboard } from './quiz/QuizDashboard';

import '../styles/dashboard.css';
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { CommonTable } from "./common/common.table";
import { QuizMaster } from "./quiz/QuizMaster";

export function Dashboard() {
    // const data1 = [
    //     {name: 'kamlesh'},
    //     {name: 'maneesh'},
    //     {name: 'ajay'},
    //     {name: 'rohit'},
    // ];
    // const [showDropdown, showHideDropdown] = useState(() => {return false});
    // const [selectedItem, updateSelectedItem] = useState(() => {return ''});
    const [state, updateStateValues] = useState(() => {
        return {
            showStateDropdown: false,
            selectedStateItem: '',
            trains: [],
            searchText: ''
        }
    });
    const [allTrains, updateAllTrains] = useState([]);
    const submitTrain = (train) => {
        console.log(train);
        const requestBody = {
            trainNumber: train.number,
            trainName: train.name
        };
        apiCalls.saveTrain(requestBody).then((data) => {
            console.log(data);
        }).catch((err) => {
            console.log(err);
        });
    }
    const train = {
        name: 'monte',
        number: 'mario'
    };

    const handleDropdownAction = () => {
        // showHideDropdown((prevState) => {return !prevState});
        updateStateValues((prevState) => {
            return {...prevState, showStateDropdown: !prevState.showStateDropdown}
        })
    }

    const onSelectItem = (item) => {
        console.log(item);
        // updateSelectedItem(() => {return item.name});
        // showHideDropdown((prevState) => {return !prevState});
        updateStateValues((prevState) => {
            return {...prevState, selectedStateItem: item.name, searchText: item.name}
        });
        handleDropdownAction();
    }

    const changeTrainText = (event) => {
        updateStateValues((prevState) => {
            return {...prevState, searchText: event.target.value}
        });
        const requestBody = {
            trainName: event.target.value,
            trainNumber: event.target.value
        }
        apiCalls.getMatchingTrains(requestBody).then((trains) => {
            updateStateValues((prevState) => {
                return {...prevState, trains: trains.data.map((train) => {
                    return {name: `${train.trainName} (${train.trainNumber})`};
                }), showStateDropdown: trains.data.length > 0}
            });
            console.log(state.trains);
        }).catch(err => {})
    }
    const getTrainList = () => {
        apiCalls.getAllTrains().then((data) => {
            updateAllTrains(data.data)
            // console.log(allTrains)
        });
    }
    return (
        <div>
            <Router>
                <div className="menu-container">
                    <div className="menu-item">
                        <Link to="/viewtrain" onClick={() => getTrainList()}>View Train</Link>
                    </div>
                    <div className="menu-item">
                        <Link to="/addtrain">Add Train</Link>
                    </div>
                    <div className="menu-item">
                        <Link to="/searchtrain">Search Train</Link>
                    </div>
                    <div className="menu-item">
                        <Link to="/stations">Browse Stations</Link>
                    </div>
                    <div className="menu-item">
                        <Link to="/quiz/dashboard">Go To Quiz</Link>
                    </div>
                    {/* <div className="menu-item">
                        <Link to="/quiz/add">Go To Quiz</Link>
                    </div> */}
                    </div>
                    <Switch>
                         <Route path="/viewtrain">
                          {allTrains.length > 0 && <CommonTable trainList={allTrains} />}
                        </Route>
                        <Route path="/addtrain">
                        <Train train={train} submitTrain={(trainObject) => submitTrain(trainObject)} />
                        </Route>
                        <Route path="/quiz/dashboard">
                        <QuizDashboard />
                        </Route>
                        <Route path="/quiz/add">
                        <QuizMaster />
                        </Route>
                        <Route path="/searchtrain">
                            <div className="filter-item">
                                <div className="fieldset-div">
                                    <input type="text" 
                                    placeholder="Search train"
                                    className="search-input-field"
                                    value={state.searchText} 
                                    onChange={(event) => changeTrainText(event)}
                                    />
                                </div>
                                {
                                    state.showStateDropdown && 
                                    <div className="dropdown-parent-container">
                                        <CommonDropdown list={state.trains} fieldName={'name'} onSelectItem={(item) => onSelectItem(item)}/>
                                    </div>
                                }
                            </div>
                        </Route>
                    </Switch>
                
            </Router>
            </div>
        
    );
}