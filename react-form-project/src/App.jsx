import "./App.css";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors , isSubmitting },
  } = useForm();

  async function onSubmit(data) {
    //API call ko simulate krte h
    await new Promise((resolve)=>setTimeout(resolve , 5000));
    console.log("submitting the form", data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>First Name: </label>
        <input
          className={errors.firstName ? "input-error" : ""}
          {...register("firstName", {
            required: true,
            minLength: { value: 4, message: "Min length 4 please" },
            maxLength: { value: 6, message: "max length 6 please" },
          })}
        ></input>
        {errors.firstName && (
          <p className="error-msg">{errors.firstName.message}</p>
        )}
      </div>
      <br></br>
      <div>
        <label>Middle Name: </label>
        <input
          className={errors.firstName ? "input-error" : ""}
          {...register("middleName")}
        ></input>
      </div>
      <br></br>
      <div>
        <label>Last Name: </label>
        <input
          className={errors.firstName ? "input-error" : ""}
          {...register("lastName", {
            pattern: {
              value: /^[A-Za-z]+$/i,
              message: "Last Name is not as per rules",
            },
          })}
        />
        {errors.lastName && (
          <p className="error-msg">{errors.lastName.message}</p>
        )}
      </div>
      <br/>
      <input type="submit" disabled= {isSubmitting}
      value={isSubmitting ? "submitting" : "submit"}/>
      
    </form>
  );
}

export default App;
