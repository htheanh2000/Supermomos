"use client";
import Button from "@/components/button";
import Container from "@/components/container";
import CustomDatePicker from "@/components/datepicker";
import Checkbox from "@/components/form/checkbox";
import ErrorMessage from "@/components/form/errorMessage";
import Field from "@/components/form/field";
import Radio from "@/components/form/radio";
import SelectForm from "@/components/form/select";
import Icon from "@/components/icon";
import Input from "@/components/input";
import Modal from "@/components/modal";
import TagPicker from "@/components/tagpicker";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import ChooseBanner from "./chooseBanner";
const CreateSocialPage = () => {
  // + title: String(Required)
  //   	+ startAt: DateTime(Required)
  // + venue: String(Required)
  // + capacity: Number(Required)
  // + price: Number(Optional)
  // + description: String(Required)
  // + banner: String(Required)
  // + tags: Array<String>(Required)
  // + isManualApprove: Boolean(Optional)
  // + privacy: String(Required)
  interface IForm {
    title: String;
    startAt: Date;
    venue: String;
    capacity: Number;
    price: Number;
    description: String;
    banner: String;
    tags: Array<String>;
    isManualApprove: Boolean;
    privacy: String;
  }
  const initialValues: IForm = {
    title: "",
    startAt: new Date(),
    venue: "",
    capacity: 0,
    price: 0,
    description: "",
    banner: "",
    tags: [],
    isManualApprove: false,
    privacy: "",
  };

  const validationSchema = Yup.object({
    // title: Yup.string().required(),
    startAt: Yup.date().required(),
    venue: Yup.string().required(),
    capacity: Yup.number().required(),
    price: Yup.number(),
    description: Yup.string().required(),
    banner: Yup.string().required(),
    tags: Yup.array().of(Yup.string()).required(),
    isManualApprove: Yup.boolean(),
    privacy: Yup.string().required(),
  });

  const onSubmit = (values: any, { setSubmitting }: any) => {
    console.log("On submit");
    console.log(values);
    setSubmitting(false);
  };

  const SOCIAL_TAGS = [
    {
      label: "Engineering",
      value: "Engineering",
    },
    {
      label: "Product",
      value: "Product",
    },
    {
      label: "Marketing",
      value: "Marketing",
    },
    {
      label: "Design",
      value: "Design",
    },
  ];

  const PRIVACYS = [
    {
      label: "Public",
      value: "Public",
    },
    {
      label: "Curated Audience",
      value: "Curated Audience",
    },
    {
      label: "Community Only",
      value: "Community Only",
    },
  ];

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
                      <CustomDatePicker
                        name={"date"}
                        className=" max-w-[11rem] w-44 ml-4"
                      />
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
                  <ErrorMessage name="date" />
                  <div className="mt-8 flex items-center">
                    <Icon name="location" />
                    <Field
                      className="ml-4 w-full max-w-md"
                      name="venue"
                      placeholder="Venue"
                      label={"venue"}
                    />
                  </div>
                  {/* <ErrorMessage name="venue" /> */}
                  <div className="flex justify-between max-w-md">
                    <div className="mt-8 flex items-center">
                      <Icon name="location" />
                      <Field
                        className="ml-4 w-[160px]"
                        type="number"
                        min={1}
                        max={50}
                        name="capacity"
                        placeholder="Max capacity"
                        label={"capacity"}
                      />
                    </div>
                    <div className="mt-8 flex items-center">
                      <Icon name="location" />
                      <Field
                        className="ml-4 w-[160px] "
                        type="number"
                        min={1}
                        max={50}
                        name="price"
                        placeholder="Cost per person"
                        label={"price"}
                      />
                    </div>
                  </div>
                </section>
                <ChooseBanner />
                <div className="min-w-full mt-8 flex flex-col">
                  <label>Description</label>
                  <textarea
                    rows={10}
                    cols={50}
                    name="description"
                    className="w-[600px] rounded-lg px-3 py-3 outline-none mt-2"
                    placeholder="Description of your event..."
                  ></textarea>
                  <ErrorMessage name="description" />
                </div>
                <div className="bg-white mt-8 rounded-lg  p-8  min-w-max max-w-2xl">
                  <h2 className="text-heading-3 text-purple bg-yellow w-fit py-1 px-3">
                    Settings
                  </h2>
                  <div className="">
                    <div className="cursor-pointer mt-4">
                      <Checkbox name="isManualApprove">
                        I want to approve attendees
                      </Checkbox>
                    </div>
                  </div>
                  <div className="w-[600px]">
                    <Radio name="Privacy" options={PRIVACYS} />
                    <TagPicker
                      title="Tag your social"
                      subTitle="Pick tags for our curation engine to work its magin"
                      className="mt-6"
                      data={SOCIAL_TAGS}
                    />
                  </div>
                </div>
              </div>
              <div className="w-full my-16">
                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  style={
                    formik.isValid && !formik.isSubmitting
                      ? "secondary"
                      : "disable"
                  }
                >
                  CREATE SPCIAL
                </Button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </Container>
  );
};

export default CreateSocialPage;
