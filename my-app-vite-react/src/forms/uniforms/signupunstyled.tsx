import React from 'react';
import { AutoForm } from 'uniforms-unstyled';

import { bridge as schema } from './signupschema';

export const SignUpUnstyled  = () => {
  return (
    <AutoForm
      schema={schema}
      onSubmit={(model: any) => alert(JSON.stringify(model, null, 2))}
    />
  );
}