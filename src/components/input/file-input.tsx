import { truncateWord } from "@/lib/utils/component.utils";
import { InputWrapperProps } from "@/types/component.types";
import {
  Button,
  HStack,
  Input,
  Stack,
  Text,
  Tooltip,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { UseFormSetValue } from "react-hook-form";
import InputWrapper from "./input-wrapper";

export type Ref = HTMLInputElement;

interface FileUploadProps {
  accept?: string;
  id: string;
  value: File;
  setValue: UseFormSetValue<any>;
  name: string;
  btnLabel?: string;
  btnColor?: string;
  placeholder?: string;
}

const CustomFileInput = React.forwardRef<
  Ref,
  FileUploadProps & InputWrapperProps
>(
  (
    {
      accept = ".jpg, .jpeg, .png, .pdf,.doc",
      id,
      value,
      setValue,
      placeholder = "Upload file",
      name,
      btnLabel = "Click to upload",
      btnColor = "brand.700",
      ...others
    },
    ref
  ) => {
    const inputRef = React.useRef<HTMLInputElement | null>(null);
    const [error, setError] = React.useState({});
    const toast = useToast();

    const handleClick = () => {
      inputRef.current?.click();
    };

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
        type="file"
        isTextArea
        isDisabled={false}
        name={name}
        h="40px"
        {...others}
        errors={error}
      >
        <HStack w="full" position="relative">
          <Input
            type="file"
            id={id}
            name={name}
            placeholder={placeholder}
            accept={accept}
            onChange={(event) => {
              if (event.target.files?.length) {
                setError({
                  [name]: {
                    message: "add file",
                  },
                });

                const maxAllowedSize = 1024 * 1024; // 1MB file size
                if (event.target.files[0].size > maxAllowedSize) {
                  toast({
                    title: "File Upload Failed",
                    description: "Selected file exceeded maximum size of 1mb",
                    status: "warning",
                    position: "top-right",
                    variant: "left-accent",
                  });
                  setValue(name, null);
                  return;
                }

                setError({});
                setValue(name, event.target.files[0]);
              }
            }}
            ref={inputRef || ref}
            visibility="hidden"
          />
          <Stack position="absolute" bg="transparent" left={2} top={"10px"}>
            {value ? (
              <Tooltip
                hasArrow
                label={value?.name}
                placement="top"
                p={2}
                rounded={4}
              >
                <Text fontSize="sm" color="brand.300">
                  {truncateWord(value?.name)}
                </Text>
              </Tooltip>
            ) : (
              <Text fontSize="sm" color="brand.medium">
                {placeholder}
              </Text>
            )}
          </Stack>
          <Button
            size="xs"
            py={2}
            bg={btnColor}
            color="#fff"
            _hover={{}}
            flexShrink={0}
            mr={1}
            fontWeight="semibold"
            onClick={handleClick}
          >
            {value?.name ? "Change file" : btnLabel}
          </Button>
        </HStack>
      </InputWrapper>
    );
  }
);

CustomFileInput.displayName = "CustomFileInput";

export default CustomFileInput;
