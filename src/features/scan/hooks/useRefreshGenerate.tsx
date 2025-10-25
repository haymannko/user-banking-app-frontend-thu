import { useGenerateQRToPayQR } from "@/queries/scan.query";
import { useEffect, useRef, useState } from "react";

function useRefreshGenerate(limit: number) {
  const [timeleft, setTimeleft] = useState(limit);
  const [qrToken, setQrToken] = useState<string | null>(null);
  const isRefreshingRef = useRef(false);

  const { mutateAsync: generate, isPending: isPendingGenerate } =
    useGenerateQRToPayQR();

  const refresh = async () => {
    if (isRefreshingRef.current) return;

    isRefreshingRef.current = true;
    try {
      const res = await generate({ fromAccountId: 0 });
      setQrToken(res.data.token ?? "API မရတာ backend ပါ။");
    } finally {
      // restart countdown
      setTimeleft(limit);
      isRefreshingRef.current = false;
    }
  };

  useEffect(() => {
    refresh();

    const id = setInterval(() => {
      setTimeleft((prev) => {
        if (prev <= 1) {
          refresh();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(id);
  }, [limit]);

  return {
    qrToken,
    timeleft,
    isPending: isPendingGenerate || isRefreshingRef.current,
  };
}

export default useRefreshGenerate;
