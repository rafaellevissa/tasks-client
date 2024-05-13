import * as Yup from "yup";

export const taskSchema = Yup.object().shape({
  title: Yup.string().required("ERROR:VALIDATION:REQUIRED"),
  description: Yup.string().required("ERROR:VALIDATION:REQUIRED"),
  status: Yup.string().optional(),
});
