import React from "react";
import PageTitle from "../components/PageTitle";
import PaperForm from "../components/PaperForm";
import Form from "../components/Form";
import Controls from "../components/controls/Controls";

export default function() {
  const sectors = [
    { name: "Technology" },
    { name: "Engineering" },
    { name: "Health" },
  ];

  return (
    <>
      <PageTitle title="Profile" />
      <PaperForm>
        <Form>
          <Controls.FormGroupCustom>
            <Controls.InputLabelCustom
              color="primary"
              label="Desired job title"
            />
            <Controls.TextFieldCustom placeholder="Desired job title" />
          </Controls.FormGroupCustom>

          <Controls.FormGroupCustom>
            <Controls.InputLabelCustom
              color="primary"
              label="Min per annum salary"
            />
            <Controls.TextFieldCustom placeholder="Min per annum salary" />
          </Controls.FormGroupCustom>

          <Controls.FormGroupCustom>
            <Controls.InputLabelCustom color="primary" label="Job type" />
            <Controls.CheckboxCustom value="Permanent" />
            <Controls.CheckboxCustom value="Temporary" />
            <Controls.CheckboxCustom value="Conract" />
          </Controls.FormGroupCustom>

          <Controls.FormGroupCustom>
            <Controls.InputLabelCustom color="primary" label="Sector" />
            <Controls.SelectCustom items={sectors} />
          </Controls.FormGroupCustom>

          <Controls.FormGroupCustom>
            <Controls.InputLabelCustom color="primary" label="Experience" />
            <Controls.TextareaCustom placeholder="Experience" />
          </Controls.FormGroupCustom>

          <Controls.FormGroupCustom>
            <Controls.ButtonCustom />
          </Controls.FormGroupCustom>
        </Form>
      </PaperForm>
    </>
  );
}
