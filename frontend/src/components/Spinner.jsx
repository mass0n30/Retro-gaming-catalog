/* eslint-disable react-refresh/only-export-components */

import { Spinner } from "react-spinner-toolkit";


export default function CustomSpinner() {

  return (
    <Spinner shape="wave" color="#008eecff" loading speed={1} size={100} transition={true} />
  )
};

export function CustomSpinnerBottom() {

  return (
      <div id="custom-spinner-container">
        <Spinner shape="wave" color="#008eecff" loading speed={1} size={100} transition={true} />
      </div>
  )
}


