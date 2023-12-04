const NumberInput = ({ value, onChange }) => {
  return (
    <input
      className='p-2'
      type='number'
      value={value}
      onChange={(e) => {
        onChange(e.target.value);
      }}
    />
  );
};

export default NumberInput;
