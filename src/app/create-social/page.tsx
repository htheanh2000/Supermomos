"use client";
import Button from "@/components/button";
import Container from "@/components/container";
import CustomDatePicker from "@/components/datepicker";
import Checkbox from "@/components/form/checkbox";
import ErrorMessage from "@/components/form/errorMessage";
import Field from "@/components/form/field";
import Radio from "@/components/form/radio";
import TagPicker from "@/components/tagpicker";
import { Form, Formik, Field as FormikField } from "formik";
import * as Yup from "yup";
import ChooseBanner from "./chooseBanner";
import { useAppDispatch } from "@/store/hooks";
import { createSocialAction } from "@/store/features/social/socialSlice";
import { notFound, redirect } from "next/navigation";
import { useRouter } from 'next/navigation';

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

const CreateSocialPage = () => {
  // + title: String(Required)
  // + startAt: DateTime(Required)
  // + venue: String(Required)
  // + capacity: Number(Required)
  // + price: Number(Optional)
  // + description: String(Required)
  // + banner: String(Required)
  // + tags: Array<String>(Required)
  // + isManualApprove: Boolean(Optional)
  // + privacy: String(Required)
  const dispatch = useAppDispatch()
  const router = useRouter();
  const validationSchema = Yup.object({
    // title: Yup.string().required(),
    date: Yup.date().required(),
    time: Yup.string().required(),
    venue: Yup.string().required(),
    capacity: Yup.number().required(),
    price: Yup.number(),
    description: Yup.string().required(),
    // banner: Yup.string().required(),
    // tags: Yup.array().of(Yup.string()).required(),
    isManualApprove: Yup.boolean(),
    privacy: Yup.string().required(),
  });

  const onSubmit = async (values: any, { setSubmitting }: any) => {
    router.push('/social-detail')

    console.log("On submit");
    console.log(values);
    const response = await dispatch(createSocialAction(values));
    console.log("ON SUBMIT RESPONSE",response);
    setSubmitting(false);
    if(response.payload.id) {
      redirect('/detail-social'+ response.payload.id)
    }
    else {
      notFound()
    }
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
        // validationSchema={validationSchema}
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
                    <CustomDatePicker
                      icon="calendar"
                      name={"date"}
                      placeholder="date"
                      datePickerClassName=" max-w-[12rem] w-44 ml-4"
                    />
                    <CustomDatePicker
                      name="time"
                      className=" ml-4"
                      icon="clock"
                      placeholder="Time"
                      datePickerClassName="max-w-[12rem] w-44 ml-4"
                    />
                  </div>
                  <Field
                    icon="location"
                    className="w-full max-w-md mt-8 "
                    name="venue"
                    placeholder="Venue"
                  />
                  <div className="flex justify-between max-w-md">
                    <Field
                      icon="location"
                      className="w-[160px] mt-8"
                      type="number"
                      min={1}
                      max={50}
                      name="capacity"
                      placeholder="Max capacity"
                    />
                    <Field
                      icon="location"
                      className="w-[160px] mt-8"
                      type="number"
                      min={1}
                      max={50}
                      name="price"
                      placeholder="Cost per person"
                    />
                  </div>
                </section>
                <ChooseBanner
                  value={formik.values.banner}
                  onChange={formik.handleChange}
                />
                <div className="min-w-full mt-8 flex flex-col">
                  <label>Description</label>
                  <textarea
                    rows={10}
                    cols={50}
                    onChange={formik.handleChange}
                    name="description"
                    className="w-[600px] rounded-lg px-3 py-3 outline-none mt-2"
                    placeholder="Description of your event..."
                  ></textarea>
                  <ErrorMessage name="description" />
                </div>
                <div className="bg-white mt-8 rounded-lg  p-8  min-w-[600px] max-w-2xl">
                  <h2 className="text-heading-3 text-purple bg-yellow w-fit py-1 px-3">
                    Settings
                  </h2>
                  <Checkbox
                    className="cursor-pointer mt-4"
                    name="isManualApprove"
                  >
                    I want to approve attendees
                  </Checkbox>
                  <Radio name="privacy" options={PRIVACYS} />
                  <TagPicker
                    title="Tag your social"
                    subTitle="Pick tags for our curation engine to work its magin"
                    className="mt-6"
                    data={SOCIAL_TAGS}
                  />
                  <ErrorMessage name="tags"></ErrorMessage>
                </div>
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full max-w-[600px] my-16"
                style={
                  formik.isValid && !formik.isSubmitting ? "primary" : "disable"
                }
              >
                CREATE SOCIAL
              </Button>
            </Form>
          );
        }}
      </Formik>
    </Container>
  );
};

export default CreateSocialPage;
