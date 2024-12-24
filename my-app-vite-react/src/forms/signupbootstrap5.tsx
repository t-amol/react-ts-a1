import React from 'react';
import { AutoForm } from 'uniforms-bootstrap5';

import { bridge as schema } from './signupschema';

export const SignUpBootstrap5  = () => {
  return (
    <AutoForm
      schema={schema}
      onSubmit={(model: any) => alert(JSON.stringify(model, null, 2))}
    />
  );
}