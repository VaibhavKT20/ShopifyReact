export default function Subtitle({ children, style }) {
  return (
    <p
      className={`text-indigo-600 font-serif font-semibold text-lg md:text-xl lg:text-2xl leading-snug tracking-wide ${style}`}
    >
      {children}
    </p>
  );
}
