import React, { useEffect, useState } from 'react';
import api from '../api/axios';
import { Helmet } from "react-helmet-async";

export default function Dashboard() {
  const [billing, setBilling] = useState({});
  const [orders, setOrders] = useState([]);
  const [payments, setPayments] = useState([]);
  const [status, setStatus] = useState('');

  const load = async () => {
    try {
      const b = await api.get('/api/billing');
      setBilling(b.data || {});
      const o = await api.get('/api/orders');
      setOrders(o.data || []);
      const p = await api.get('/api/payments');
      setPayments(p.data || []);
    } catch (err) {
      setStatus('Please login.');
    }
  };

  useEffect(() => { load(); }, []);

  const onBillingChange = (e) => setBilling((b) => ({ ...b, [e.target.name]: e.target.value }));
  const saveBilling = async () => {
    setStatus('');
    try {
      await api.put('/api/billing', billing);
      setStatus('Billing saved.');
      load();
    } catch (err) {
      setStatus('Failed to save billing.');
    }
  };

  const createOrder = async () => {
    setStatus('');
    try {
      const res = await api.post('/api/orders', {
        items: [{ title: 'Strategy Workshop', price: 4999, qty: 1 }],
        total: 4999
      });
      setStatus('Order created.');
      setOrders([res.data, ...orders]);
    } catch (err) {
      setStatus('Failed to create order.');
    }
  };

  const payFirstPending = async () => {
    setStatus('');
    const pending = orders.find(o => o.status === 'pending');
    if (!pending) return setStatus('No pending orders.');
    try {
      const res = await api.post('/api/payments', { orderId: pending._id, amount: pending.total });
      setStatus('Payment succeeded.');
      // Reload orders and payments
      load();
    } catch (err) {
      setStatus('Payment failed.');
    }
  };

  return (
    <>
  <Helmet>
    <title>Client Dashboard</title>

    <meta
      name="robots"
      content="noindex, nofollow"
    />
  </Helmet>
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold">Client Dashboard</h1>
      {status && <div className="mt-4">{status}</div>}

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-lg border border-neutral-800 bg-neutral-900 p-5">
          <h2 className="text-xl font-semibold">Billing</h2>
          <div className="mt-4 space-y-3">
            <input name="address" placeholder="Address" value={billing.address || ''} onChange={onBillingChange}
              className="w-full bg-neutral-950 border border-neutral-800 rounded px-3 py-2"/>
            <input name="city" placeholder="City" value={billing.city || ''} onChange={onBillingChange}
              className="w-full bg-neutral-950 border border-neutral-800 rounded px-3 py-2"/>
            <input name="country" placeholder="Country" value={billing.country || ''} onChange={onBillingChange}
              className="w-full bg-neutral-950 border border-neutral-800 rounded px-3 py-2"/>
            <input name="zip" placeholder="ZIP" value={billing.zip || ''} onChange={onBillingChange}
              className="w-full bg-neutral-950 border border-neutral-800 rounded px-3 py-2"/>
            <button onClick={saveBilling} className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-500">Save</button>
          </div>
        </div>

        <div className="rounded-lg border border-neutral-800 bg-neutral-900 p-5">
          <h2 className="text-xl font-semibold">Orders</h2>
          <button onClick={createOrder} className="mt-3 px-4 py-2 rounded bg-green-600 hover:bg-green-500">Create Order</button>
          <div className="mt-4 space-y-3">
            {orders.map(o => (
              <div key={o._id} className="border border-neutral-800 rounded p-3">
                <div>Total: ${o.total}</div>
                <div>Status: {o.status}</div>
              </div>
            ))}
          </div>
          <button onClick={payFirstPending} className="mt-3 px-4 py-2 rounded bg-purple-600 hover:bg-purple-500">Pay Pending</button>
        </div>
      </div>

      <div className="mt-8 rounded-lg border border-neutral-800 bg-neutral-900 p-5">
        <h2 className="text-xl font-semibold">Payments</h2>
        <div className="mt-4 space-y-3">
          {payments.map(p => (
            <div key={p._id} className="border border-neutral-800 rounded p-3">
              <div>Amount: ${p.amount}</div>
              <div>Status: {p.status}</div>
              <div>Transaction: {p.txnId}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}
