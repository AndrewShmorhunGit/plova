// import React from "react";
import { IOrderState } from "../modules/modules";

export const UserOrder = (props: {
  orderId: string;
  orderCreationTime: string;
  orderObj: IOrderState;
}) => {
  return (
    <div>
      <h3>Order from: {props.orderObj.brandName}</h3>
      <h4>
        Order time <time>{props.orderCreationTime}</time>
      </h4>
      <h4>OrderId: {props.orderId}</h4>
    </div>
  );
};
