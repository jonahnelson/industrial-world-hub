const NumberInput = ({ value, onChange }) => {
  return (
    <input
      className='p-2 focus:outline-none'
      type='number'
      value={value}
      onChange={(e) => {
        onChange(e.target.value);
      }}
    />
  );
};

export default NumberInput;
