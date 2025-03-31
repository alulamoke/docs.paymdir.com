import Image from "next/image";
import LOGO from "@/public/logo.png";

export const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <Image
        alt="Logo"
        src={LOGO}
        width={24}
        height={24}
        className="rounded-full object-cover size-6"
      />
      <p className="font-semibold">PayMdir</p>
    </div>
  );
};
