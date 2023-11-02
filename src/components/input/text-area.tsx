import { InputWrapperProps } from "@/types/component.types";
import { Textarea, TextareaProps } from "@chakra-ui/react";
import React from "react";
import InputWrapper from "./input-wrapper";

export type Ref = HTMLTextAreaElement;

const CustomTextArea = React.forwardRef<Ref, TextareaProps & InputWrapperProps>(
  (
    { value, onChange, name, onBlur, placeholder, isDisabled, ...others },
    ref
  ) => {
    return (
      <InputWrapper
        type={"text"}
        isTextArea
        isDisabled={isDisabled}
        name={name}
        {...others}
      >
        <Textarea
          fontWeight={others?.fontWeight}
          fontSize={"sm"}
          name={name}
          onChange={onChange}
          value={value}
          id={name}
          ref={ref}
          onBlur={onBlur}
          rounded={0}
          _focus={{
            shadow: "0px 0px 0px transparent",
            borderColor: "transparent",
          }}
          h="100%"
          border={0}
          p="16px 8px"
          borderColor="transparent"
          color="gray.700"
          bg="transparent"
          outline="none"
          placeholder={placeholder}
          isDisabled={isDisabled}
        />
      </InputWrapper>
    );
  }
);

CustomTextArea.displayName = "CustomTextArea";

export default CustomTextArea;
