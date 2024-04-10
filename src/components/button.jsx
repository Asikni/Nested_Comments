function Button({ children, handleClick, classname }) {
  return (
    <div>
      <button onClick={handleClick} className={classname}>
        {children}
      </button>
    </div>
  );
}

export default Button;
