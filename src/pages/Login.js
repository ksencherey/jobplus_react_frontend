import React from "react";
import Controls from "../components/controls/Controls";
import PageTitle from "../components/PageTitle";
import PaperForm from "../components/PaperForm";
import Form from "../components/Form";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <PageTitle title="Login" />
      <PaperForm>
        <Form>
          <Controls.FormGroupCustom>
            <Controls.InputLabelCustom color="primary" label="Email" />
            <Controls.TextFieldCustom placeholder="Email" />
          </Controls.FormGroupCustom>

          <Controls.FormGroupCustom>
            <Controls.InputLabelCustom color="primary" label="Password" />
            <Controls.TextFieldCustom placeholder="Password" />
          </Controls.FormGroupCustom>

          <Controls.FormGroupCustom>
            <Controls.ButtonCustom text="Login" />
          </Controls.FormGroupCustom>
        </Form>
        <p className={"Footer"}>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </PaperForm>
    </>
  );
}
