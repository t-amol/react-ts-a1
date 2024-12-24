import React from 'react';
import { AutoForm } from 'uniforms-semantic';

import { bridge as schema } from './signupschema';

export const SignUpSemantic  = () => {
  return (
    <AutoForm
      schema={schema}
      onSubmit={(model: any) => alert(JSON.stringify(model, null, 2))}
    />
  );
}