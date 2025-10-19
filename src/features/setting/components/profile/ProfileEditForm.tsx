import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import FormTextInput from "@/components/common/form-inputs/FormTextInput";
import FormDateInput from "@/components/common/form-inputs/FormDateInput";
import FormSelectInput from "@/components/common/form-inputs/FormSelectInput";
import { Button } from "@/components/ui/button";

const ProfileEditSchema = z.object({
  fullName: z.string(),
  dob: z.string(),
  genderId: z.string(),
  nationality: z.string(),
});

type ProfileEditFormValue = z.infer<typeof ProfileEditSchema>;

function ProfileEditForm() {
  const form = useForm<ProfileEditFormValue>({
    resolver: zodResolver(ProfileEditSchema),
  });

  return (
    <div>
      <Form {...form}>
        <form className="text-black-pearl-700">
          <div className="md:grid grid-cols-2 gap-3">
            <FormTextInput
              name="fullName"
              label="Full Name"
              placeholder="Enter your fullname"
              form={form}
              wrapperClass="mb-4"
              className="py-7"
              labelClass="text-base text-black-preal-700"
            />
            <FormDateInput
              name="dob"
              label="DOB"
              type="date"
              placeholder="Enter your date of birth"
              form={form}
              wrapperClass="mb-4"
              minDate={new Date("1950-01-01")}
              maxDate={new Date()}
              className="py-7"
              labelClass="text-base text-black-preal-700"
            />
            <FormSelectInput
              name="genderId"
              label="Gender"
              placeholder="Choose your gender"
              form={form}
              options={[
                {
                  label: "Male",
                  value: "1",
                },
                {
                  label: "Female",
                  value: "2",
                },
              ]}
              wrapperClass="mb-4"
              className="py-7"
              labelClass="text-base text-black-preal-700"
            />
            <FormSelectInput
              name="nationality"
              label="Nationality"
              placeholder="Select Nationality"
              form={form}
              wrapperClass="mb-4"
              options={[
                {
                  label: "Myanmar",
                  value: "myanmar",
                },
                {
                  label: "Thailand",
                  value: "thailand",
                },
              ]}
              className="py-7"
              labelClass="text-base text-black-preal-700"
            />
          </div>
          <Button type="submit" className="w-full text-lg py-6">
            Save Changes
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default ProfileEditForm;
