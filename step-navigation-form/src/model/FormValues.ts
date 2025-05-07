export type InformationFormValues = {
  country: string;
  email: string;
  prefix: string;
  firstName: string;
  middleName: string;
  lastName: string;
  suffix: string;
};

export type ExperienceFormValues = {
  jobDetails: {
    jobTitle: string;
    companyName: string;
    location: string;
    fromDate: Date;
    toDate: Date;
    description: string;
  }[];
  languages: string[];
  socialNetworkUrl: string;
};

export type FormValues = InformationFormValues & ExperienceFormValues;
