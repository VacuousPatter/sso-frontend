import {
  FilledInput,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  formik: ReturnType<typeof useFormik<any>>;
  formikKey: string;
  label?: string;
  autoComplete?: string;
  placeHolder?: string;
  isRequired?: boolean;
  isDisabled?: boolean;
  slot_inputRightElement?: React.ReactNode;
  type?: "text" | "password";
  inputMode?:
    | "none"
    | "text"
    | "decimal"
    | "numeric"
    | "tel"
    | "search"
    | "email"
    | "url";
  variant?: "standard" | "outlined" | "filled";
}

export function TextInput({
  formik,
  formikKey,
  label,
  autoComplete,
  placeHolder,
  isRequired,
  isDisabled,
  slot_inputRightElement,
  inputMode = "text",
  type = "text",
  variant = "standard",
}: Props) {
  const hasError =
    formik.touched[formikKey] && Boolean(formik.errors[formikKey]);
  const id = "abc" + Math.random() * 999999999999;

  const getInputComponent = () => {
    switch (variant) {
      case "standard": {
        return Input;
      }
      case "outlined": {
        return OutlinedInput;
      }
      case "filled": {
        return FilledInput;
      }
    }
  };
  const InputEl = getInputComponent();
  console.log(label);
  return (
    <FormControl fullWidth variant={variant}>
      <InputLabel htmlFor={id} required={isRequired}>
        {label}
      </InputLabel>
      <InputEl
        id={id}
        value={formik.values[formikKey]}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        type={type}
        inputMode={inputMode}
        autoComplete={autoComplete}
        placeholder={placeHolder}
        required={isRequired}
        disabled={isDisabled}
        name={formikKey}
        error={hasError}
        endAdornment={slot_inputRightElement}
        label={label}
      />

      <AnimatePresence mode="popLayout">
        <motion.div
          key={formik.errors[formikKey] as string}
          initial={{ opacity: 0, translateY: "-100%" }}
          animate={{ opacity: 1, translateY: "0%" }}
          exit={{ opacity: 0, translateY: "100%" }}
        >
          {hasError && (
            <FormHelperText error={hasError}>
              {formik.errors[formikKey] as string}
            </FormHelperText>
          )}
        </motion.div>
      </AnimatePresence>
    </FormControl>
  );
}
