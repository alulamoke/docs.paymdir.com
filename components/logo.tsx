import { Rocket } from "lucide-react";

export const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <Rocket className="size-5 text-green-400" />
      <p className="font-semibold">PayMdir</p>
    </div>
  );
};
