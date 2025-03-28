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
        padding: "4rem",
      }}
    >
      {/* Logo Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          gap: "24px",
          marginBottom: "auto",
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

      {/* Content Area */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "flex-start",
          flex: 1,
          gap: "2rem",
        }}
      >
        <p
          style={{
            fontWeight: 600,
            fontSize: "76px",
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {props.title}
        </p>
        <p
          style={{
            fontSize: "36px",
            color: "rgba(240,240,240,0.7)",
            lineHeight: 1.2,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {props.description}
        </p>
      </div>
    </div>
  );
}
