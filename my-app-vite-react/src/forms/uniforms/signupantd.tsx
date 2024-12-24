import React from 'react';
import { AutoForm } from 'uniforms-antd';

import { bridge as schema } from './signupschema';

export const SignUpAntd  = () => {
  return (
    <AutoForm
      schema={schema}
      onSubmit={(model: any) => alert(JSON.stringify(model, null, 2))}
    />
  );
}