export type FormValues = {
  country: string;
  email: string;
  prefix: string;
  firstName: string;
  middleName: string;
  lastName: string;
  suffix: string;
  onSubmit: (data: FormValues) => void;
};
