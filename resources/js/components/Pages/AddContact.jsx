import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";

export default function AddContact() {
    const navigate = useNavigate();
    const intialValue = { name: " ", email: " ", phone: " " };
    const [inputValue, setInputValue] = useState(intialValue);
    const { name, email, phone } = inputValue;

    const handleChnage = (event) => {
         setInputValue({
             ...inputValue,
             [event.target.name]: event.target.value,
         });
    };
    const SubmitHandler = async (e) => { 
        e.preventDefault();
            const value = { name, email, phone };
            let res = await axios
                .post("/contact", value)
                .then((result) => {
                    setInputValue(intialValue);
                    navigate("/");
                })
                .catch((err) => {
                    console.log(err);
                }); 
    };
    return (
        <div className="container">
            <div style={{ paddingTop: "50px" }}>
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <div className="card">
                            <div className="card-header">Contact Form</div>
                            <div className="card-body">
                                <form onSubmit={SubmitHandler}>
                                    <div className="form-group">
                                        <label htmlFor="ExampleInputName">
                                            Name
                                        </label>
                                        <input
                                            onChange={handleChnage}
                                            type="text"
                                            className="form-control"
                                            name="name"
                                            id="name"
                                            aria-placeholder="hello"
                                            value={name}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">
                                            Email
                                        </label>
                                        <input
                                            onChange={handleChnage}
                                            type="email"
                                            className="form-control"
                                            name="email"
                                            id="email"
                                            placeholder="Enter your Email"
                                            value={email}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPhone">
                                            Phone
                                        </label>
                                        <input
                                            onChange={handleChnage}
                                            type="number"
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
                                        Submit
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

//   <small id="emailHelp" className="form-text text-muted">
//       We'll never share your email with anyone else.
//   </small>;
