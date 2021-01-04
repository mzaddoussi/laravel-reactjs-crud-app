import axios from 'axios';
import React, {useState, useEffect} from 'react'

function EditMember(props) {

    const id = props.match.params.id;

    const [member, setMember] = useState({
        fname: '',
        lname: '',
        email: '',
        city: ''
    });

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/member/${id}`).
        then(res => {
            const { firstName, lastName, email, city } = res.data;
            setMember({
                fname: firstName,
                lname: lastName,
                email: email,
                city: city,
            })
        });
    }, [])

    const UpdateMember = (e) => {
        e.preventDefault();
        let data = {
            firstName: e.target[0].value,
            lastName: e.target[1].value,
            email: e.target[2].value,
            city: e.target[3].value,
        }

        axios.put(`http://127.0.0.1:8000/api/member/${id}`, data);

        props.history.push('/');
    }
    
    const handleForm = (e) => {
        e.preventDefault();
    }

    return (
        <div className="container add-member mt-5">
            <h2>Edit Memebr :</h2>
            <form className="pt-4" onSubmit={(e) => UpdateMember(e)}>
                <div className="form-group">
                    <label htmlFor="">First name :</label>
                    <input type="text" className="form-control" name="fname" defaultValue={member.fname} onChange={(e) => handleForm(e)} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Last name :</label>
                    <input type="text" className="form-control" name="lname" defaultValue={member.lname} onChange={(e) => handleForm(e)} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Email :</label>
                    <input type="text" className="form-control" name="email" defaultValue={member.email} onChange={(e) => handleForm(e)} />
                </div>
                <div className="form-group">
                    <label htmlFor="">City :</label>
                    <input type="text" className="form-control" name="city" defaultValue={member.city} onChange={(e) => handleForm(e)} />
                </div>
                <button type="submit" className="btn btn-success btn-block">Update member</button>
            </form>
        </div>
    )
}

export default EditMember
