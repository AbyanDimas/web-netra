'use client'

import { useState } from "react";
import FormInput from "./FormInput";
import FormCheckbox from "./FormCheckbox";
import FormSubmitButton from "./FormSubmitButton";
import FormInfoSection from "./FormInfoSection";
import { User, Mail } from "lucide-react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [agree, setAgree] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; email?: string; agree?: string }>({});

  const validateForm = () => {
    const newErrors: { name?: string; email?: string; agree?: string } = {};
    if (!name) newErrors.name = "Nama lengkap wajib diisi.";
    if (!email) {
      newErrors.email = "Email wajib diisi.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email tidak valid.";
    }
    if (!agree) newErrors.agree = "Anda harus menyetujui persyaratan.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Formulir berhasil dikirim!");
      // Lakukan aksi submit di sini, misalnya mengirim data ke API
    }
  };

  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      {/* Left Side - Form */}
      <div className="w-full md:w-1/2 bg-gray-900 text-white p-6 md:p-10 flex flex-col justify-center pt-[68px] md:pt-0">
        <h2 className="text-2xl font-bold">
          Formulir Pendataan Komunitas Netra ADB
        </h2>
        <p className="text-sm text-gray-400 mb-4">
          Silakan isi formulir di bawah ini untuk keperluan pendataan.
        </p>
        <form onSubmit={handleSubmit} className="mt-4">
          <FormInput
            icon={User}
            type="text"
            placeholder="Masukkan nama lengkap"
            value={name}
            onChange={(e) => setName(e.target.value)}
            error={errors.name}
          />
          <FormInput
            icon={Mail}
            type="email"
            placeholder="Masukkan email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={errors.email}
          />
          <FormCheckbox
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
            error={errors.agree}
          />
          <FormSubmitButton />
        </form>
      </div>

      {/* Right Side - Info */}
      <FormInfoSection />
    </div>
  );
};

export default Form;