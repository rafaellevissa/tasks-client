import * as React from "react";
import { Formik, FormikConfig, FormikValues, Field } from "formik";
import {
  Button,
  IconButton,
  Modal,
  Paper,
  Typography,
  TextField,
  MenuItem,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch, useSelector } from "react-redux";
import { taskSchema } from "../validator";
import { find, update } from "../../../../store/modules/task/actions";
import { useTranslation } from "../../../../hooks/use-translation";

const EditModal = (props: any) => {
  const dispatch = useDispatch();
  const { itemEdit } = useSelector<any, any>((item) => item.task);
  const [open, setOpen] = React.useState(false);
  const { translate } = useTranslation();

  React.useEffect(() => {
    if (open) {
      dispatch(find(props.id));
    }
  }, [open]);

  const handleSubmit = (payload: FormikValues) => {
    const data = {
      ...payload,
      id: props.id,
    };

    dispatch(update(data));
  };

  const formikConfig: FormikConfig<FormikValues> = {
    enableReinitialize: true,
    initialValues: {
      title: itemEdit?.title,
      description: itemEdit?.description,
      status: itemEdit?.status,
    },
    validationSchema: taskSchema,
    onSubmit: handleSubmit,
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <IconButton aria-label="edit" onClick={handleOpen}>
        <EditIcon />
      </IconButton>
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
            {translate("TASK:EDIT_TITLE")}
          </Typography>
          <Typography>{translate("TASK:EDIT_SUBTITLE")}</Typography>
          <Formik {...formikConfig}>
            {({ handleSubmit, errors, setFieldValue, values }) => (
              <form onSubmit={handleSubmit}>
                <Field
                  name="title"
                  label={translate("TASK:RESOURCES:TITLE")}
                  margin="normal"
                  required
                  fullWidth
                  value={values.title || ""}
                  component={TextField}
                  helperText={translate(errors.title as string)}
                  error={errors?.title}
                  onChange={({ target }: React.ChangeEvent<HTMLInputElement>) =>
                    setFieldValue("title", target.value)
                  }
                  InputLabelProps={{
                    shrink: values.title ? true : undefined,
                  }}
                />
                <Field
                  name="description"
                  label={translate("TASK:RESOURCES:DESCRIPTION")}
                  margin="normal"
                  required
                  fullWidth
                  value={values.description || ""}
                  component={TextField}
                  helperText={translate(errors.description as string)}
                  error={errors?.description}
                  onChange={({ target }: React.ChangeEvent<HTMLInputElement>) =>
                    setFieldValue("description", target.value)
                  }
                  InputLabelProps={{
                    shrink: values.title ? true : undefined,
                  }}
                />
                <Field
                  name="status"
                  label={translate("TASK:RESOURCES:STATUS")}
                  margin="normal"
                  required
                  fullWidth
                  select
                  value={values.status || ""}
                  component={TextField}
                  helperText={translate(errors.status as string)}
                  error={errors?.status}
                  onChange={({ target }: React.ChangeEvent<HTMLInputElement>) =>
                    setFieldValue("status", target.value)
                  }
                >
                  <MenuItem value="pending">{translate("PENDING")}</MenuItem>
                  <MenuItem value="done">{translate("DONE")}</MenuItem>
                </Field>
                <Button
                  type="submit"
                  variant="contained"
                  color="success"
                  fullWidth
                  startIcon={<EditIcon />}
                  sx={{ mt: 2 }}
                >
                  {translate("TASK:SUBMIT")}
                </Button>
              </form>
            )}
          </Formik>
        </Paper>
      </Modal>
    </>
  );
};

export default EditModal;
