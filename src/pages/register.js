import React from 'react';
import { Form } from 'react-bootstrap';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { Footer } from '../components/layouts';
import requestRegister from '../services/api';
import notification from '../components/utils';

export default function Register() {
  const router = useRouter();
  const [email, setEmail] = React.useState('');
  const [name, setName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error('Password tidak sama', { position: 'top-left' });
    }

    const payload = {
      name,
      email,
      password,
    };

    const res = await requestRegister(payload);
    if (res.status === 400) {
      toast.error(res.data.detail[0].message);
    } else {
      toast.success(res.message);
    }
  };

  return (
    <>
      <div className="auth-page">
        <div className="card card-body">
          <div className="mb-3">
            <h4>Daftar</h4>
            <p>Gabung bersama dengan pengantin lainnya</p>
          </div>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Control
                placeholder="Email"
                name="email"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                placeholder="Nama"
                name="name"
                required
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                placeholder="Password"
                name="password"
                type="password"
                required
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                placeholder="Konfirmasi Password"
                name="password_confirm"
                type="password"
                required
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group>
              <button
                type="submit"
                className="btn btn-primary btn-md btn-block"
              >
                Daftar
              </button>
            </Form.Group>
            <p>
              Sudah punya akun?
              <Link href="/login">
                <a>Login</a>
              </Link>
            </p>
          </Form>
        </div>
      </div>
      <Footer />
    </>
  );
}
