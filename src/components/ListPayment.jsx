import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Container } from 'react-bootstrap';

const ListPayment = () => {
    const [payments, setPayments] = useState([]);

    useEffect(() => {
        // Memanggil API untuk mendapatkan data pembayaran
        axios.get('http://localhost:5000/payment')
            .then(response => {
                setPayments(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the payment data!', error);
            });
    }, []);

    return (
        <Container>
            <h4 className="my-4">Histori Pembayaran</h4>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Transaction Number</th>
                        <th>Marketing</th>
                        <th>Payment Date</th>
                        <th>Amount Paid</th>
                        <th>Remaining Balance</th>
                        <th>Remaining Payments</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {payments.map((payment, index) => {
                        const totalBalance = payment.total_balance || 0;
                        const remainingBalance = payment.remaining_balance || 0;
                        const remainingPayments = payment.amount_paid > 0 ? Math.ceil(remainingBalance / payment.amount_paid) : 0;

                        return (
                            <tr key={payment.id}>
                                <td>{index + 1}</td>
                                <td>{payment.transaction_number}</td>
                                <td>{payment.marketing}</td>
                                <td>{new Date(payment.payment_date).toLocaleDateString("id-ID")}</td>
                                <td>{payment.amount_paid.toLocaleString()}</td>
                                <td>{remainingBalance.toLocaleString()}</td>
                                <td>{remainingPayments}</td>
                                <td>{payment.status === "BELUM_LUNAS" ? 'Belum Lunas' : 'Lunas'}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </Container>
    );
};

export default ListPayment;