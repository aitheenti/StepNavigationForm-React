import { useFormContext } from "react-hook-form";
import { VoluntaryDisclosures } from "../../model/FormValues";

const ReviewVoluntaryDisclosures = () => {
  const { getValues } = useFormContext<VoluntaryDisclosures>();
  const formData = getValues();

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-lg font-semibold">Voluntary Disclosures</h2>
      <h2>Terms and Conditions</h2>
      <h4 className="text-sm text-gray-500">
        Yes, I have read and consent to the Terms and Conditions
      </h4>
      <p>{formData.termsAndConditions} </p>
    </div>
  );
};
export default ReviewVoluntaryDisclosures;
