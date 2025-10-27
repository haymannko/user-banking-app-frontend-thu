import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { register } from "../hooks/authReducer";
import type { AppDispatch } from "../../../app/store/store";

import { toast } from "react-toastify";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RadioGroup } from "@/components/ui/radio-group";

type FormData = {
  fullName: string;
  email: string;
  gender: string; // stores gender ID as string
  nationality: string; // stores nationality ID as string
  idType: string; // License / Passport
  year: string;
  month: string;
  day: string;
};

const genders = [
  { id: 1, name: "Male" },
  { id: 2, name: "Female" },
  { id: 3, name: "Other" },
];

const nationalities = [
  { id: 1, name: "Myanmar" },
  { id: 2, name: "Thailand" },
  { id: 3, name: "Singapore" },
  { id: 4, name: "Malaysia" },
  { id: 5, name: "Indonesia" },
  { id: 6, name: "Philippines" },
  { id: 7, name: "Vietnam" },
  { id: 8, name: "Japan" },
  { id: 9, name: "South Korea" },
  { id: 10, name: "China" },
];

const idTypes = ["License", "Passport"];

const RegisterForm: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { isLoading } = useSelector((state: any) => state.auth);

  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    gender: "",
    nationality: "",
    idType: "",
    year: "",
    month: "",
    day: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const validate = () => {
    const newErrors: Partial<FormData> = {};
    if (!formData.fullName) newErrors.fullName = "Full name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.gender) newErrors.gender = "Gender is required";
    if (!formData.nationality)
      newErrors.nationality = "Nationality is required";
    if (!formData.idType) newErrors.idType = "ID type is required";
    if (!formData.year) newErrors.year = "Year is required";
    if (!formData.month) newErrors.month = "Month is required";
    if (!formData.day) newErrors.day = "Day is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Compose YYYY-MM-DD
    const dob = `${formData.year.padStart(4, "0")}-${formData.month.padStart(
      2,
      "0"
    )}-${formData.day.padStart(2, "0")}`;

    const payload = {
      email: formData.email,
      fullname: formData.fullName,
      dateOfBirth: dob,
      genderId: parseInt(formData.gender),
      nationalityId: parseInt(formData.nationality),
      kycType: formData.idType,
      kycData: formData.fullName, // or replace with another input if needed
    };

    dispatch(register(payload))
      .unwrap()
      .then((user: any) => {
        toast.success(`Registered new user - ${user.name}`);
        navigate("/");
      })
      .catch((err: any) => {
        toast.error("Registration failed. Please try again.");
        console.error(err);
      });
  };

  return (
    <div className="register-container">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <label htmlFor="fullName">Full Name</label>
        <Input
          id="fullName"
          value={formData.fullName}
          onChange={(e) => handleChange("fullName", e.target.value)}
        />
        {errors.fullName && (
          <p className="text-sm text-red-500">{errors.fullName}</p>
        )}

        <label className="block mb-1 font-medium">Date of Birth</label>
        <div className="flex gap-2">
          <Input
            type="number"
            placeholder="YYYY"
            value={formData.year}
            onChange={(e) => handleChange("year", e.target.value)}
            className="w-1/3"
          />
          <Input
            type="number"
            placeholder="MM"
            value={formData.month}
            onChange={(e) => handleChange("month", e.target.value)}
            className="w-1/3"
          />
          <Input
            type="number"
            placeholder="DD"
            value={formData.day}
            onChange={(e) => handleChange("day", e.target.value)}
            className="w-1/3"
          />
        </div>
        {(errors.year || errors.month || errors.day) && (
          <p className="text-sm text-red-500">
            {errors.year || errors.month || errors.day}
          </p>
        )}

        <label htmlFor="email">Email</label>
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => handleChange("email", e.target.value)}
        />
        {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}

        <label htmlFor="gender">Gender</label>
        <Select
          value={formData.gender}
          onValueChange={(val) => handleChange("gender", val)}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select gender" />
          </SelectTrigger>
          <SelectContent>
            {genders.map((gender) => (
              <SelectItem key={gender.id} value={gender.id.toString()}>
                {gender.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.gender && (
          <p className="text-sm text-red-500">{errors.gender}</p>
        )}

        <label htmlFor="nationality">Nationality</label>
        <Select
          value={formData.nationality}
          onValueChange={(val) => handleChange("nationality", val)}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select nationality" />
          </SelectTrigger>
          <SelectContent>
            {nationalities.map((nat) => (
              <SelectItem key={nat.id} value={nat.id.toString()}>
                {nat.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.nationality && (
          <p className="text-sm text-red-500">{errors.nationality}</p>
        )}

        <RadioGroup
          label="ID Type"
          value={formData.idType}
          onChange={(val: string) => handleChange("idType", val)}
          options={idTypes}
        />
        {errors.idType && (
          <p className="text-sm text-red-500">{errors.idType}</p>
        )}

        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Registering..." : "Continue"}
        </Button>
      </form>
    </div>
  );
};

export default RegisterForm;
