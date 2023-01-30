import { Outlet } from "@remix-run/react";

import React from 'react'

function weather() {
  return (
    <>
        <h4>View Weather</h4>
        <Outlet />

    </>
  )
}

export default weather