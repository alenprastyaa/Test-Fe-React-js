import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";

const Komisi = () => {
    const [komisi, setKomisi] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/komisi")
            .then(response => {
                setKomisi(response.data);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }, []);

    return (
        <div className="container mt-4">
            <h2>Data Komisi</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Marketing</th>
                        <th>Bulan</th>
                        <th>Omzet</th>
                        <th>Komisi (%)</th>
                        <th>Komisi Nominal</th>
                    </tr>
                </thead>
                <tbody>
                    {komisi.map((item, index) => (
                        <tr key={index}>
                            <td>{item.marketing}</td>
                            <td>{item.bulan}</td>
                            <td>{parseFloat(item.omzet).toLocaleString("id-ID", { style: "currency", currency: "IDR" })}</td>
                            <td>{item.komisi_persen}</td>
                            <td>{parseFloat(item.komisi_nominal).toLocaleString("id-ID", { style: "currency", currency: "IDR" })}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default Komisi;
