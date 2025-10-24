import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

function NickNamesBarSkeleton({ className }: { className: string }) {
  return (
    <div className={cn("py-2 border-b relative", className)}>
      <Skeleton className="h-6 w-40 mb-2" /> {/* name */}
      <Skeleton className="h-4 w-32 mb-2" /> {/* account number */}
      <Skeleton className="h-5 w-5 absolute top-2 right-2 rounded-full" />{" "}
      <Skeleton className="h-5 w-5 absolute top-2 right-8 rounded-full" />{" "}
      {/* edit icon */}
    </div>
  );
}

export default NickNamesBarSkeleton;
