import React, { Component } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const copySuccessToast = () => {
  return toast.success("Text copied to clipboard", {
    position: toast.POSITION.TOP_RIGHT
  });
};
