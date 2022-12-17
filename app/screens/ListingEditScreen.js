import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";
import CategoryPickerItem from "../componenets/CategoryPickerItem";

import {
  AppForm as Form,
  AppFormField as FormField,
  AppFormPicker as Picker,
  SubmitButton,
} from "../componenets/Forms";
import Screen from "../componenets/Screen";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
});

const categories = [
  { label: "Furniture", value: 1, backgroundColor: 'red', icon: 'apps' },
  { label: "Clothing", value: 2, backgroundColor: 'green', icon: 'email' },
  { label: "Camera", value: 3, backgroundColor: 'blue', icon: 'lock' },
  { label: "Camera", value: 3, backgroundColor: 'blue', icon: 'lock' },
  { label: "Camera", value: 3, backgroundColor: 'blue', icon: 'lock' },
  { label: "Camera", value: 3, backgroundColor: 'blue', icon: 'lock' },
  { label: "Camera", value: 3, backgroundColor: 'blue', icon: 'lock' },
  { label: "Camera", value: 3, backgroundColor: 'blue', icon: 'lock' },
  { label: "Camera", value: 3, backgroundColor: 'blue', icon: 'lock' },
];

function ListingEditScreen() {
  return (
    <Screen style={styles.container}>
      <Form
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <FormField maxLength={255} name="title" placeholder="Title" />
        <FormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          width={120}
        />
        <Picker items={categories} name="category" placeholder="Category" width='50%' PickerItemComponent={CategoryPickerItem} numberOfColumns={3}  />
        <FormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
export default ListingEditScreen;