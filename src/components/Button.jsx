function Button({ children, variant = 'primary', ...props }) {
  const baseClasses = "px-4 py-2 rounded font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500",
    secondary: "bg-gray-200 hover:bg-gray-300 text-gray-800 focus:ring-gray-500",
    success: "bg-green-600 hover:bg-green-700 text-white focus:ring-green-500",
    danger: "bg-red-600 hover:bg-red-700 text-white focus:ring-red-500",
  };
  
  const classes = `${baseClasses} ${variants[variant] || variants.primary}`;
  
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

export default Button
