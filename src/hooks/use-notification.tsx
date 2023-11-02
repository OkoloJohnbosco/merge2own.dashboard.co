import { useToast } from "@chakra-ui/react";

function useNotification() {
  const toast = useToast({
    position: "top-right",
    variant: "left-accent",
    duration: 5000,
    isClosable: true,
    containerStyle: {
      maxWidth: "400px",
      fontSize: "nm",
    },
  });

  const reqFailed = () => {
    toast({
      title: `Request Failed`,
      description: "Email or password incorrect",
      status: "error",
    });
  };

  const reqSuccess = () => {
    toast({
      title: `Request Successful`,
      description: "Login Successfully",
      status: "success",
    });
  };
  const reqWarning = ({
    title,
    description,
  }: {
    title: string;
    description: string;
  }) => {
    toast({
      title,
      description,
      status: "warning",
    });
  };
  return { reqFailed, reqSuccess, reqWarning };
}

export default useNotification;
