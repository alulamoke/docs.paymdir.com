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
  primaryTextColor = "rgb(56,189,248)",
  ...props
}: GenerateProps): ReactElement {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        color: "white",
        backgroundColor: "rgb(2,6,23)",
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><rect width="100%" height="100%" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="1" stroke-dasharray="20,20" transform="rotate(0,0,0)" /><rect width="100%" height="100%" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="1" stroke-dasharray="20,20" transform="rotate(90,0,0)" /></svg>')`,
      }}
    >
      {/* Top right logo */}
      <div
        style={{
          position: "absolute",
          top: "40px",
          right: "40px",
          display: "flex",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <svg
          width="40"
          height="40"
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
                floodColor={primaryTextColor}
                floodOpacity="1"
              />
            </filter>
            <linearGradient
              id="logo-iconGradient"
              gradientTransform="rotate(45)"
            >
              <stop offset="45%" stopColor="black" />
              <stop offset="100%" stopColor={primaryTextColor} />
            </linearGradient>
          </defs>
        </svg>
        <p
          style={{
            fontSize: "28px",
            fontWeight: 600,
            color: primaryTextColor,
          }}
        >
          PayMdir
        </p>
      </div>

      {/* Version number */}
      <div
        style={{
          position: "absolute",
          top: "40px",
          right: "240px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
        }}
      >
        <div
          style={{
            fontSize: "16px",
            color: "rgba(255,255,255,0.6)",
            marginBottom: "4px",
          }}
        >
          Version
        </div>
        <div
          style={{
            fontSize: "80px",
            fontWeight: 600,
            lineHeight: "1",
            color: primaryTextColor,
          }}
        >
          4.0
        </div>
        <div
          style={{
            fontSize: "20px",
            color: "rgba(255,255,255,0.8)",
            marginTop: "4px",
          }}
        >
          docs
        </div>
      </div>

      {/* Main content */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          padding: "4rem",
          paddingTop: "10rem",
        }}
      >
        <p
          style={{
            fontWeight: 600,
            fontSize: "76px",
            display: "-webkit-box",
            WebkitLineClamp: 1,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {props.title}
        </p>
        <p
          style={{
            fontSize: "48px",
            color: "rgba(240,240,240,0.7)",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            marginTop: "1rem",
          }}
        >
          {props.description}
        </p>
      </div>
    </div>
  );
}
