import { ImageResponse } from "next/og";
import type { ReactElement, ReactNode } from "react";
import type { ImageResponseOptions } from "next/dist/compiled/@vercel/og/types";

interface GenerateProps {
  title: ReactNode;
  description?: ReactNode;
  primaryTextColor?: string;
}

export function generateOGImage(
  options: GenerateProps & ImageResponseOptions
): ImageResponse {
  const { title, description, primaryTextColor, ...rest } = options;

  return new ImageResponse(
    generate({
      title,
      description,
      primaryTextColor,
    }),
    {
      width: 1200,
      height: 630,
      ...rest,
    }
  );
}

export function generate({
  primaryTextColor = "rgb(255,150,255)",
  ...props
}: GenerateProps): ReactElement {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        backgroundColor: "rgb(10,10,10)",
        backgroundImage:
          "linear-gradient(rgba(255, 255, 255, 0.065) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.065) 1px, transparent 1px)",
        backgroundSize: "10px 10px",
        padding: "4rem",
        gap: "4rem",
      }}
    >
      {/* Title & Description - Top Left */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          maxWidth: "80%",
        }}
      >
        <h1
          style={{
            fontWeight: 600,
            fontSize: "76px",
            color: "white",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {props.title}
        </h1>
        <p
          style={{
            fontSize: "36px",
            color: "rgba(240,240,240,0.7)",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {props.description}
        </p>
      </div>

      {/* Logo - Bottom Right */}
      <div
        style={{
          marginTop: "auto",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          gap: "24px",
          color: primaryTextColor,
        }}
      >
        <svg
          width="60"
          height="60"
          viewBox="0 0 180 180"
          filter="url(#logo-shadow)"
        >
          <circle cx="90" cy="90" r="86" fill="url(#logo-iconGradient)" />
          <defs>
            <filter id="logo-shadow" colorInterpolationFilters="sRGB">
              <feDropShadow
                dx="0"
                dy="0"
                stdDeviation="4"
                floodColor="white"
                floodOpacity="1"
              />
            </filter>
            <linearGradient
              id="logo-iconGradient"
              gradientTransform="rotate(45)"
            >
              <stop offset="45%" stopColor="black" />
              <stop offset="100%" stopColor="white" />
            </linearGradient>
          </defs>
        </svg>
        <p
          style={{
            fontSize: "46px",
            fontWeight: 600,
          }}
        >
          PayMdir
        </p>
      </div>
    </div>
  );
}
