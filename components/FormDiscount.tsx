"use client";
import { useForm, FormProvider } from "react-hook-form";
import InputField from "./formElement/inputField/InputField";
import Button from "./buttons/Button";
import InputPhoneField from "./formElement/inputField/InputPhoneField";
import { CheckboxField } from "./formElement/checkboxField/CheckboxField";
import MistakeIcon from "@/public/icons/formMistake.svg";
import { useColor } from "./ColorNavigation";
import SelectDirection from "./formElement/select/Select";
import SelectField from "./formElement/selectField/SelectField";
import { Option } from "./formElement/select/Select";
import { DirectionsNav } from "./directions/DirectionsNav";

interface FormValues {
  name: string;
  phone: string;
  direction: string;
}

type MyFormProps = {
  styleTop: string;
  setIsLoading: (value: boolean) => void;
  setIsSent: (value: boolean) => void;
  setErrorMessage: (value: boolean) => void;

  nameDirection?: string | undefined;
};

const MyForm = (props: MyFormProps) => {
  const color = useColor();
  const methods = useForm<FormValues>({ mode: "onBlur" });
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = async (data: FormValues) => {
    props.setIsLoading(true);

    try {
      const response = await fetch("/api/request-call", {
        method: "POST",
        body: JSON.stringify({
          name: data.name,
          phone: data.phone,
          direction: data.direction,
        }),
      });
      props.setIsSent(true);

      const restData = await response.json();
      methods.reset();
    } catch (error) {
      props.setErrorMessage(true);
    }
    props.setIsLoading(false);
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-between"
      >
        <InputField
          width="280px"
          height="51px"
          placeholder="Имя"
          defaultValue=""
          control={control}
          name={"name"}
          rules={{
            required: "Введите ваше имя",
            pattern: {
              message: "Используйте только буквы",
              value: /^[A-Za-zА-Яа-я]+$/,
            },
            minLength: {
              message: "Минимум 2 символа",
              value: 2,
            },
            maxLength: {
              message: "Максимум 20 символов",
              value: 20,
            },
          }}
        />

        <InputPhoneField
          width="280px"
          height="51px"
          placeholder="Телефон"
          defaultValue=""
          name={"phone"}
          rules={{
            required: "Пожалуйста, заполните это поле",
            pattern: {
              message:
                "Пржалуйста, проверьте правильность указанного номера телефона",
              value: /^\+375 \((29|44|25|33)\) \d{3}-\d{2}-\d{2}$/,
            },
          }}
          control={control}
        />

        {/* <InputField
          width="280px"
          height="51px"
          placeholder="Направление"
          defaultValue={props.nameDirection}
          control={control}
          name={'direction'}
          rules={{
            required: 'Пожалуйста, заполните это поле',
            pattern: {
              message: 'Используйте только буквы',
              value: /^[A-Za-zА-Яа-я]+$/,
            },
            minLength: {
              message: 'Минимум два символа',
              value: 2,
            },
            maxLength: {
              message: 'Максимум 50 символов',
              value: 50,
            },
          }}
        /> */}

        <SelectField
          width="280px"
          height="51px"
          options={DirectionsNav}
          placeholder="Направление"
          defaultValue={
            DirectionsNav.find((x) => x.label === props.nameDirection)?.value
          }
          control={control}
          name={"direction"}
          rules={{
            required: "Пожалуйста, заполните это поле",
          }}
        />

        <Button
          width={"280px"}
          height={"50"}
          title={"Записаться на занятие"}
          type={"submit"}
          backgroundColor={color.bgButton}
          focus={color.formBorderActive}
          bgHover={color.bgButtonActive}
          textColor={color.buttonTextColor}
        />

        <div className="flex max-w-[280px] h-[32px]">
          <div className="mr-[10px]">
            <CheckboxField
              control={control}
              name="checkBox"
              height="24px"
              width="24px"
            />
          </div>

          <p className=" font-poppins text-twelve">
            Даю согласие на обработку данных персональных
          </p>
        </div>
        <div className={`${props.styleTop} absolute flex`}>
          {!!Object.keys(errors).length && (
            <div className="max-w-[282px] text-twelve flex items-center">
              <div className="mr-[10px]">
                <MistakeIcon stroke="#E0474E" />
              </div>

              <p className="font-poppins text-twelve text-red-mistake">
                Пожалуйста, проверьте введенные данные
              </p>
            </div>
          )}
        </div>
      </form>
    </FormProvider>
  );
};

export default MyForm;
