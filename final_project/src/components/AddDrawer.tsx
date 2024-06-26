import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import {
  TextField,
  Button,
  MenuItem,
  FormControlLabel,
  Checkbox,
  FormControl,
  FormLabel,
  FormGroup,
} from "@mui/material";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addStoreList } from "@/store/addStoreSlice";
import { AppDispatch } from "@/store";

interface FormValues {
  contactPerson: string;
  email: string;
  phoneNumber: string;
  partner: string;
  address1: string;
  address2: string;
  city: string;
  country: string;
  state: string;
  zip: string;
  storeService: {
    BAC: boolean;
    ISV: boolean;
    XYZ: boolean;
    TS: boolean;
  };
}

const validationSchema = Yup.object().shape({
  contactPerson: Yup.string().required("Contact Person is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phoneNumber: Yup.string().required("Phone Number is required"),
  partner: Yup.string().required("Partner is required"),
  address1: Yup.string().required("Address 1 is required"),
  city: Yup.string().required("City is required"),
  country: Yup.string().required("Country is required"),
  state: Yup.string().required("State is required"),
  zip: Yup.string().required("Zip is required"),
});

const StoreService: React.FC<{ values: any; handleChange: any }> = ({
  values,
  handleChange,
}) => (
  <FormControl component="fieldset" margin="normal">
    <FormLabel component="legend">Store Service</FormLabel>
    <FormGroup>
      <FormControlLabel
        control={
          <Checkbox
            checked={values.storeService.BAC}
            onChange={handleChange}
            name="storeService.BAC"
          />
        }
        label="BAC"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={values.storeService.ISV}
            onChange={handleChange}
            name="storeService.ISV"
          />
        }
        label="ISV"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={values.storeService.XYZ}
            onChange={handleChange}
            name="storeService.XYZ"
          />
        }
        label="XYZ"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={values.storeService.TS}
            onChange={handleChange}
            name="storeService.TS"
          />
        }
        label="TS"
      />
    </FormGroup>
  </FormControl>
);

const AddDrawer: React.FC = () => {
  const [state, setState] = React.useState<{ right: boolean }>({
    right: false,
  });

  const dispatch = useDispatch<AppDispatch>();

  const toggleDrawer =
    (anchor: "right", open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const handleCloseDrawer = (anchor: "right") => () => {
    setState({ ...state, [anchor]: false });
  };

  return (
    <div>
      <Button onClick={toggleDrawer("right", true)} variant="contained" color="primary">
        Add Store
      </Button>
      <Drawer
        anchor="right"
        open={state.right}
        onClose={toggleDrawer("right", false)}
      >
        <Box
          sx={{ width: 500, mt: 10 }}
          role="presentation"
          onClick={(event) => event.stopPropagation()}
          onKeyDown={(event) => event.stopPropagation()}
        >
          <Formik
            initialValues={{
              contactPerson: "",
              email: "",
              phoneNumber: "",
              partner: "",
              address1: "",
              address2: "",
              city: "",
              country: "US",
              state: "",
              zip: "",
              storeService: {
                BAC: false,
                ISV: false,
                XYZ: false,
                TS: false,
              },
            }}
            validationSchema={validationSchema}
            onSubmit={(values: FormValues) => {
              dispatch(addStoreList(values));
              handleCloseDrawer("right")();
            }}
          >
            {({ handleChange, handleBlur, values, touched, errors }) => (
              <Form>
                <Field
                  as={TextField}
                  name="contactPerson"
                  label="Contact Person"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.contactPerson}
                  error={touched.contactPerson && Boolean(errors.contactPerson)}
                  helperText={touched.contactPerson && errors.contactPerson}
                />
                <Field
                  as={TextField}
                  name="email"
                  label="Email"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                />
                <Field
                  as={TextField}
                  name="phoneNumber"
                  label="Phone Number"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.phoneNumber}
                  error={touched.phoneNumber && Boolean(errors.phoneNumber)}
                  helperText={touched.phoneNumber && errors.phoneNumber}
                />
                <Field
                  as={TextField}
                  name="partner"
                  label="Partner"
                  select
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.partner}
                  error={touched.partner && Boolean(errors.partner)}
                  helperText={touched.partner && errors.partner}
                >
                  <MenuItem value="partner1">Partner 1</MenuItem>
                  <MenuItem value="partner2">Partner 2</MenuItem>
                  <MenuItem value="partner3">Partner 3</MenuItem>
                </Field>
                <Field
                  as={TextField}
                  name="address1"
                  label="Address 1"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.address1}
                  error={touched.address1 && Boolean(errors.address1)}
                  helperText={touched.address1 && errors.address1}
                />
                <Field
                  as={TextField}
                  name="address2"
                  label="Address 2"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.address2}
                  error={touched.address2 && Boolean(errors.address2)}
                  helperText={touched.address2 && errors.address2}
                />
                <Field
                  as={TextField}
                  name="city"
                  label="City"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.city}
                  error={touched.city && Boolean(errors.city)}
                  helperText={touched.city && errors.city}
                />
                <Field
                  as={TextField}
                  name="country"
                  label="Select Country"
                  select
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.country}
                  error={touched.country && Boolean(errors.country)}
                  helperText={touched.country && errors.country}
                >
                  <MenuItem value="US">US</MenuItem>
                  <MenuItem value="CA">Canada</MenuItem>
                </Field>
                <Field
                  as={TextField}
                  name="state"
                  label="Select State"
                  select
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.state}
                  error={touched.state && Boolean(errors.state)}
                  helperText={touched.state && errors.state}
                >
                  <MenuItem value="CA">California</MenuItem>
                  <MenuItem value="TX">Texas</MenuItem>
                  <MenuItem value="NY">New York</MenuItem>
                </Field>
                <Field
                  as={TextField}
                  name="zip"
                  label="Zip"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.zip}
                  error={touched.zip && Boolean(errors.zip)}
                  helperText={touched.zip && errors.zip}
                />
                <StoreService values={values} handleChange={handleChange} />
                <Box mt={2} display="flex" justifyContent="space-between">
                  <Button type="submit" variant="contained" color="primary">
                    Submit
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={handleCloseDrawer("right")}
>
Cancel
</Button>
</Box>
</Form>
)}
</Formik>
</Box>
</Drawer>
</div>
);
};

export default AddDrawer;







