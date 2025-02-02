import React, { useState, useEffect } from "react";
import { Container, Table, Button, Alert, Form } from "react-bootstrap";
import axios from "axios";

const InstallmentPayment = () => {
    const [transactionId, setTransactionId] = useState("");
    const [transactions, setTransactions] = useState([]);
    const [payments, setPayments] = useState([]);
    const [message, setMessage] = useState(null);

    useEffect(() => {
        const fetchTransactions = async () => {
            try {
                const response = await axios.get("http://localhost:5000/penjualan");
                setTransactions(response.data);
            } catch (error) {
                console.error("Error fetching transactions", error);
            }
        };
        fetchTransactions();
    }, []);

    useEffect(() => {
        const fetchPayments = async () => {
            try {
                const response = await axios.get("http://localhost:5000/payment");
                setPayments(response.data);
            } catch (error) {
                console.error("Error fetching payments", error);
            }
        };
        fetchPayments();
    }, []);

    const handlePayment = async () => {
        try {
            const response = await axios.post("http://localhost:5000/payment", { transaction_id: transactionId });
            setPayments([...payments, response.data]);
            setMessage({ type: "success", text: response.data.message });
        } catch (error) {
            setMessage({ type: "danger", text: error.response?.data?.message || "Payment failed" });
        }
    };

    return (
        <Container className="mt-4">
            <h4>Pembayaran Berangsur</h4>
            <p>Cicilan 12x Terhitung dari Grand Total</p>
            {message && <Alert variant={message.type}>{message.text}</Alert>}
            <div className="mb-3">
                <Form.Select value={transactionId} onChange={(e) => setTransactionId(e.target.value)}>
                    <option value="">Pilih Transaksi Kode Pembayaran</option>
                    {transactions.map((transaction) => (
                        <option key={transaction.id} value={transaction.id}>
                            {transaction.transaction_number}
                        </option>
                    ))}
                </Form.Select>
            </div>
            <Button variant="success" onClick={handlePayment}>Bayar Angsuran</Button>
            <Table striped bordered hover className="mt-3">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Transaction Number</th>
                        <th>Transaction ID</th>
                        <th>Installment Number</th>
                        <th>Amount Paid</th>
                        <th>Remaining Balance</th>
                        <th>Remaining Payments</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {payments.map((payment, index) => {
                        const remainingPayments = payment.remaining_balance > 0 ? Math.ceil(payment.remaining_balance / payment.amount_paid) : 0;
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{payment.transaction_number}</td>
                                <td>{payment.transaction_id}</td>
                                <td>{payment.installment_number}</td>
                                <td>{payment.amount_paid}</td>
                                <td>{payment.remaining_balance}</td>
                                <td>{remainingPayments}</td>
                                <td>{payment.status}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </Container>
    );
};

export default InstallmentPayment;
