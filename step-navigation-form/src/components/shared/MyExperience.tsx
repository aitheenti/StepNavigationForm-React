import { useFieldArray, useFormContext } from "react-hook-form";

const MyExperience = () => {
  const { register, control } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    name: "jobDetails",
    control,
  });

  return (
    <>
      <h1> My Experience</h1>
      <div className="experienceSection">
        <h2>Work Experience</h2>
        <div className="form-field">
          {fields.length === 0 && (
            <button
              type="button"
              onClick={() =>
                append({
                  jobTitle: "",
                  companyName: "",
                  location: "",
                  fromDate: new Date(),
                  toDate: new Date(),
                  description: "",
                })
              }
            >
              Add
            </button>
          )}
          {fields.map((item, index) => {
            return (
              <>
                <div className="flex justify-between">
                  <label>Work Experience {index + 1}</label>
                  {index > 0 && (
                    <button type="button" onClick={() => remove(index)}>
                      Remove
                    </button>
                  )}
                </div>

                <div className="form-field">
                  <label className="form-label" htmlFor="jobTitle">
                    Job Title
                  </label>
                  <input
                    type="text"
                    className="form-input"
                    key={item.id}
                    {...register(`jobDetails.${index}.jobTitle`, {
                      required: "Job title is required",
                    })}
                  />
                </div>

                <div className="form-field">
                  <label className="form-label" htmlFor="companyName">
                    Company
                  </label>
                  <input
                    type="text"
                    className="form-input"
                    key={item.id}
                    {...register(`jobDetails.${index}.companyName`, {
                      required: "Company name is required",
                    })}
                  />
                </div>

                <div className="form-field">
                  <label className="form-label" htmlFor="location">
                    Location
                  </label>
                  <input
                    type="text"
                    className="form-input"
                    key={item.id}
                    {...register(`jobDetails.${index}.location`)}
                  />
                </div>

                <div className="form-field">
                  <label className="form-label" htmlFor="fromDate">
                    From Date
                  </label>
                  <input
                    type="date"
                    className="form-input"
                    key={item.id}
                    {...register(`jobDetails.${index}.fromDate`, {
                      required: "Required",
                    })}
                  />
                </div>

                <div className="form-field">
                  <label className="form-label" htmlFor="toDate">
                    To Date
                  </label>
                  <input
                    type="date"
                    className="form-input"
                    key={item.id}
                    {...register(`jobDetails.${index}.toDate`, {
                      required: "Required",
                    })}
                  />
                </div>

                <div className="form-field">
                  <label className="form-label" htmlFor="description">
                    Description
                  </label>
                  <input
                    type="text"
                    className="form-input"
                    key={item.id}
                    {...register(`jobDetails.${index}.description`)}
                  />
                </div>

                <div className="flex py-5">
                  {index === fields.length - 1 && (
                    <button
                      type="button"
                      onClick={() =>
                        append({
                          jobTitle: "",
                          companyName: "",
                          location: "",
                          fromDate: new Date(),
                          toDate: new Date(),
                          description: "",
                        })
                      }
                    >
                      Add More
                    </button>
                  )}
                </div>
              </>
            );
          })}
        </div>
      </div>

      <div className="socials">
        <h2>Social Network URLs</h2>
        <div className="form-field">
          <label className="form-label" htmlFor="linkedin">
            LinkedIn
          </label>
          <input
            type="text"
            className="form-input"
            id="linkedin"
            {...register("socialNetworkUrl")}
          />
        </div>
      </div>
    </>
  );
};

export default MyExperience;
