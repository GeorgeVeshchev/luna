// src/app/components/RegisterForm.tsx
"use client";
import React, { useState } from 'react';
import styles from '../styles/Register.module.css';
import chad from '../../../public/chad.png';

interface RegisterFormProps {
  onSubmit: (data: { email: string; name: string; password: string }) => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    password: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleCreateAccount = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData); 
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.logoContainer}>
        <img src={chad.src} alt="Chad Logo" className={styles.logo} />
        <h2 className={styles.title}>Chad</h2>
      </div>

      <form className={styles.form} onSubmit={handleCreateAccount}>
        <label className={styles.label}>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className={styles.input}
          placeholder="megachad@trychad.com"
          required
        />

        <label className={styles.label}>Your Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          className={styles.input}
          placeholder="Mega Chad"
          required
        />

        <label className={styles.label}>Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          className={styles.input}
          placeholder="Enter your password"
          required
        />

        <button type="submit" className={styles.button}>
          Create account
        </button>
      </form>

      <p className={styles.footerText}>
        Already have an account? <a href="/login" className={styles.link}>Log in</a>
      </p>
    </div>
  );
};

export default RegisterForm;
