import React from 'react';

export default function Display(props) {
    return (
        <ul className="list-group mt-5">
            {
                props.items.map(
                    (data, index) => {
                        return (
                            <li key={index} className="list-group-item d-flex justify-content-between align-items-center bg-primary text-white mb-1">
                               {data}
                                <button
                                onClick={()=>props.deleteItem(index)}
                                    className="btn btn-danger btn-sm"

                                >
                                    Remove
                                </button>
                            </li>
                        )
                    }
                )
            }
        </ul>
    );
}
