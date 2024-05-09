import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleClick } from "../../redux/actions";

const Page = () => {
  const dispatch = useDispatch();
  const title = useSelector((state) => state.cardReducer.title);
  return (
    <div>
      <span>{title}</span>
      <button onClick={() => dispatch(handleClick())}>+</button>
    </div>
  );
};

export default Page;
