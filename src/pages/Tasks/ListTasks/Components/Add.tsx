import * as React from "react";
import { Formik, FormikConfig, FormikValues, Field } from "formik";

import { Button, Modal, Paper, Typography, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch } from "react-redux";
import { taskSchema } from "../validator";
import { add } from "../../../../store/modules/task/actions";
import { useTranslation } from "../../../../hooks/use-translation";

const AddModal = () => {
  const dispatch = useDispatch();
  const { translate } = useTranslation();

  const [open, setOpen] = React.useState(false);

  const handleSubmit = (payload: FormikValues) => {
    dispatch(add(payload));
  };

  const formikConfig: FormikConfig<FormikValues> = {
    initialValues: {
      title: "",
      description: "",
    },
    validationSchema: taskSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        size="medium"
        startIcon={<AddIcon />}
        color="primary"
        variant="contained"
        sx={{ mt: 3, mb: 3 }}
        onClick={handleOpen}
      >
        {translate("TASK:TITLE")}
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Paper
          elevation={1}
          variant="outlined"
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            minWidth: 300,
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography component="h1" variant="h5">
            {translate("TASK:TITLE")}
          </Typography>
          <Typography>{translate("TASK:ADD_SUBTITLE")}</Typography>
          <Formik {...formikConfig}>
            {({ handleSubmit, errors, setFieldValue, values }) => (
              <form onSubmit={handleSubmit}>
                <Field
                  name="title"
                  label={translate("TASK:RESOURCES:TITLE")}
                  margin="normal"
                  required
                  fullWidth
                  value={values.title}
                  component={TextField}
                  helperText={translate(errors.title as string)}
                  error={errors?.title}
                  onChange={({ target }: React.ChangeEvent<HTMLInputElement>) =>
                    setFieldValue("title", target.value)
                  }
                />
                <Field
                  name="description"
                  label={translate("TASK:RESOURCES:DESCRIPTION")}
                  margin="normal"
                  required
                  fullWidth
                  value={values.description}
                  component={TextField}
                  helperText={translate(errors.description as string)}
                  error={errors?.description}
                  onChange={({ target }: React.ChangeEvent<HTMLInputElement>) =>
                    setFieldValue("description", target.value)
                  }
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="success"
                  fullWidth
                  startIcon={<AddIcon />}
                  sx={{ mt: 2 }}
                >
                  {translate("TASK:SUBMIT")}
                </Button>
              </form>
            )}
          </Formik>
        </Paper>
      </Modal>
    </div>
  );
};

export default AddModal;
