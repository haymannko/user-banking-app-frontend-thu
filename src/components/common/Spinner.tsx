function Spinner({
  size = "w-3 h-3",
  className = "",
}: {
  size?: string;
  className?: string;
}) {
  return (
    <div
      className={`border-2 border-t-transparent border-current rounded-full animate-spin ${size} ${className}`}
      role="status"
    />
  );
}

export default Spinner;
