"use client";
import Container from "@/components/container";
import CustomDatePicker from "@/components/datepicker";
import Field from "@/components/form/field";
import Icon from "@/components/icon";
import Modal from "@/components/modal";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import ChooseBanner from "./chooseBanner";
const CreateSocialPage = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const onSubmit = (values: any, { setSubmitting }: any) => {
    setSubmitting(false);
  };

  

  return (
    <Container className="mt-32">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => {
          return (
            <Form>
              <div className="flex flex-wrap justify-between">
                <section>
                  <h1 className="text-heading text-white bg-purple w-fit py-1 px-3">
                    Untitle Event
                  </h1>
                  <div className="mt-8 flex">
                    <div className="flex items-center">
                      <Icon size="lg" name="calendar" />
                      <CustomDatePicker className=" max-w-[11rem] w-44 ml-4" />
                    </div>
                    <div className="flex items-center ml-4">
                      <Icon size="lg" name="clock" />
                      <CustomDatePicker
                        timeIntervals={15}
                        timeCaption="Time"
                        dateFormat="h:mm aa"
                        showTimeSelect
                        showTimeSelectOnly
                        placeholderText="Time"
                        className="max-w-[11rem] w-44 ml-4"
                      />
                    </div>
                  </div>
                  <div className="mt-8 flex items-center">
                    <Icon name="location" />
                    <Field
                      className="ml-4 w-full max-w-md"
                      name="Venue"
                      placeholder="Venue"
                    />
                  </div>
                  <div className="flex justify-between max-w-md">
                    <div className="mt-8 flex items-center">
                      <Icon name="location" />
                      <Field
                        className="ml-4 w-[160px]"
                        type="number"
                        min="1"
                        max="50"
                        name="capacity"
                        placeholder="Max capacity"
                      />
                    </div>
                    <div className="mt-8 flex items-center">
                      <Icon name="location" />
                      <Field
                        className="ml-4 w-[160px] "
                        type="number"
                        min="1"
                        max="50"
                        name="cost"
                        placeholder="Cost per person"
                      />
                    </div>
                  </div>
                </section>
                <ChooseBanner/>
                
              </div>
            </Form>
          );
        }}
      </Formik>
    </Container>
  );
};

export default CreateSocialPage;
