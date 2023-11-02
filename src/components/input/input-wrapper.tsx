import { InputWrapperProps } from "@/types/component.types";
import { IconButton, Spinner, Stack, Text } from "@chakra-ui/react";
import { ErrorMessage } from "@hookform/error-message";
import { HTMLInputTypeAttribute } from "react";
import { Eye, EyeOff } from "react-feather";
import { get } from "react-hook-form";
import Icon from "../icon";

const InputWrapper: React.FC<
  InputWrapperProps & { type?: HTMLInputTypeAttribute }
> = ({
  children,
  name,
  label,
  isLoading = false,
  type = "text",
  errors,
  isShown,
  handleClick,
  inputIcon,
  iconColor,
  ...props
}) => {
  const hasError = get(errors, name);
  const bgColor = hasError ? "red.100" : "transparent";
  const brColor = hasError ? "red.300" : "gray.400";

  return (
    <Stack
      pos="relative"
      w="full"
      spacing={2}
      opacity={props.isDisabled ? 0.7 : 1}
    >
      {label && (
        <Text
          color={props?.labelColor ?? "brand.darkest"}
          _dark={{ color: "brand.primary" }}
          textTransform="capitalize"
          textAlign="left"
          fontWeight="medium"
          as="label"
          fontSize="sm"
          htmlFor={name}
          mb={-1}
          transition="all 0.25s linear"
        >
          {label}
        </Text>
      )}
      <Stack
        direction="row"
        alignItems="center"
        overflow="hidden"
        pl={0}
        w="full"
        pr={props.pr || 0}
        spacing={0}
        rounded="2px"
        border="1.5px solid"
        transition="all 0.25s linear"
        bg={hasError ? "red.100" : "transparent"}
        borderColor={brColor}
        color={hasError ? "red.600" : props.labelColor ?? "brand.merge"}
        _focusWithin={{
          bg: bgColor,
          shadow: "none",
          borderColor: hasError ? "red.300" : "brand.green",
        }}
        h={props.h || props.height || "auto"}
      >
        {inputIcon && (
          <Icon
            iconComp={inputIcon}
            boxSize={4}
            ml={2}
            color={iconColor ?? "brand.medium"}
            flexShrink={0}
            mr={1}
          />
        )}
        {/* The child input element which can be input, textarea, select etc */}
        {children}
        {/* To indicate loading, usefull when input default value is gotten from the server */}
        {isLoading && type !== "select" && (
          <Spinner
            thickness="2px"
            speed="0.4s"
            emptyColor="gray.200"
            color="brand.primary"
            size="sm"
            mr={1}
          />
        )}
        {/* Icon used to indicate error state */}
        {/* {!isLoading && type !== "select" && hasError && (
          <Stack pr={1}>
            <Icon
              boxSize={6}
              iconComp={RiErrorWarningFill}
              color="red.500"
              fontWeight="bold"
            />
          </Stack>
        )} */}
        {/* password type switcher use to toggle password fields */}
        {type === "password" && !isLoading && (
          <IconButton
            variant="link"
            aria-label="passowrd toggler"
            textDecoration="none"
            onClick={handleClick}
            borderColor="transparent"
            outline="none"
            mr={1}
          >
            <Icon
              boxSize={4}
              iconComp={isShown ? EyeOff : Eye}
              color="gray.400"
            />
          </IconButton>
        )}
      </Stack>
      {hasError && (
        <ErrorMessage
          errors={errors}
          //   errors
          name={name}
          render={({ message }) => {
            return (
              <Stack pos="absolute" bottom={-4} right={0}>
                <Text color="red.600" fontSize="11px" fontWeight="semi-bold">
                  {message}
                </Text>
              </Stack>
            );
          }}
        />
      )}
    </Stack>
  );
};

export default InputWrapper;
