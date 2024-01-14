// MainButton Component
export default function MainButton({ children, primary, style, onClick, disabled }) {
  return (
    <button
      className={`${
        primary
          ? "bg-gradient-to-r from-green-400 to-blue-500 text-white"
          : "bg-gradient-to-r from-indigo-500 to-purple-600 text-white"
      } py-3 px-6 rounded-md text-lg font-semibold transition-all duration-300 ease-in ${style}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

// Button Component
export function Button({ children, style, buttonStyle, onClick, disabled }) {
  return (
    <button
      className={`${
        buttonStyle
          ? buttonStyle
          : "bg-gradient-to-r from-yellow-400 to-red-500 text-white hover:bg-gradient-to-r hover:from-yellow-500 hover:to-red-600 hover:text-white"
      } py-2 px-4 rounded-md text-base font-medium transition-all duration-300 ease-in ${style}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
