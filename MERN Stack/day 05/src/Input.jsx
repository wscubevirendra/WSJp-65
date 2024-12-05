import React from 'react';

export default function Input(props) {



    return (
        <div className="d-flex justify-content-center mt-4">
            <input
                onKeyUp={props.getItem}
                className="form-control w-50 p-2 border border-danger rounded"
                placeholder="Add List..."
                type="text"
            />
        </div>
    );
}
