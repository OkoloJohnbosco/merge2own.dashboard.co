import { InputWrapperProps } from "@/types/component.types";
import { Select, SelectProps, Spinner } from "@chakra-ui/react";
import React from "react";
import { ChevronDown } from "react-feather";
import Icon from "../icon";
import InputWrapper from "./input-wrapper";

export type Ref = HTMLSelectElement;

const CustomSelect = React.forwardRef<Ref, SelectProps & InputWrapperProps>(
  (
    {
      value,
      onChange,
      name,
      onBlur,
      placeholder,
      isLoading,
      options,
      isDisabled,
      size = "md",
      ...others
    },
    ref
  ) => {
    const [show, setShow] = React.useState(false);
    const handleClick = () => setShow(!show);
    return (
      <InputWrapper
        type={"text"}
        isDisabled={isDisabled}
        name={name}
        isShown={show}
        h="40px"
        handleClick={handleClick}
        {...others}
      >
        <Select
          icon={
            isLoading ? (
              <Spinner
                thickness="2px"
                speed="0.4s"
                emptyColor="gray.200"
                color="blue.500"
                size="xl"
              />
            ) : (
              <Icon alignSelf="center" mt={1} iconComp={ChevronDown} />
            )
          }
          mb={1}
          fontWeight={others?.fontWeight ?? "medium"}
          name={name}
          alignSelf="center"
          justifySelf="center"
          onChange={onChange}
          value={value}
          id={name}
          cursor="pointer"
          ref={ref}
          onBlur={onBlur}
          rounded={0}
          maxH="47px"
          pr="4px"
          pl="0px"
          _focus={{
            shadow: "0px 0px 0px transparent",
            borderColor: "transparent",
          }}
          _autofill={{
            background: "white",
            textFillColor: "#003638",
            boxShadow: "0 0 0px 1000px white inset",
            transition: "background-color 5000s ease-in-out 0s",
          }}
          h="100%"
          fontSize="sm"
          border={0}
          size={size}
          borderColor="transparent"
          bg="transparent"
          outline="none"
          placeholder={placeholder}
          color="brand.300"
          isDisabled={isDisabled}
          _placeholder={{
            color: "brand.800",
          }}
        >
          {options
            ? options.map((item) => (
                <option value={item.value} key={item.label}>
                  {item.label}
                </option>
              ))
            : null}
        </Select>
      </InputWrapper>
    );
  }
);

CustomSelect.displayName = "CustomSelect";

export default CustomSelect;
