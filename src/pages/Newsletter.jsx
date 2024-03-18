import axios from "axios";
import { Form, redirect, useNavigation } from "react-router-dom";
import {} from "react-router-dom";
import { toast } from "react-toastify";

const newsletterUrl = "https://www.course-api.com/cocktails-newsletter";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    const response = await axios.post(newsletterUrl, data);
    console.log(response.data);
    toast.success(response.data.msg);
    return redirect("/");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const Newsletter = () => {
  const submitting = useNavigation().state === "submitting";
  console.log(submitting);
  return (
    <Form method="POST" className="form">
      <h4 style={{ textAlign: "center", marginBottom: "2rem" }}>
        our newsletter
      </h4>
      <div className="form-row">
        <label htmlFor="firstName" className="form-label">
          <input
            type="text"
            name="name"
            id="firstName"
            defaultValue="Elvin"
            className="form-input"
          />
        </label>
      </div>
      <div className="form-row">
        <label htmlFor="lastName" className="form-label">
          <input
            type="text"
            name="lastName"
            id="lastName"
            defaultValue="Miriyev"
            className="form-input"
          />
        </label>
      </div>
      <div className="form-row">
        <label htmlFor="email" className="form-label">
          <input
            type="email"
            name="email"
            id="email"
            defaultValue="test@test.com"
            className="form-input"
          />
        </label>
      </div>
      <button
        type="submit"
        className="btn btn-block"
        style={{ marginTop: "0.5rem" }}
        disabled={submitting}
      >
        {submitting ? "submitting" : "submit"}
      </button>{" "}
    </Form>
  );
};
export default Newsletter;
