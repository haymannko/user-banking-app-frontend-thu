import { useMemo } from "react";

function ProfileInfoSection() {
  const profileInfo = useMemo(
    () => [
      { label: "Full Name", value: "Mr San" },
      { label: "Date of Birth", value: "Dec 1, 1999" },
      { label: "Gender", value: "Male" },
      { label: "Nationality", value: "Myanmar" },
    ],
    []
  );

  return (
    <section className="p-3 text-black-pearl-700 rounded-xl border">
      {profileInfo.map((info, index) => (
        <div
          key={info.label}
          className={`flex justify-between items-center py-2 ${
            index !== profileInfo.length - 1 ? "border-b mb-4" : ""
          }`}
        >
          <span className="font-semibold">{info.label}</span>
          <span>{info.value}</span>
        </div>
      ))}
    </section>
  );
}

export default ProfileInfoSection;
