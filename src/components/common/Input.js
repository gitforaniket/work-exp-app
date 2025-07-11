import React from 'react';

const Input = ({ 
  label, 
  name, 
  type = 'text', 
  value, 
  onChange, 
  placeholder, 
  required = false,
  icon: Icon,
  iconImg,
  disabled = false,
  className = '',
  ...props 
}) => {
  return (
    <div className={`space-y-2 ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <div className="relative">
        {iconImg ? (
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <img
              src={iconImg}
              alt="logo"
              className="w-5 h-5 object-contain bg-white rounded"
              style={{ pointerEvents: "none" }}
            />
          </span>
        ) : Icon && (
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <Icon className="w-5 h-5 text-gray-400" />
          </span>
        )}
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          className={`w-full ${(Icon || iconImg) ? 'pl-10' : 'pl-4'} pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-linkedin-500 focus:border-transparent transition-all duration-200 ${disabled ? 'bg-gray-100' : ''}`}
          {...props}
        />
      </div>
    </div>
  );
};

export default Input;