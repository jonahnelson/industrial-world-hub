const LabeledInfo = ({ label, info }) => {
  return (
    <div className='flex flex-row gap-2'>
      <p className='text-white font-bold'>{label}:</p>
      <p className='text-white'>{info}</p>
    </div>
  );
};

export default LabeledInfo;
