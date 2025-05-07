import { useFormContext } from "react-hook-form";
import countryCodes from "../../model/mock/countryPhoneCodes.json";
import countryList from "../../model/mock/countryList.json";
import prefixList from "../../model/mock/prefixList.json";
import suffixList from "../../model/mock/suffixList.json";
import stateCodes from "../../model/mock/stateCodes.json";

type InformationFormValues = {
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

type countryPhoneCode = {
  id: string;
  descriptor: string;
};

type countryListType = {
  id: number;
  descriptor: string;
};

type prefixListType = {
  id: string;
  descriptor: string;
};

type suffixListType = {
  id: string;
  descriptor: string;
};

type StateCodeType = {
  id: string;
  descriptor: string;
  alpha2Code: string;
};

const MyInformation = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<InformationFormValues>();

  return (
    <div className="flex flex-col">
      <h1> My Information</h1>
      <div className="informationContainer">
        <div className="form-field">
          <label htmlFor="country" className="form-label">
            Country
          </label>
          <select
            {...register("country", { required: "This field is required" })}
            className="form-input"
            defaultValue="Select Country"
          >
            {countryList.map((country: countryListType) => {
              return (
                <option key={country.id} value={country.descriptor}>
                  {country.descriptor}
                </option>
              );
            })}
          </select>
          {errors.country && (
            <p className="form-error">This field is required.</p>
          )}
        </div>
        <hr className="my-5" />

        <div className="form-field">
          <label htmlFor="email" className="form-label">
            Email{" "}
          </label>
          <input
            className="form-input"
            type="text"
            placeholder="Email"
            {...register("email", {
              required: "This field is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && <p className="form-error">{errors.email.message}</p>}
        </div>

        <h2> Legal Name </h2>

        <div className="form-field">
          <label htmlFor="prefix" className="form-label">
            Prefix
          </label>
          <select
            {...register("prefix", { required: "This field is required" })}
            className="form-input"
            defaultValue="Select Prefix"
          >
            {prefixList.data.map((prefix: prefixListType) => {
              return (
                <option key={prefix.id} value={prefix.descriptor}>
                  {prefix.descriptor}
                </option>
              );
            })}
          </select>
        </div>
        <div className="form-field">
          <label htmlFor="firstName" className="form-label">
            First Name
          </label>
          <input
            {...register("firstName", { required: "This field is required" })}
            className="form-input"
            type="text"
            placeholder="First Name"
          />
          {errors.firstName && (
            <p className="form-error">This field is required.</p>
          )}
        </div>

        <div className="form-field">
          <label htmlFor="middleName" className="form-label">
            Middle Name
          </label>
          <input
            {...register("middleName")}
            className="form-input"
            type="text"
            placeholder="Middle Name"
          />
        </div>
        <div className="form-field">
          <label htmlFor="lastName" className="form-label">
            Last Name
          </label>
          <input
            {...register("lastName", { required: "This field is required" })}
            className="form-input"
            type="text"
            placeholder="Last Name"
          />
          {errors.lastName && (
            <p className="form-error">This field is required.</p>
          )}
        </div>
        <div className="form-field">
          <label htmlFor="suffix" className="form-label">
            Suffix
          </label>
          <select
            {...register("suffix", { required: "This field is required" })}
            className="form-input"
            defaultValue="Select Suffix"
          >
            {suffixList.data.map((suffix: suffixListType) => {
              return (
                <option key={suffix.id} value={suffix.descriptor}>
                  {suffix.descriptor}
                </option>
              );
            })}
          </select>
        </div>
      </div>

      <hr className="my-5" />

      <div className="addressContainer">
        <h2> Address </h2>
        <div className="form-field">
          <label htmlFor="addressLine1" className="form-label">
            Address Line 1
          </label>
          <input
            {...register("address.addressLine1", {
              required: "This field is required",
            })}
            className="form-input"
            type="text"
            placeholder="Address Line 1"
          />
          {errors.address?.addressLine1 && (
            <p className="form-error">This field is required.</p>
          )}
        </div>

        <div className="form-field">
          <label htmlFor="addressLine2" className="form-label">
            Address Line 2
          </label>
          <input
            {...register("address.addressLine2")}
            className="form-input"
            type="text"
            placeholder="Address Line 2"
          />
          {errors.address?.addressLine2 && (
            <p className="form-error">This field is required.</p>
          )}
        </div>

        <div className="form-field">
          <label htmlFor="city" className="form-label">
            City
          </label>
          <input
            {...register("city", { required: "This field is required" })}
            className="form-input"
            type="text"
            placeholder="City"
          />
          {errors.city && <p className="form-error">This field is required.</p>}
        </div>

        <div className="form-field">
          <label htmlFor="state" className="form-label">
            State
          </label>
          <select
            {...register("state", { required: "This field is required" })}
            id="state"
            className="form-input"
            defaultValue="Select State"
          >
            {stateCodes.data.map((state: StateCodeType) => {
              return (
                <option key={state.id} value={state.descriptor}>
                  {state.alpha2Code}
                </option>
              );
            })}
          </select>
          {/* <input
            {...register("state", { required: "This field is required" })}
            className="form-input"
            type="text"
            placeholder="State"
          /> */}
        </div>

        <div className="form-field">
          <label htmlFor="zipCode" className="form-label">
            Zip Code
          </label>
          <input
            {...register("zipCode", { required: "This field is required" })}
            className="form-input"
            type="text"
            placeholder="Zip Code"
          />
          {errors.zipCode && (
            <p className="form-error">This field is required.</p>
          )}
        </div>
      </div>

      <hr className="my-5" />
      <div className="phoneContainer">
        <h2> Phone </h2>
        <div className="form-field">
          <label htmlFor="phoneType" className="form-label">
            Phone Type
          </label>
          <select
            {...register("phoneType", { required: "This field is required" })}
            className="form-input"
            defaultValue="Select Phone Type"
          >
            <option value="Select Phone Type" disabled>
              Select Phone Type
            </option>
            <option value="Home">Home</option>
            <option value="Work">Work</option>
            <option value="Mobile">Mobile</option>
            <option value="Other">Other</option>
          </select>
          {errors.phoneType && (
            <p className="form-error">This field is required.</p>
          )}
        </div>

        <div className="form-field">
          <label htmlFor="countryCode" className="form-label">
            Country Code
          </label>
          <select
            {...register("countryCode", { required: "This field is required" })}
            className="form-input"
            defaultValue="Select Country Code"
          >
            {countryCodes.map((country: countryPhoneCode) => {
              return (
                <option key={country.id} value={country.descriptor}>
                  {country.descriptor}
                </option>
              );
            })}
          </select>
        </div>

        <div className="form-field">
          <label htmlFor="phoneNumber" className="form-label">
            Phone Number
          </label>
          <input
            {...register("phoneNumber", {
              required: "This field is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Invalid phone number",
              },
            })}
            className="form-input"
            type="text"
            placeholder="Phone Number"
          />
          {errors.phoneNumber && (
            <p className="form-error">{errors.phoneNumber.message}</p>
          )}
        </div>

        <div className="form-field">
          <label htmlFor="phoneExtension" className="form-label">
            Phone Extension
          </label>
          <input
            {...register("phoneExtension")}
            className="form-input"
            type="text"
            placeholder="Phone Extension"
          />
        </div>
      </div>
    </div>
  );
};

export default MyInformation;
