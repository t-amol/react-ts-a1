import React from 'react';
import { AutoForm } from 'uniforms-unstyled';

import SimpleSchema from 'simpl-schema';
import { SimpleSchema2Bridge } from 'uniforms-bridge-simple-schema-2';


const schema:SimpleSchema = new SimpleSchema({
  id: {label: "Mobile number", type: Number,min: 1000000000, max: 9999999999, required: true},
  firstName: { label: "First Name", type: String, min: 2 },
  lastName: { label: "Last Name", type: String, min: 2 },
});

const bridge = new SimpleSchema2Bridge(schema);

const FormUnstyled = () => {
  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <AutoForm schema={bridge} onSubmit={onSubmit} />
  );
};

export default FormUnstyled;
