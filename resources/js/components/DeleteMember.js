import React from 'react';
import axios from 'axios';

function DeleteMember(props) {
    const id = props.match.params.id;
    return (
        <div>
            {
                axios.delete(`http://127.0.0.1:8000/api/member/${id}`)
            }
        </div>
    )
}

export default DeleteMember
