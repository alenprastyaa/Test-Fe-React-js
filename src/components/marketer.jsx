import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";

const Penjual = () => {
    const [penjual, setPenjual] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/penjualan/penjual")
            .then(response => {
                setPenjual(response.data);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }, []);

    return (
        <div className="container mt-4">
            <h2>Data Penjual</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID Penjual</th>
                        <th>Nama Penjual</th>
                    </tr>
                </thead>
                <tbody>
                    {penjual.map((item, index) => (
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>

                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default Penjual;