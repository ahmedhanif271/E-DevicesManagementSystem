import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Login } from './Authentication/Login';
import { MDBBtn } from 'mdb-react-ui-kit';

export function Main() {

  return (
    <div>
      <div >
        <Login />

      </div>
    </div>
  );
}
