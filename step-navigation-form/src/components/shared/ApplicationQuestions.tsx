import { useFormContext } from "react-hook-form";

const ApplicationQuestions = () => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext();

  const sponsorshipAnswer = watch("sponsorship");

  return (
    <div>
      <h1>ApplicationQuestions</h1>
      <div className="applicationQuestionsContainer w-5xl">
        <div className="question form-field">
          <label className="form-label  py-3" htmlFor="minQualifications">
            Do you certify you meet all minimum qualifications for this job as
            outlined in the job posting? If you do not recall the minimum
            qualification for this job, please review the job posting prior to
            answering this question.<abbr>*</abbr>
          </label>
          <select
            className="w-80 form-input minQualifications"
            {...register("minQualifications", { required: "Required" })}
          >
            <option value={"select"} disabled>
              Select One
            </option>
            <option value={"yes"}>Yes</option>
            <option value={"no"}>No</option>
          </select>
          {errors.minQualifications && (
            <p className="form-error">
              {String(errors.minQualifications.message)}
            </p>
          )}
        </div>

        <div className="question form-field">
          <label className="form-label  py-3" htmlFor="legalWork">
            Are you legally able to work in the country where this job is
            located?<abbr>*</abbr>
          </label>
          <select
            className="w-80 form-input legalWork"
            {...register("legalWork", { required: "Required" })}
          >
            <option value={"select"} disabled>
              Select One
            </option>
            <option value={"yes"}>Yes</option>
            <option value={"no"}>No</option>
          </select>
          {errors.legalWork && (
            <p className="form-error">{String(errors.legalWork.message)}</p>
          )}
        </div>

        <div className="question form-field">
          <label className="form-label  py-3" htmlFor="associateStatus">
            Please select your Company's Associate Status/Affiliation:
            <abbr>*</abbr>
          </label>
          <select
            {...register("associateStatus", { required: "Required" })}
            className="w-80 form-input associateStatus"
          >
            <option value={"select"} disabled>
              Select One
            </option>
            <option value={"current"}>Current Associate</option>
            <option value={"previous"}>Previous Associate</option>
            <option value={"never"}>
              Have never been associated with the company
            </option>
          </select>
          {errors.associateStatus && (
            <p className="form-error">
              {String(errors.associateStatus.message)}
            </p>
          )}
        </div>

        <div className="question form-field">
          <label className="form-label  py-3" htmlFor="hire">
            Are you able to provide work authorization within 3 days of your
            hire?
            <abbr>*</abbr>
          </label>
          <select
            className="w-80 form-input "
            {...register("hire", { required: "Required" })}
          >
            <option value={"select"} disabled>
              Select One
            </option>
            <option value={"yes"}>Yes</option>
            <option value={"no"}>No</option>
          </select>
          {errors.hire && (
            <p className="form-error">{String(errors.hire.message)}</p>
          )}
        </div>

        <div className="question form-field">
          <label className="form-label  py-3" htmlFor="sponsorship">
            Will you now or in the future require "sponsorship for an
            immigration-related employment benefit"? For purposes of this
            question "sponsorship for an immigration-related employment benefit"
            means: an H-1B, TN, L-1 or STEM Extension. (Please ask if you are
            uncertain whether you may need immigration sponsorship or desire
            clarification.)
            <abbr>*</abbr>
          </label>
          <select
            className="w-80 form-input sponsorship"
            {...register("sponsorship", { required: "Required" })}
          >
            <option value={"select"} disabled>
              Select One
            </option>
            <option value={"yes"}>Yes</option>
            <option value={"no"}>No</option>
          </select>
          {errors.sponsorship && (
            <p className="form-error">{String(errors.sponsorship.message)}</p>
          )}
        </div>

        {sponsorshipAnswer === "yes" && (
          <div className="question form-field">
            <label className="form-label" htmlFor="sponsorshipType">
              If yes, please choose the type of sponsorship from the below list:
              <abbr>*</abbr>
            </label>
            <select
              className="w-80 form-input sponsorshipType"
              {...register(`sponsorshipType`, {
                required: "Required",
              })}
            >
              <option value={"select"} disabled>
                Select One
              </option>
              <option value={"h1b"}>H1B</option>
              <option value={"tn"}>TN</option>
              <option value={"l1"}>L1</option>
              <option value={"stemExtension"}>STEM Extension</option>
            </select>
            {errors.sponsorshipType && (
              <p className="form-error">
                {String(errors.sponsorshipType.message)}
              </p>
            )}
          </div>
        )}

        <div className="question form-field">
          <label className="form-label  py-3" htmlFor="availability">
            My availability is:
            <abbr>*</abbr>
          </label>
          <select
            className="w-80 form-input availability"
            {...register("availability", { required: "Required" })}
          >
            <option value={"select"} disabled>
              Select One
            </option>
            <option value={"fullTime"}>Full Time</option>
            <option value={"partTime"}>Part Time</option>
          </select>
          {errors.availability && (
            <p className="form-error">{String(errors.availability.message)}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ApplicationQuestions;
