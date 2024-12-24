import React from 'react';
import { AutoForm } from 'uniforms-bootstrap4';

import { bridge as schema } from './signupschema';

export const SignUpBootstrap4  = () => {
  return (
    <AutoForm
      schema={schema}
      onSubmit={(model: any) => alert(JSON.stringify(model, null, 2))}
    />
  );
}