import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios  from 'axios';

export default function EditContact() {
    const navigate = useNavigate();
    const prams = useParams();
    const EditInitialInput = { name: " ", email: " ", phone: " " };
    const [EditInputValue, setEditInitialInput] = useState(EditInitialInput);
    const { name, email, phone } = EditInputValue;

    const edithandleChnage = (event) => {
        setEditInitialInput({
            ...EditInputValue,
            [event.target.name]: event.target.value,
        });
    };
    const editSubmitHandler = async (e) => {
        e.preventDefault();
        let id = prams.id;
        const value = { name, email, phone };
           await axios.put(`/contact/${id}`, value)
            .then((result) => {
                navigate("/");
            });
    }

   async function edit() {
       let id = prams.id;
       let response = await axios.get(`/contact/${id}/edit`)
       .then((res) => {
          setEditInitialInput({
              name: res.data.singledata.name,
              email: res.data.singledata.email,
              phone: res.data.singledata.phone,
          });
       });
   }

    useEffect(() =>{
        edit();
    },[])
    return (
        <div className="container">
            <div style={{ paddingTop: "50px" }}>
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <div className="card">
                            <div className="card-header">Update Contact</div>
                            <div className="card-body">
                                <form onSubmit={editSubmitHandler}>
                                    <div className="form-group">
                                        <label htmlFor="ExampleInputName">
                                            Name
                                        </label>
                                        <input
                                            onChange={edithandleChnage}
                                            type="text"
                                            className="form-control"
                                            name="name"
                                            id="name"
                                            placeholder="Enter your name"
                                            value={name}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">
                                            Email
                                        </label>
                                        <input
                                            onChange={edithandleChnage}
                                            type="email"
                                            className="form-control"
                                            name="email"
                                            id="email"
                                            placeholder="Enter your Emaiil"
                                            value={email}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPhone">
                                            Phone
                                        </label>
                                        <input
                                            onChange={edithandleChnage}
                                            type="text"
                                            className="form-control"
                                            name="phone"
                                            id="phone"
                                            placeholder="Phone Number"
                                            value={phone}
                                            required
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                    >
                                        Update
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
