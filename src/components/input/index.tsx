import { InputWrapperProps } from "@/types/component.types";
import { Input, InputProps } from "@chakra-ui/react";
import React from "react";
import InputWrapper from "./input-wrapper";

export type Ref = HTMLInputElement;

const CustomInput = React.forwardRef<Ref, InputProps & InputWrapperProps>(
  (
    { value, onChange, name, type, onBlur, placeholder, isDisabled, ...others },
    ref
  ) => {
    const [show, setShow] = React.useState(false);
    const handleClick = () => setShow(!show);
    return (
      <InputWrapper
        type={type}
        isDisabled={isDisabled}
        name={name}
        isShown={show}
        h="40px"
        handleClick={handleClick}
        {...others}
      >
        <Input
          fontWeight={others?.fontWeight ?? "medium"}
          name={name}
          type={type !== "password" ? type : show ? "text" : "password"}
          onChange={onChange}
          value={value}
          id={name}
          ref={ref}
          onBlur={onBlur}
          rounded={0}
          p="16px"
          pl={2}
          w="full"
          _focus={{
            shadow: "0px 0px 0px transparent",
            background: "transparent",
            borderColor: "transparent",
          }}
          _autofill={{
            background: "black",
            textFillColor: others.labelColor ?? "brand.darkest",
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
          color="inherit"
          border={0}
          borderColor="transparent"
          bg="transparent"
          outline="none"
          placeholder={placeholder}
          isDisabled={isDisabled}
          _placeholder={{
            color: "brand.grey",
          }}
          min={others.min}
          max={others.max}
        />
      </InputWrapper>
    );
  }
);

CustomInput.displayName = "CustomInput";

export default CustomInput;
