const Button = ({ children, type = 'button', ...props }) => {
  return (
    <button
      type={type}
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;