import { useState } from "react";
import { JsonForms } from '@jsonforms/react';
import schema from './schema.json'
import uischema from './uischema.json'
import {
  materialRenderers,
  materialCells,
} from '@jsonforms/material-renderers';

const initialData = {
    name: 'Max Power',
  };  
export  const FormJsonform = () => {
    const [data, setData] = useState(initialData);
  
    return (
      <div>
        <JsonForms
        schema={schema}
        uischema={uischema}
        data={data}
        renderers={materialRenderers}
        cells={materialCells}
        onChange={({ data, errors }) => setData(data)}
      />
      </div>
    );
  };