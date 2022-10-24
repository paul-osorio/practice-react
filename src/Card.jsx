const Card = ({ children, disabled }) => {
  return (
    <div
      disabled={disabled}
      className="w-96 h-96 flex justify-end bg-white rounded-2xl shadow-lg"
    >
      {children}
    </div>
  );
};

export default Card;
