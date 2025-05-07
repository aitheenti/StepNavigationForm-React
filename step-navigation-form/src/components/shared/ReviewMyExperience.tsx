import { useFormContext } from "react-hook-form";
import { ExperienceFormValues } from "../../model/FormValues";

const ReviewMyExperience = () => {
  const { getValues } = useFormContext<ExperienceFormValues>();
  const values = getValues();
  return (
    <>
      <div className="questionAndAnswer">
        <div className="question">
          <h1>Review My Experience</h1>
          <hr />
          <h2>Work Experience</h2>
          {values?.jobDetails?.map((jobInfo, index) => {
            return (
              <div key={index}>
                <h3>Work Experience {index + 1}</h3>
                <p>
                  <strong>Job Title:</strong> {jobInfo.jobTitle}
                </p>
                <p>
                  <strong>Company Name:</strong> {jobInfo.companyName}
                </p>
                <p>
                  <strong>Location:</strong> {jobInfo.location}
                </p>
                <p>
                  <strong>From Date:</strong>
                  {jobInfo.fromDate.toString()}
                </p>
                <p>
                  <strong>To Date:</strong> {jobInfo.toDate.toString()}
                </p>
                <p>
                  <strong>Description:</strong> {jobInfo.description}
                </p>
              </div>
            );
          })}
          <h2>Languages</h2>
          {values?.languages?.map((language, index) => {
            return (
              <div key={index}>
                <h3>Language {index + 1}</h3>
                <p>
                  <strong>Language:</strong> {language}
                </p>
              </div>
            );
          })}
          <h2>Social Network URL</h2>
          <p>
            <strong>Social Network URL:</strong> {values?.socialNetworkUrl}
          </p>
        </div>
      </div>
    </>
  );
};

export default ReviewMyExperience;
