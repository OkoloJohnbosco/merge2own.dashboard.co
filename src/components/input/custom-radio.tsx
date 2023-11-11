import { InputWrapperProps } from "@/types/component.types";
import { InputProps, Radio, RadioGroup, Stack, Text } from "@chakra-ui/react";
import { ErrorMessage } from "@hookform/error-message";
import React from "react";
import { UseFormSetValue, get } from "react-hook-form";

export type Ref = HTMLInputElement;

const CustomRadio = React.forwardRef<
  Ref,
  InputProps & { setValue: UseFormSetValue<any> } & InputWrapperProps
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
      ...others
    },
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
    // console.log(name, "from radio");

    return (
      <Stack maxW="300px" pos="relative" pb={2}>
        <RadioGroup
          ref={ref}
          size="sm"
          name={name}
          onChange={(e) => {
            if (e) {
              setValue(name, e);
              setError({});
            }
          }}
        >
          <Stack direction="row">
            {options &&
              options.map((option) => (
                <Radio key={option.value} value={option.value}>
                  {option.label}
                </Radio>
              ))}
          </Stack>
        </RadioGroup>
        {get(error, name) && (
          <ErrorMessage
            errors={error}
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
