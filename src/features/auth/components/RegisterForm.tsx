import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

import { RadioGroup } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";

type FormData = {
  fullName: string;
  email: string;
  gender: string;
  nationality: string;
  idType: string;
  year: string;
  month: string;
  day: string;
};

const genders = ["Male", "Female", "Other"];
const nationalities = [
  "American",
  "British",
  "Canadian",
  "Australian",
  "Other",
];
const idTypes = ["License", "Passport"];

type RegisterFormProps = {
  onSubmit: (formData: FormData) => void;
};

const RegisterForm: React.FC<RegisterFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    year: "",
    month: "",
    day: "",
    email: "",
    gender: "",
    nationality: "",
    idType: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const validate = () => {
    const newErrors: Partial<FormData> = {};
    if (!formData.fullName) newErrors.fullName = "Full name is required";
    if (!formData.year || !formData.month || !formData.day) {
      newErrors.year = !formData.year ? "Year is required" : undefined;
      newErrors.month = !formData.month ? "Month is required" : undefined;
      newErrors.day = !formData.day ? "Day is required" : undefined;
    }

    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.gender) newErrors.gender = "Gender is required";
    if (!formData.nationality)
      newErrors.nationality = "Nationality is required";
    if (!formData.idType) newErrors.idType = "Select an ID type";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(formData); // call onSubmit prop on successful validation
    }
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

        <label className="block mb-1 font-medium">Date of Birth</label>
        <div className="flex gap-2">
          <Input
            type="number"
            placeholder="YYYY"
            value={formData.year}
            onChange={(e) => handleChange("year", e.target.value)}
            min="1900"
            max={new Date().getFullYear()}
            className="w-1/3"
          />
          <Input
            type="number"
            placeholder="MM"
            value={formData.month}
            onChange={(e) => handleChange("month", e.target.value)}
            min="1"
            max="12"
            className="w-1/3"
          />
          <Input
            type="number"
            placeholder="DD"
            value={formData.day}
            onChange={(e) => handleChange("day", e.target.value)}
            min="1"
            max="31"
            className="w-1/3"
          />
        </div>

        <label htmlFor="email">Email</label>
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => handleChange("email", e.target.value)}
        />

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
              <SelectItem key={gender} value={gender}>
                {gender}
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
              <SelectItem key={nat} value={nat}>
                {nat}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.nationality && (
          <p className="text-sm text-red-500">{errors.nationality}</p>
        )}

        <RadioGroup
          label=""
          value={formData.idType}
          onChange={(val) => handleChange("idType", val)}
          options={idTypes}
          error={errors.idType}
        />

        <Button type="submit">Continue</Button>
      </form>
    </div>
  );
};

export default RegisterForm;
