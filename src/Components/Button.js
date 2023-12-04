import { MultipleStyles } from '../Utilities';

const Button = ({ onPress, text, className, disabled }) => {
  return (
    <div className={className}>
      <button
        className={MultipleStyles([
          disabled
            ? 'bg-sky-200 text-gray-400'
            : ' hover:bg-sky-700 text-white bg-sky-600',
          'rounded-full  px-4 py-2 shadow font-semibold ',
        ])}
        onClick={disabled ? () => {} : onPress}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
