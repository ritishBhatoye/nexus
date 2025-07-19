import React from "react";
import { Formik, FormikHelpers, FormikValues } from "formik";

type FormWrapperProps<T extends FormikValues> = {
  initialValues: T;
  validationSchema: any;
  onSubmit: (
    values: T,
    handleSubmit: () => void,
    helpers: FormikHelpers<T>
  ) => void;
  children: (formikProps: {
    values: T;
    errors: any;
    touched: any;
    handleChange: (field: string) => (text: string) => void;
    handleBlur: (field: string) => (e: any) => void;
    handleSubmit: () => void;
    setFieldValue: (
      field: string,
      value: any,
      shouldValidate?: boolean
    ) => void;
  }) => React.ReactNode;
};

export function FormWrapper<T extends FormikValues>({
  initialValues,
  validationSchema,
  onSubmit,
  children,
}: FormWrapperProps<T>) {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, helpers) =>
        onSubmit(values, helpers.submitForm, helpers)
      }
    >
      {(formikProps) =>
        children({
          values: formikProps.values,
          errors: formikProps.errors,
          touched: formikProps.touched,
          handleChange: (field: string) => (text: string) => {
            formikProps.setFieldValue(field, text);
          },
          handleBlur: (field: string) => (e: any) => {
            formikProps.handleBlur(field)(e);
          },
          handleSubmit: formikProps.handleSubmit,
          setFieldValue: formikProps.setFieldValue,
        })
      }
    </Formik>
  );
}
