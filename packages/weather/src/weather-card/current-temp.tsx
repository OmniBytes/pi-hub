import { Fragment } from "react";

interface CurrentTempProps {
  city: string;
  state: string;
  temp: string;
  tempUnit: string;
}

export function CurrentTemp(props: CurrentTempProps) {
  const { city, state, temp, tempUnit } = props;

  return (
    <Fragment>
      <p className="text-2xl font-bold">
        {temp}° {tempUnit}
      </p>

      <p className="text-center text-xl">
        {city}, {state}
      </p>
    </Fragment>
  );
}
