import { FC } from "react";
import Image from "next/image";

const LOGOS = [
  { name: "Master Card", src: "/banks/master-card.png" },
  { name: "Visa", src: "/banks/visa.png" },
  { name: "CBE", src: "/banks/cbe.png" },
  { name: "Abyssinia", src: "/banks/abyssinia.png" },
  { name: "Telebirr", src: "/banks/telebirr.png" },
  { name: "Dashen", src: "/banks/dashen.png" },
  { name: "Enat", src: "/banks/enat.png" },
  { name: "Liom", src: "/banks/lion.png" },
  { name: "Oromia", src: "/banks/oromia.png" },
  { name: "Wegagen", src: "/banks/wegagen.png" },
  { name: "Zemen", src: "/banks/zemen.png" },
  { name: "Abay", src: "/banks/abay.png" },
];

const SupportedPayments: FC = () => (
  <div className="py-12 bg-gray-900">
    <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
      {[...Array(2)].map((_, i) => (
        <ul
          key={i}
          className="flex items-center justify-center md:justify-start animate-infinite-scroll"
        >
          {LOGOS.map((logo) => (
            <li key={logo.name}>
              <Image
                src={logo.src}
                alt={logo.name}
                width={64}
                height={64}
                className="aspect-square mx-16 shrink-0 md:size-16 transition-all duration-300"
              />
            </li>
          ))}
        </ul>
      ))}
    </div>
  </div>
);

export default SupportedPayments;
