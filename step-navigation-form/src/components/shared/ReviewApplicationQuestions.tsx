import { useFormContext } from "react-hook-form";
import { ApplicationQuestionsFormValues } from "../../model/FormValues";

const ReviewApplicationQuestions = () => {
  const { getValues } = useFormContext<ApplicationQuestionsFormValues>();
  const formValues = getValues();

  return (
    <div className="applicationQuestionsContainer">
      <h1>Application Questions</h1>
      <div className="applicationQuestions">
        <h4>
          I understand that this application will apply only to the position(s)
          for which I have applied during this session, and will be active until
          those position(s) are filled or are closed. If I would like to be
          considered for additional positions with the company, I understand and
          agree that it is my responsibility to submit an additional
          application(s) for any such position(s).
          <br />
          Walmart Inc. offers reasonable accommodation in the employment process
          for individuals with disabilities. If you need assistance in the
          application or hiring process to accommodate a disability, you may
          request an accommodation at any time. Please contact any member of
          management at your nearest Walmart Inc. facility. Walmart Inc. is an
          Equal Opportunity Employer - By Choice.
          <br />I understand that at some point during the hiring process I may
          be subject to a criminal background check and/or drug screen.
        </h4>

        <>
          <h4>
            Are you legally able to work in the country where this job is
            located?
          </h4>
          <p>{formValues.legalWork}</p>
          <h4> Please selec your company's Associate Status</h4>
          <p>{formValues.associateStatus}</p>
          <h4>
            Are you able to provide work authorization within 3 days of your
            hire?
          </h4>
          <p>{formValues.hire}</p>
          <h4>
            Will you now or in the future require sponsorship for employment
            visa status?
          </h4>
          <p>{formValues.sponsorship}</p>
          <h4>What type of sponsorship will you require?</h4>
          <p>{formValues.sponsorshipType}</p>
          <h4>What is your availability?</h4>
          <p>{formValues.availability}</p>
          <h4>Minimum Qualifications</h4>
          <p>{formValues.minQualifications}</p>
        </>
      </div>
    </div>
  );
};

export default ReviewApplicationQuestions;
