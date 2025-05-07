import { useFormContext } from "react-hook-form";
import ReviewMyExperience from "./ReviewMyExperience";
import ReviewMyInformation from "./ReviewMyInformation";
import ReviewApplicationQuestions from "./ReviewApplicationQuestions";
import ReviewVoluntaryDisclosures from "./ReviewVoluntaryDisclosures";

const Review = () => {
  const { getValues } = useFormContext();
  const formData = getValues();

  console.log("formData", formData);
  return (
    <>
      <h1>Review </h1>
      <hr />
      <div>
        <ReviewMyInformation />
        <ReviewMyExperience />
        <ReviewApplicationQuestions />
        <ReviewVoluntaryDisclosures />
      </div>
    </>
  );
};

export default Review;
