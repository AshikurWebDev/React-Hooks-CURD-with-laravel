import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Delete from "../ReuseableComp/Icon/Delete";
import Pencil from "../ReuseableComp/Icon/Pencil";
import useLoader from "./../CustomHooks/useLoader";
import { useNavigate } from "react-router";

function Contact() {
    const [contact, setContact] = useState([]);
    const [loader, showLoader, hideLoader] = useLoader();
    const navigate = useNavigate();
    async function fetchData() {
        showLoader();
        await axios.get("/contact").then((res) => {
            setContact(...contact, res.data.contacts);
            hideLoader();
        });
    }
    const deleteContact = async (i, id) => {
        let yes = confirm("Are you want to delete this item?");
        if (yes === true) {
            const res = await axios.delete(`/contact/${id}`).then((res) => {
                alert(res.data.deletemsg);
            });
            const newData = contact;
            newData.splice(i, 1);
            setContact(newData);
            navigate("/")
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="container">
            <div style={{ paddingTop: "50px" }}>
                <h2 className="text-center">All Contact</h2>
                <div className="contact-table-body">
                    <table className="table table-hover table-striped">
                        <thead className="thead-dark">
                            <tr className="text-center">
                                <th scope="col">SL</th>
                                <th scope="col">Name</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Email</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {contact.map((data, i) => {
                                return (
                                    <tr key={i}>
                                        <th scope="row">{i + 1}</th>
                                        <td>{data.name}</td>
                                        <td>{data.email}</td>
                                        <td>{data.phone}</td>
                                        <td>
                                            <Link
                                                to={`/edit-contact/${data.id}`}
                                                className="mr-2"
                                            >
                                                <Pencil />
                                            </Link>
                                            <a
                                                onClick={() => {
                                                    deleteContact(i, data.id);
                                                }}
                                            >
                                                <Delete />
                                            </a>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                    {loader}
                </div>
            </div>
        </div>
    );
}

export default Contact;
