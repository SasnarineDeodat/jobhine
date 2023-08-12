import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { FormRow, Logo } from "../components";

const Register = () => {
  return (
    <Wrapper>
      <div className="form">
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

        <FormRow type="email" name="email" defaultValue="sasnarine@gamil.com" />

        <FormRow type="password" name="password" defaultValue="secret123" />
        <button type="submit" className="btn btn-block">
          submit
        </button>
        <p>
          Already a member?{" "}
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
      </div>
    </Wrapper>
  );
};
export default Register;
