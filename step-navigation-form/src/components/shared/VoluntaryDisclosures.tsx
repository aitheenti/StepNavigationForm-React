import { useFormContext } from "react-hook-form";

const VoluntaryDisclosures = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <h1>Voluntary Disclosures</h1>
      <div className="voluntaryDisclosuresContainer">
        <h4>
          Applicants for US Jobs and Positions: I understand this application
          will apply only to the position(s) for which I have applied during
          this session, and will be active until those position(s) are filled or
          are closed. If I would like to be considered for additional positions
          with the company, I understand and agree that it is my responsibility
          to submit an additional application(s) for any such position(s).
        </h4>
        <br />
        <h4>
          Walmart Inc. offers reasonable accommodation in the employment process
          for individuals with disabilities. If you need assistance in the
          application or hiring process to accommodate a disability, you may
          request an accommodation at any time. Please contact any member of
          management at your nearest Walmart Inc. facility. Walmart Inc. is an
          Equal Opportunity Employer - By Choice.
        </h4>
        <br />
        <h4>
          I understand that at some point during the hiring process I may be
          subject to a criminal background check and/or drug screen.
        </h4>{" "}
        <br />
        <h4>
          I certify that the information on this application is correct and I
          understand that any misrepresentation or omission of any information
          will result in my disqualification from consideration for employment
          or, if employed, my dismissal. I understand that this application is
          not a contract, offer, or promise of employment.{" "}
        </h4>
        <br />
        <h4>
          <strong>Applicants for Puerto Rico Jobs and Positions:</strong> I
          understand this application will apply only to the position(s) for
          which I have applied during this session, and will be active until
          those position(s) are filled or are closed. If I would like to be
          considered for additional positions with the company, I understand and
          agree that it is my responsibility to submit an additional
          application(s) for any such position(s).
        </h4>{" "}
        <br />{" "}
        <h4>
          Walmart Puerto Rico Inc. offers reasonable accommodation in the
          employment process for individuals with disabilities. If you need
          assistance in the application or hiring process to accommodate a
          disability, you may request an accommodation at any time. Please
          contact any member of management at your nearest Walmart Puerto Rico
          Inc. facility. Walmart Puerto Rico Inc. is an Equal Opportunity
          Employer - By Choice.
        </h4>{" "}
        <br />{" "}
        <h4>
          I understand that at some point during the hiring process I may be
          subject to a criminal background check and/or drug screen. Walmart
          Puerto Rico, Inc., in considering my application for employment, may
          verify the information set forth on this application and obtain
          additional background information related to my background. I
          authorize all persons, schools, companies, corporations, and law
          enforcement agencies to supply any information concerning my
          background.
        </h4>{" "}
        <br />{" "}
        <h4>
          I understand that Walmart Puerto Rico, Inc., has a commitment to
          maintain an alcohol/drug free workplace and requires a drug screening
          test as part of its selection and hiring process for certain
          positions. I understand that, if required, such drug screening will
          consist of the testing of a urine sample (or, if under the
          circumstances it is impossible to take a urine sample, any other
          medically recognized test) to detect traceable amounts of a controlled
          substance in my body. Please review the Alcohol and Drug Free
          Workplace Policy for Walmart Puerto Rico, Inc.
          (https://bit.ly/3BmQYnQ) for details regarding the established
          procedure. If, after conclusion of the procedure outlined in the
          Policy in this regard, it is determined that my specimen contains a
          prohibited controlled substance or was altered or substituted, I will
          be disqualified from consideration for employment and any offer of
          employment will be withdrawn. I further understand that if I am
          employed, I may be required to submit to alcohol/drug testing under
          certain circumstances during my employment as provided by the Policy.{" "}
        </h4>
        <br />
        <h4>
          I certify that the information on this application is correct and I
          understand that any misrepresentation or omission of any information
          will result in my disqualification from consideration for employment
          or, if employed, my dismissal. I understand that this application is
          not a contract, offer, or promise of employment and that if hired, I
          will be able to resign at any time for any reason. I further
          understand that no one other than an authorized representative of
          Walmart Puerto Rico, Inc. has the authority to enter into an
          employment contract or agreement with me, and that my employment can
          be changed only by a written agreement signed by an authorized
          representative of Walmart Puerto Rico, Inc.
        </h4>{" "}
        <br />{" "}
        <h4>
          <strong>
            Applicants for US and Puerto Rico Jobs and Positions:{" "}
          </strong>
          When you opt in to receive text messages in your Walmart/Sam’s Club
          Recruiting (“Walmart Inc.”) job application, you agree that you are
          the account holder for the phone number provided or have the account
          holder's consent to enroll and are at least 18 or older. The Walmart
          Recruiting text message program is a message program that delivers
          information about how to apply for Walmart jobs and information about
          the recruiting process, such as your scheduled interview time or
          information about a job offer or job orientation if you are selected
          for a position. Message frequency may vary. There is no charge from
          Walmart to receive text messages, but YOUR SERVICE PROVIDER'S MESSAGE
          AND DATA RATES MAY APPLY. The texts will be sent via automated
          technology. You may opt out by texting STOP to 205205. For help on
          this specific program, text HELP to 205205 or you can contact us at
          1-800-530-9929 or at Walmart Corporate, Privacy Office, MS #0160 702
          SW 8th Street, Bentonville, AR 72716-0160. Participating carriers
          include AT&T, Verizon Wireless, Sprint, T-Mobile, MetroPCS, U.S.
          Cellular, Alltel, Boost Mobile, Nextel, and Virgin Mobile. Minor
          carriers: Alaska Communications Systems (ACS), Appalachian Wireless
          (EKN), Bluegrass Cellular, Cellular One of East Central IL (ECIT),
          Cellular One of Northeast Pennsylvania, Cincinnati Bell Wireless,
          Cricket, Coral Wireless (Mobi PCS), COX, Cross, Element Mobile (Flat
          Wireless), Epic Touch (Elkhart Telephone), GCI, Golden State, Hawkeye
          (Chat Mobility), Hawkeye (NW Missouri), Illinois Valley Cellular,
          Inland Cellular, iWireless (Iowa Wireless), Keystone Wireless (Immix
          Wireless/PC Man), Mosaic (Consolidated or CTC Telecom), Nex-Tech
          Wireless, NTelos, Panhandle Communications, Pioneer, Plateau (Texas
          RSA 3 Ltd), Revol, RINA, Simmetry (TMP Corporation), Thumb Cellular,
          Union Wireless, United Wireless, Viaero Wireless, and West Central
          (WCC or 5 Star Wireless). Walmart and participating carriers are not
          liable for delayed or undelivered messages. Product is not compatible
          with all cell phone models. You can access our mobile terms online at{" "}
          <a href="https://bit.ly/3emQz9s">Terms And Conditions</a> Yes, I have
          read and consent to the Terms and Conditions
        </h4>
        <label htmlFor="termsAndConditions">
          Yes, I have read and consent to the Terms and Conditions
        </label>
        <input
          type="checkbox"
          {...register("termsAndConditions", {
            required: "You must accept to Terms & Conditions",
          })}
        />
        {errors.termsAndConditions && (
          <p className="form-error">
            {String(errors.termsAndConditions.message)}
          </p>
        )}
      </div>
    </div>
  );
};

export default VoluntaryDisclosures;
