import { Box, Button, HStack, Stack, Text } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { Check, XCircle } from "react-feather";

// Password interface
export interface PasswordPopoverProps {
  password: string;
  children: React.ReactNode;
}

export interface PasswordRequirementProps {
  meets: boolean;
  label: string;
}

export interface ProgressBarProps {
  color: string;
  value: number;
}

function PasswordRequirement({ meets, label }: PasswordRequirementProps) {
  return (
    <HStack
      fontSize="xs"
      mt={7}
      color={meets ? "text-green-600" : "text-red-300"}
    >
      {meets ? <Check size={14} /> : <XCircle size={14} />}{" "}
      <Text ml={3}>{label}</Text>
    </HStack>
  );
}

function ProgressBar({ color, value }: ProgressBarProps) {
  const bgColor =
    color === "teal"
      ? "green.600"
      : color === "yellow"
      ? "yellow.500"
      : "red.300";

  return (
    <Box w="full" bg="gray.200" rounded="full" h={1.5} mt={2.5} mb={2.5}>
      <Stack
        h="full"
        rounded="full"
        bg={bgColor}
        style={{ width: `${value}%` }}
      ></Stack>
    </Box>
  );
}

const PasswordPopover: React.FC<PasswordPopoverProps> = ({
  password,
  children,
}) => {
  const [popoverVisible, setPopoverVisible] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setPopoverVisible(true);
    document.addEventListener("mousedown", handleOutsideClick);
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      popoverRef.current &&
      !popoverRef.current.contains(event.target as Node) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target as Node)
    ) {
      setPopoverVisible(false);
      document.removeEventListener("mousedown", handleOutsideClick);
    }
  };

  const requirements = [
    { re: /[0-9]/, label: "Includes number" },
    { re: /[a-z]/, label: "Includes lowercase letter" },
    { re: /[A-Z]/, label: "Includes uppercase letter" },
    { re: /[$&+,:;=?@#|'<>.^*()%!-]/, label: "Includes special symbol" },
  ];

  function getStrength(password: string) {
    let multiplier = password.length > 5 ? 0 : 1;

    requirements.forEach((requirement) => {
      if (!requirement.re.test(password)) {
        multiplier += 1;
      }
    });

    return Math.max(100 - (100 / (requirements.length + 1)) * multiplier, 10);
  }

  const checks = requirements.map((requirement, index) => (
    <PasswordRequirement
      key={index}
      label={requirement.label}
      meets={requirement.re.test(password)}
    />
  ));

  const strength = getStrength(password);
  const color = strength === 100 ? "teal" : strength > 50 ? "yellow" : "red";

  return (
    <Stack pos="relative" spacing={0}>
      <div ref={buttonRef} onClick={handleClick}>
        {children}
      </div>
      {popoverVisible && (
        <Box
          w="full"
          pos="absolute"
          bg="white"
          rounded="sm"
          p={5}
          shadow="md"
          mt={2}
          zIndex={50}
          top={15}
          ref={popoverRef}
        >
          <div>
            <ProgressBar color={color} value={strength} />
            <PasswordRequirement
              label="Includes at least 6 characters"
              meets={password.length > 5}
            />
            {checks}
            <Button
              className="rounded-full h-[25px] w-[25px] inline-flex items-center justify-center text-gray-700 absolute top-2 right-2 hover:bg-gray-300"
              onClick={() => setPopoverVisible(false)}
            ></Button>
          </div>
        </Box>
      )}
    </Stack>
  );
};

export default PasswordPopover;
