import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { FormValues } from "../model/FormValues";

const RHForm = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col">
        <h1> My Information</h1>
        <div className="form-field">
          <label className="form-label"> Country </label>
          <input
            className="form-input"
            type="text"
            placeholder="Country"
            {...register("country", { required: "This field is required" })}
          />
          {errors.country && (
            <p className="form-error">This field is required.</p>
          )}
        </div>
        <hr className="my-5" />

        <div className="form-field">
          <label className="form-label"> Email </label>
          <input
            className="form-input"
            type="email"
            placeholder="Email"
            {...register("email", {
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
              validate: {
                notAdmin: (value) =>
                  value !== "admin@example.com" || "This email is not allowed",
                notBlacklisted: (value) =>
                  !value.endsWith("@blacklist.com") ||
                  "This domain is not allowed",
                notGmail: (value) =>
                  !value.endsWith("@gmail.com") || "This domain is not allowed",
              },
            })}
          />
          <p className="form-error">{errors.email?.message}</p>
        </div>

        <h2> Legal Name </h2>
        <div className="form-field">
          <label className="form-label"> Prefix</label>
          <input
            {...register("prefix")}
            className="form-input"
            type="text"
            placeholder="Prefix"
          />
        </div>
        <div className="form-field">
          <label className="form-label"> First Name</label>
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
          <label className="form-label"> Middle Name</label>
          <input
            {...register("middleName")}
            className="form-input"
            type="text"
            placeholder="Middle Name"
          />
        </div>
        <div className="form-field">
          <label className="form-label"> Last Name</label>
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
          <label className="form-label"> Suffix</label>
          <input
            {...register("suffix")}
            className="form-input"
            type="text"
            placeholder="Suffix"
          />
        </div>
        <button type="submit" className="btn">
          Submit
        </button>
        <DevTool control={control} />
      </div>
    </form>
  );
};

export default RHForm;
