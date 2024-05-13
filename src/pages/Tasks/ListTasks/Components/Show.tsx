import * as React from "react";
import { Formik, FormikConfig, FormikValues, Field } from "formik";
import { IconButton, Modal, Paper, Typography, TextField } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useDispatch, useSelector } from "react-redux";
import { find } from "../../../../store/modules/task/actions";
import { useTranslation } from "../../../../hooks/use-translation";

const ShowModal = (props: any) => {
  const dispatch = useDispatch();
  const { itemEdit } = useSelector<any, any>((item) => item.task);
  const [open, setOpen] = React.useState(false);
  const { translate } = useTranslation();

  React.useEffect(() => {
    if (open) {
      dispatch(find(props.id));
    }
  }, [open]);

  const formikConfig: FormikConfig<FormikValues> = {
    enableReinitialize: true,
    initialValues: {
      title: itemEdit?.title,
      description: itemEdit?.description,
      status: itemEdit?.status,
    },
    onSubmit: () => {},
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <IconButton aria-label="edit" onClick={handleOpen}>
        <VisibilityIcon />
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
            {translate("TASK:SHOW_TITLE")}
          </Typography>
          <Typography>{translate("TASK:SHOW_SUBTITLE")}</Typography>
          <Formik {...formikConfig}>
            {({ handleSubmit, values }) => (
              <form onSubmit={handleSubmit}>
                <Field
                  name="title"
                  margin="normal"
                  fullWidth
                  value={values?.title}
                  component={TextField}
                  disabled
                />
                <Field
                  name="description"
                  margin="normal"
                  fullWidth
                  value={values?.description}
                  component={TextField}
                  disabled
                />
                <Field
                  name="status"
                  margin="normal"
                  fullWidth
                  value={values?.status}
                  component={TextField}
                  disabled
                />
              </form>
            )}
          </Formik>
        </Paper>
      </Modal>
    </>
  );
};

export default ShowModal;
