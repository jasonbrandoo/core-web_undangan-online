import React from "react";
import { Form } from "react-bootstrap";
import Link from "next/link";
import { Footer } from "../components/layouts/Layout";
import { requestRegister } from "../services/api";
import { useRouter } from "next/router";
import { notification } from "../components/utils";
import { toast } from "react-toastify";

export default function Register() {
  const router = useRouter();
  const [data, setData] = React.useState({});

  const registerHandle = async (e) => {
    e.preventDefault();
    await requestRegister(data).then((res) => {
      toast.dark("registrasi berhasil");
      router.push("/login");
    });
  };

  return (
    <>
      <div className="auth-page">
        <div className="card card-body">
          <div className="mb-3">
            <h4>Daftar</h4>
            <p>Gabung bersama dengan pengantin lainnya</p>
          </div>
          <form>
            <Form.Group>
              <Form.Control
                placeholder="Email"
                name="email"
                onChange={(e) => setData({ ...data, email: e.target.value })}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                placeholder="Nama"
                name="name"
                onChange={(e) => setData({ ...data, name: e.target.value })}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                placeholder="Password"
                name="password"
                type="password"
                onChange={(e) => setData({ ...data, password: e.target.value })}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                placeholder="Konfirmasi Password"
                name="password_confirm"
                type="password"
                onChange={(e) => setData({ ...data, password_confirmation: e.target.value })}
              />
            </Form.Group>
            <Form.Group>
              <button
                type="button"
                onClick={(e) => registerHandle(e)}
                className="btn btn-primary btn-md btn-block"
              >
                Daftar
              </button>
            </Form.Group>
            <p>
              Sudah punya akun? <Link href="/login">Login</Link>
            </p>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
