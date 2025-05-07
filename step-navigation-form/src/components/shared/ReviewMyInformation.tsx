import { useFormContext } from "react-hook-form";
import { InformationFormValues } from "../../model/FormValues";

const ReviewMyInformation = () => {
  const { getValues } = useFormContext<InformationFormValues>();
  const values = getValues();
  return (
    <>
      <h1 className="py-5">My Information</h1>
      <hr />

      <div className="myInformationContainer">
        <div className="flex flex-col py-2">
          <h3>First Name:</h3>
          <span>{values.firstName}</span>
        </div>
        <div className="flex flex-col py-2">
          <h3>Middle Name:</h3>
          <span>{values.middleName}</span>
        </div>
        <div className="flex flex-col py-2">
          <h3>Last Name:</h3>
          <span>{values.lastName}</span>
        </div>
        <div className="flex flex-col py-2">
          <h3>Suffix:</h3>
          <span>{values.suffix}</span>
        </div>
        <div className="flex flex-col py-2">
          <h3>Email:</h3>
          <span>{values.email}</span>
        </div>
        <div className="flex flex-col py-2">
          <h3> Prefix</h3>
          <span>{values.prefix}</span>
        </div>
      </div>
      <div className="addressContainer">
        <div>
          <h4>Address</h4>
          <p>{values.address.addressLine1}</p>
          {values.address.addressLine2 && <p>{values.address.addressLine2}</p>}
          <p>
            {values.city} {values.state} {values.zipCode}
          </p>
          <p>{values.countryCode}</p>
        </div>
      </div>
      <div className="phoneContainer">
        <h4>Phone</h4>
        <p>Phone Type: {values.phoneType}</p>
        <p>Phone Number: {values.phoneNumber}</p>
        {values.phoneExtension && (
          <p>Phone Extension: {values.phoneExtension}</p>
        )}
        <p>Country Code: {values.countryCode}</p>
      </div>
    </>
  );
};
export default ReviewMyInformation;
