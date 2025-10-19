import FormFloatinglabelInput from "@/components/common/form-inputs/FormFloatingLabelInput";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import type { Nickname } from "@/types/Nickname";

const NickNamesSchema = z.object({
  accountNumber: z
    .string()
    .min(1, "Account number is required")
    .regex(/^\d+$/, "Account number must contain only numbers"),
  nickName: z
    .string()
    .min(2, "Nickname must be at least 2 characters long")
    .max(30, "Nickname is too long"),
});

type NickNamesFormValue = z.infer<typeof NickNamesSchema>;

type NickNamesFormProps = {
  formData: Nickname | null;
};

function NickNamesForm({ formData }: NickNamesFormProps) {
  const form = useForm<NickNamesFormValue>({
    resolver: zodResolver(NickNamesSchema),
    defaultValues: {
      accountNumber: formData?.accountNumber ?? "",
      nickName: formData?.nickname ?? "",
    },
  });

  const onSubmit = (values: NickNamesFormValue) => {
    console.log("Favorite account set:", values);
  };

  return (
    <div className="">
      <h2 className="text-xl font-semibold text-black-pearl-700 mb-2">
        Set Nickname
      </h2>
      <p className="text-sm text-gray-500 mb-6">
        Assign a nickname to your frequently used transfer account.
      </p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormFloatinglabelInput
            name="accountNumber"
            label="Account Number"
            placeholder="Enter account number"
            form={form}
            wrapperClass="mb-6"
          />
          <FormFloatinglabelInput
            name="nickName"
            label="Nickname"
            placeholder="Enter nickname"
            labelClass=""
            form={form}
            wrapperClass="mb-6"
          />

          <Button type="submit" className="w-full">
            {formData ? "Save" : "Save Changes"}
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default NickNamesForm;
