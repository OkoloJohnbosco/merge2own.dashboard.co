import { joinCategories } from "@/lib/utils/component.utils";
import { Option } from "@/types/component.types";
import { Stack, Text, useToast } from "@chakra-ui/react";
import { ErrorMessage } from "@hookform/error-message";
import React from "react";
import { UseFormSetValue, get } from "react-hook-form";
import Select, {
  CSSObjectWithLabel,
  OnChangeValue,
  SelectInstance,
  StylesConfig,
} from "react-select";

interface MultiSelectProps {
  placeholder: string;
  setValue: UseFormSetValue<any>;
  name: string;
  value: string;
  errors?: { [x: string]: unknown } | undefined;
  options?: Option[];
  label?: string;
  isLoading?: boolean;
}

type Ref = SelectInstance<Option>;

const CustomMultiSelect = React.forwardRef<Ref, MultiSelectProps>(
  (
    {
      placeholder,
      name,
      value,
      setValue,
      errors,
      label,
      isLoading = false,
      options,
    },
    ref
  ) => {
    const hasError = get(errors, name);

    const toast = useToast();
    const handleChange = (newValue: OnChangeValue<Option, true>) => {
      if (newValue.length === 0) {
        setValue(name, "");
        return;
      }
      if (newValue.length >= 4) {
        toast({
          title: `Error`,
          variant: "left-accent",
          position: "top-right",
          description: "Can't select more than 3 categories",
          status: "error",
        });
        // @ts-expect-error
        newValue.pop();
        setValue(name, joinCategories(newValue as Option[]));
      } else {
        setValue(name, joinCategories(newValue as Option[]));
      }
    };

    const customStyles: StylesConfig<Option, true> = {
      control: (provided) => ({
        ...provided,
        outline: "none",
        background: hasError && !value ? "#fed7d7" : "transparent",
        boxShadow: "0 0 0 rgba(0,0,0,0)",
        minHeight: "45px",
        borderRadius: "10px",
        border: "0px solid transparent",
        fontSize: "0.83rem",
      }),
      container: (provided, state) => ({
        ...provided,
        border: `1px solid ${
          hasError && !value
            ? "#fc8181"
            : `${state.isFocused ? "#3E4095" : "#DADBF2"}`
        }`,
        borderRadius: "10px",
        cursor: "pointer",
      }),
      multiValue: (provided: CSSObjectWithLabel) => ({
        ...provided,
        borderRadius: "20px",
        background: "#F0F0FF",
        color: "#fff",
        overflow: "hidden",
        padding: "3px",
        fontSize: "0.80rem",
      }),
      multiValueLabel: (base) => ({
        ...base,
        textTransform: "capitalize",
        color: "#3E4095",
      }),
      option: (styles) => {
        return {
          ...styles,
          fontSize: "0.8rem",
          color: "#3E4095",
          textTransform: "capitalize",
        };
      },
      placeholder: (styles) => {
        return {
          ...styles,
          color: "#8787A8",
        };
      },
    };

    return (
      <Stack spacing={0}>
        <Stack>
          {label && (
            <Text
              color="brand.300"
              textTransform="capitalize"
              textAlign="left"
              as="label"
              fontSize="sm"
              htmlFor={name}
              mb={-1}
            >
              {label}
            </Text>
          )}
          <Select
            name={name}
            isMulti
            // @ts-expect-error
            ref={ref}
            onChange={handleChange}
            styles={customStyles}
            isLoading={isLoading}
            options={options}
            placeholder={placeholder}
          />
        </Stack>

        {hasError && !value && (
          <ErrorMessage
            errors={errors}
            name={name}
            render={({ message }) => {
              return (
                <Stack textAlign="right">
                  <Text
                    color="red.600"
                    fontSize="0.8rem"
                    fontWeight="semi-bold"
                  >
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

CustomMultiSelect.displayName = "CustomMultiSelect";
export default CustomMultiSelect;
