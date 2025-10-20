"use client";

import { useCallback, useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import QRToRecieveActions from "./QRToRecieveActions";
import QRToRecieveQRDisplay from "./QRToRecieveQRDisplay";
import QRToRecieveAmountSetupForm from "./QRToRecieveAmountSetupForm";
import { errorToast } from "@/lib/helper/customToasts";
import MobileHeader from "@/components/core/MobileHeader";

//TODO: have to combine logic with react query and also have to implement handle submint inside the form

function QRToRecieveSection() {
  const [isQRGenerated, setIsQRGenerated] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(true);

  const handleDialogOnGenerate = useCallback(() => {
    setIsQRGenerated(true);
    setIsDialogOpen(false);
  }, [isQRGenerated, isDialogOpen]);

  return (
    <div className="max-w-4xl h-full w-full text-black-pearl-700 flex flex-col md:flex-row justify-between items-center gap-8 pb-10 p-6 mx-auto border-gray-100">
      <MobileHeader backTo="/" title="QR to Recieve" />
      <QRToRecieveQRDisplay />
      <div className="flex flex-col w-full md:w-1/2 gap-5">
        <QRToRecieveActions />
        <Dialog
          open={isDialogOpen}
          onOpenChange={(open) => {
            //*dialog can't be open until qr generate
            if (!isQRGenerated) {
              errorToast("Sorry :(", "You need to fill the form first!!");
              return;
            }
            setIsDialogOpen(open);
          }}
        >
          <DialogTrigger asChild>
            <Button>Setup Receive Amount</Button>
          </DialogTrigger>

          <DialogContent className="md:max-w-lg max-w-[350px]">
            <QRToRecieveAmountSetupForm
              handleDialogOnGenerate={handleDialogOnGenerate}
            />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

export default QRToRecieveSection;
