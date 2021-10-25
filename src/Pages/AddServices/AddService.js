import React from "react";
import "./AddService.css";
import { useForm } from "react-hook-form";
import axios from "axios";

const AddService = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("http://localhost:5000/services", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("Service added successfully!");
          reset();
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="addService">
      <h2>Please Add a service</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="Name"
          {...register("name", { required: true, maxLength: 20 })}
        />
        <input placeholder="Price" type="number" {...register("price")} />
        <input placeholder="Image Url" {...register("img")} />
        <textarea placeholder="Description" {...register("description")} />
        <input placeholder type="submit" />
      </form>
    </div>
  );
};

export default AddService;
