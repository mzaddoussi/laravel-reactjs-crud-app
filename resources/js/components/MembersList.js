import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function MembersList() {

    const [member, setMember] = useState([]);

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/member")
            .then(res => {
                setMember([...res.data]);
            })
    }, [])

    const deleteMember = (id, e) => {
        e.preventDefault();
        const result = member.filter(m => m.id != id);
        setMember(result);
        axios.delete(`http://127.0.0.1:8000/api/member/${id}`)
    }

    return (
        <div className="container app-container">
            <div className="listMember mt-4">
                <h2>Members list :</h2>
                <table className="table mt-5">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>First name</th>
                            <th>Last name</th>
                            <th>Email</th>
                            <th>City name</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            member.map(row => (
                                <tr key={row.id}>
                                    <td> {row.id} </td>
                                    <td> {row.firstName} </td>
                                    <td> {row.lastName} </td>
                                    <td> {row.email} </td>
                                    <td> {row.city} </td>
                                    <td>
                                        <Link to={`/edit/${row.id}`}>Edit</Link>
                                    </td>
                                    <td>
                                        <a href="" onClick={(e) => deleteMember(row.id, e)}>delete</a>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default MembersList
