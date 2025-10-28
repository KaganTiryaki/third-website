import { Droplet } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] py-12">
      <div className="relative">
        <div className="animate-spin rounded-full h-24 w-24 border-4 border-primary/20 border-t-primary" />
        <Droplet className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-10 w-10 text-primary animate-pulse" />
      </div>
      <p className="mt-6 text-muted-foreground animate-pulse">Loading...</p>
    </div>
  );
}
