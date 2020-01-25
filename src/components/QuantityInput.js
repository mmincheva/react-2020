import React, { useState } from 'react';

const QuantityInput = props => {

    const getQuantityMessage = count => {

        if (count > 7){
            return <div className="alert alert-success">All good !</div>
        }
        if (count < 3){
            return <div className="alert alert-danger">Very bad !</div>
        }
        
        return <div className="alert alert-info">Almost there...</div>
        
        
    }
    const [count, setCount] = useState(props.count);

    return (

        <div>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <button onClick={() => setCount(count - 1)} type="button" className="btn btn-outline-danger" >
                        <i class="fa fa-minus-circle"></i>
                    </button>
                </div>
                <input readOnly value={count} type="text-center" class="form-control" />
                <div class="input-group-append">
                    <button onClick={() => setCount(count + 1)} type="button" class="btn btn-outline-success">
                        <i class="fa fa-plus-circle"></i>
                    </button>
                </div>
            </div>
            {getQuantityMessage(count)}
        </div>

    )
}


export default QuantityInput;