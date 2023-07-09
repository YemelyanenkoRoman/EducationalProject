import { Control, Controller, useFormContext } from 'react-hook-form';
import Input from '../../input/Input';

type InputProps = {
  control: any;
  name: string;
  label?: string;
  rules?: Object;
  defaultValue?: string;
  placeholder?: string;
};

const InputField = (props: InputProps) => {
  const { trigger } = useFormContext();
  return (
    <>
      <div>{props.label}</div>
      <Controller
        name={props.name}
        control={props.control}
        defaultValue={props.defaultValue}
        render={({ field, fieldState }) => {
          return (
            <div>
              <Input
                placeholder={props.placeholder}
                value={field.value}
                onChange={(e) => {
                  field.onChange(e.target.value);
                }}
                onBlur={() => {
                  field.onBlur();
                  // trigger(props.name);
                }}
              />
              {fieldState && fieldState.error && <p>{fieldState.error.message}</p>}
            </div>
          );
        }}
        rules={props.rules}
      />
    </>
  );
};

export default InputField;
