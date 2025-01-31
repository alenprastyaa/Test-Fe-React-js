import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";

const Marketing = () => {
    const [penjualan, setPenjualan] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/penjualan")
            .then(response => {
                setPenjualan(response.data);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }, []);

    return (
        <div className="container mt-4">
            <h2>Data Penjualan</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Nomor Transaksi</th>
                        <th>ID Marketing</th>
                        <th>Tanggal</th>
                        <th>Ongkos Kirim</th>
                        <th>Total</th>
                        <th>Grand Total</th>
                    </tr>
                </thead>
                <tbody>
                    {penjualan.map((item, index) => (
                        <tr key={item.id}>
                            <td>{index + 1}</td>
                            <td>{item.transaction_number}</td>
                            <td>{item.marketing_id}</td>
                            <td>{new Date(item.date).toLocaleDateString()}</td>
                            <td>{parseFloat(item.cargo_fee).toLocaleString("id-ID", { style: "currency", currency: "IDR" })}</td>
                            <td>{parseFloat(item.total_balance).toLocaleString("id-ID", { style: "currency", currency: "IDR" })}</td>
                            <td>{parseFloat(item.grand_total).toLocaleString("id-ID", { style: "currency", currency: "IDR" })}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default Marketing;