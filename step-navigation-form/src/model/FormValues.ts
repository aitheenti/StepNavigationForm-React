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

export type ApplicationQuestionsFormValues = {
  minQualifications: string;
  legalWork: string;
  associateStatus: string;
  hire: string;
  sponsorship: string;
  sponsorshipType: string;
  availability: string;
};

export type VoluntaryDisclosures = {
  termsAndConditions: boolean;
};

export type InformationFormValues = {
  country: string;
  prefix: string;
  email: string;
  firstName: string;
  middleName: string;
  lastName: string;
  suffix: string;
  address: {
    addressLine1: string;
    addressLine2: string;
  };
  city: string;
  state: string;
  zipCode: string;
  phoneType: string;
  phoneNumber: number;
  countryCode: number;
  phoneExtension: number;
};

export type countryPhoneCode = {
  id: string;
  descriptor: string;
};

export type countryListType = {
  id: number;
  descriptor: string;
};

export type prefixListType = {
  id: string;
  descriptor: string;
};

export type suffixListType = {
  id: string;
  descriptor: string;
};

export type StateCodeType = {
  id: string;
  descriptor: string;
  alpha2Code: string;
};

export type FormValues = InformationFormValues &
  ExperienceFormValues &
  ApplicationQuestionsFormValues;
