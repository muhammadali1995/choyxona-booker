import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import * as yup from "yup";
import { Dentist } from "../models/Dentist";

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
});

export default function CreateBooking({
  handleClose,
  bookingDate,
  handleSubmit,
  dentist,
  open,
}: {
  handleClose: Function;
  handleSubmit: Function;
  bookingDate: string;
  dentist: Dentist;
  open: boolean;
}) {
  const formik = useFormik({
    initialValues: {
      email: "foobar@example.com",
    },
    validationSchema: validationSchema,
    onSubmit: (values: any) => {
      handleSubmit(values);
    },
  });

  return (
    <Dialog
      fullWidth={true}
      maxWidth="sm"
      open={open}
      onClose={() => handleClose()}
    >
      <DialogTitle>
        Book a time with <strong>{dentist.name}</strong>{" "}
      </DialogTitle>
      <DialogContent>
        <Box
          noValidate
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            m: "auto",
            width: "fit-content",
          }}
        >
          <form onSubmit={formik.handleSubmit}>
            <TextField
              fullWidth
              id="email"
              name="email"
              label="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <Button color="primary" variant="contained" fullWidth type="submit">
              Submit
            </Button>
          </form>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => handleClose()}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}
