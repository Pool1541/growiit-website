/* eslint-disable @typescript-eslint/no-explicit-any */
import * as Yup from 'yup';

type InferValidationSchemaType<T extends Yup.AnySchema> = Yup.InferType<T>;
type OptionsType = { setSubmitting: (isSubmitting: boolean) => void };

export interface handleSubmit<T extends Yup.AnySchema> {
  (values: InferValidationSchemaType<T>, options: OptionsType ): Promise<any>;
}