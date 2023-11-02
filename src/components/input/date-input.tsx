import { InputWrapperProps } from "@/types/component.types";
import { Input, InputProps } from "@chakra-ui/react";
import React from "react";
import ReactDatePicker from "react-datepicker";
import { UseFormSetValue } from "react-hook-form";
import InputWrapper from "./input-wrapper";

export type Ref = HTMLInputElement;

const CustomDatePicker = React.forwardRef<
  Ref,
  Omit<InputProps, "value"> &
    InputWrapperProps & {
      minDate?: Date;
      value?: Date | null;
      setValue?: UseFormSetValue<any>;
    }
>(
  (
    { value, setValue, name, placeholder, isDisabled, minDate, ...others },
    ref
  ) => {
    const [error, setError] = React.useState({});

    React.useEffect(() => {
      if (others.errors) {
        const errKeys = Object.keys(others.errors);
        if (errKeys.includes(name)) {
          setError({
            [name]: others?.errors?.[name],
          });
        }
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [others.errors]);

    return (
      <InputWrapper
        isDisabled={isDisabled}
        name={name}
        h="40px"
        {...others}
        errors={error}
      >
        <div style={{ width: "100%" }}>
          <ReactDatePicker
            className="bg-red"
            onChange={(e) => {
              setError({
                [name]: {
                  message: "date is required",
                },
              });
              setValue && setValue(name, e);
              // @ts-expect-error
              others.onChange && others.onChange({ target: { value: e } });
              setError({});
            }}
            placeholderText={placeholder}
            customInput={
              <Input
                fontWeight={others?.fontWeight}
                name={name}
                type="text"
                minW="100%"
                //   value={value}
                id={name}
                ref={ref}
                rounded={0}
                // p="16px"
                pl={2}
                w="full"
                _focus={{
                  shadow: "0px 0px 0px transparent",
                  background: "transparent",
                  borderColor: "transparent",
                }}
                _autofill={{
                  background: "black",
                  textFillColor: "#003638",
                  boxShadow: "0 0 0px 1000px transparent inset",
                  transition: "background-color 5000s ease-in-out 0s",
                }}
                _focusWithin={{
                  background: "transparent",
                }}
                _disabled={{
                  opacity: 1,
                  cursor: "not-allowed",
                }}
                h="100%"
                fontSize="sm"
                border={0}
                borderColor="transparent"
                bg="transparent"
                outline="none"
                placeholder={placeholder}
                isDisabled={isDisabled}
                _placeholder={{
                  color: "brand.medium",
                }}
              />
            }
            selected={value}
            minDate={minDate}
            // value={value}
            // disabled={disbaled}
          />
        </div>
      </InputWrapper>
    );
  }
);

CustomDatePicker.displayName = "CustomDatePicker";

export default CustomDatePicker;
