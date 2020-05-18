//This is the main layout of the web app, creates margins and centers content.
import React from 'react';
import { Container } from 'semantic-ui-react';

export default (props) => {
  return (
    <div>
        <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"></link>
        {props.children}
    </div>
  );
};
