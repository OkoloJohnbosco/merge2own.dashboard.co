import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import { Icon } from "react-feather";

// Box props
export type BoxProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

export interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
  children?: React.ReactNode;
  closeOnOverlayClick?: boolean;
  title?: React.ReactNode;
  size?: "lg" | "md";
  isCloseIconPresent?: boolean;
}
// input types
export interface IInputOption {
  value: string;
  label: string;
}

export type InputWrapperProps = {
  borderColor?: string;
  bg?: string;
  iconColor?: string;
  inputIcon?: Icon;
  name: string;
  label?: string;
  labelColor?: string;
  isLoading?: boolean;
  touched?: Record<string, unknown>;
  errors?:
    | {
        [x: string]: unknown;
      }
    | undefined;
  handleClick?: () => void;
  isShown?: boolean;
  isDisabled?: boolean;
  children?: React.ReactNode;
  options?: IInputOption[];
  isTextArea?: boolean;
  rounded?: string;
  h?: number | string;
  pr?: number;
  height?: number | string;
};

export interface Option {
  value: string;
  label: string;
}
