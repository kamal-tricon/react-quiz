import '../../styles/common.dropdown.css';

export function CommonDropdown({list, fieldName, onSelectItem}) {

    return (
        <>
            <div className="dropdown-container">
            {
                // list.map((item) => { return 
                //     (<div className="single-dropdown-item" onClick={onSelectItem(item)} key={item[fieldName]}>{item[fieldName]}</div>)
                // })

                list.map((item) => {
                    return (
                        <div className="single-dropdown-item" 
                        onClick={() => onSelectItem(item)} 
                        key={item[fieldName]}
                        title={item[fieldName]}>{item[fieldName]}</div>
                    )
                })
            }
            </div>
        </>
    );

}