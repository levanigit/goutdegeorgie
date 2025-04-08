interface StarIconProps {
  filled: boolean;
  half?: boolean;
}

export const StarIcon: React.FC<StarIconProps> = ({ filled, half }) => (
  <svg
    width="20"
    height="17"
    viewBox="0 0 20 17"
    fill="none"
    role="img"
    aria-label="Star icon"
  >
    <defs>
      <linearGradient id="halfGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="50%" style={{ stopColor: "#FFBB00", stopOpacity: 1 }} />
        <stop
          offset="50%"
          style={{ stopColor: "transparent", stopOpacity: 1 }}
        />
      </linearGradient>
    </defs>
    <path
      d="M9.75653 13.6975L14.4883 16.2075C15.3548 16.6675 16.4152 15.9875 16.1872 15.1275L14.933 10.4075L19.1175 7.2275C19.8814 6.6475 19.4709 5.5475 18.4676 5.4775L12.9605 5.0675L10.8055 0.6075C10.4178 -0.2025 9.09522 -0.2025 8.70756 0.6075L6.5526 5.0575L1.0455 5.4675C0.0421383 5.5375 -0.368329 6.6375 0.395596 7.2175L4.58008 10.3975L3.32588 15.1175C3.09784 15.9775 4.15821 16.6575 5.02475 16.1975L9.75653 13.6975Z"
      fill={filled ? "#FFBB00" : half ? "url(#halfGradient)" : "none"}
      stroke={filled ? "none" : "#FFBB00"}
      strokeWidth={filled ? "0" : "1.4"} /* Double border for empty stars */
    />
  </svg>
);
