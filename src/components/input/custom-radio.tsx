import { InputWrapperProps } from "@/types/component.types";
import { InputProps, Radio, RadioGroup, Stack, Text } from "@chakra-ui/react";
import { ErrorMessage } from "@hookform/error-message";
import React from "react";
import {
  FieldValues,
  UseFormClearErrors,
  UseFormSetValue,
  get,
} from "react-hook-form";

export type Ref = HTMLInputElement;

const CustomRadio = React.forwardRef<
  Ref,
  InputProps & {
    setValue: UseFormSetValue<any>;
    clearErrors: UseFormClearErrors<FieldValues>;
  } & InputWrapperProps
>(
  (
    {
      value,
      onChange,
      name,
      options,
      type,
      onBlur,
      placeholder,
      isDisabled,
      setValue,
      clearErrors,
      errors,
      ...others
    },
    ref
  ) => {
    return (
      <Stack maxW="300px" pos="relative" pb={2}>
        <RadioGroup
          size="sm"
          name={name}
          onChange={(e) => {
            if (e) {
              setValue(name, e, { shouldValidate: true });
              clearErrors(name);
            }
          }}
        >
          <Stack direction="row">
            {options &&
              options.map((option) => (
                <Radio ref={ref} key={option.label} value={option.label}>
                  {option.label}
                </Radio>
              ))}
          </Stack>
        </RadioGroup>
        {get(errors, name) && (
          <ErrorMessage
            errors={errors}
            name={name}
            render={({ message }) => {
              //   console.log(error, "errors");
              return (
                <Stack pos="absolute" bottom={-3} left={0}>
                  <Text color="red.700" fontSize="11px" fontWeight="semi-bold">
                    {message}
                  </Text>
                </Stack>
              );
            }}
          />
        )}
      </Stack>
    );
  }
);

CustomRadio.displayName = "CustomRadio";

export default CustomRadio;
