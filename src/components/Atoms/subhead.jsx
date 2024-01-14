export default function SubHead({ children, width, color, style }) {
  return (
    <h2
      className={`${
        width ? width : "w-full"
      } ${color ? color : "text-teal-500"} font-extrabold text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight ${style}`}
    >
      {children}
    </h2>
  );
}
