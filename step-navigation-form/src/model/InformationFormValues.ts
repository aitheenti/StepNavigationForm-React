export type InformationFormValues = {
  country: string;
  email: string;
  prefix: string;
  firstName: string;
  middleName: string;
  lastName: string;
  suffix: string;
  onSubmit: (data: InformationFormValues) => void;
};

export type experienceFormValues = {
  jobDetails: {
    jobTitle: string;
    companyName: string;
    location: string;
    fromDate: Date;
    toDate: Date;
    description: string;
  };
  languages: string[];
  socialNetworkUrls: string;
};
