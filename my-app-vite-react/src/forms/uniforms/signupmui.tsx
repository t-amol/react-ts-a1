import React from 'react';
import { AutoForm } from 'uniforms-mui';

import { bridge as schema } from './signupschema';

export const SignUpMui  = () => {
  return (
    <AutoForm
      schema={schema}
      onSubmit={(model: any) => alert(JSON.stringify(model, null, 2))}
    />
  );
}