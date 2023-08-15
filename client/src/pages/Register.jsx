import {Form, Link, redirect} from "react-router-dom";
import {toast} from "react-toastify";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import {FormRow, Logo, SubmitBtn} from "../components";
import customFetch from "../utils/customFetch";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await customFetch.post("/auth/register", data);
    toast.success("Registration successful");
    return redirect("/login");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const Register = () => {
  return (
    <Wrapper>
      <Form method="post" className="form">
        <Logo />
        <h4>Register</h4>
        <FormRow type="text" name="name" defaultValue="sasnarine" />

        <FormRow
          type="text"
          name="lastName"
          labelText="last name"
          defaultValue="deodat"
        />

        <FormRow type="text" name="location" defaultValue="waterbury" />

        <FormRow type="email" name="email" defaultValue="sasnarine@gmail.com" />

        <FormRow type="password" name="password" defaultValue="secret123" />
        <SubmitBtn />
        <p>
          Already a member?{" "}
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};
export default Register;
