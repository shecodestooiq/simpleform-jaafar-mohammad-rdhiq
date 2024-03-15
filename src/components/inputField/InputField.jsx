const InputField = ({ label, type, value, onChange, required }) => {
  return (
    <div>
      <label for={label}>{label}:</label>
      <input
        type={type}
        id={label}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={label}
        // style={styles.input}
      />
    </div>
  );
};
export default InputField;
