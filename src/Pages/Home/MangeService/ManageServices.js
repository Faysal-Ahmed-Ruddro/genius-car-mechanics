import React, { useEffect, useState } from "react";

const ManageServices = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    const url = `http://localhost:5000/services`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  const handleDelete = (id) => {
    const url = `http://localhost:5000/services/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          alert("Delete Succeccfully");
          const remainingServices = services.filter(
            (service) => service._id !== id
          );
          setServices(remainingServices);
        }
      });
  };
  return (
    <>
      <h2>Total Manage Service: {services.length}</h2>
      <div className="service-container">
        {services.map((service) => (
          <div key={service?._id} className="service p-3">
            <img className="rounded" src={service.img} alt="" />
            <h3>{service.name}</h3>
            <h5>Price: {service.price}</h5>
            <p className="px-3">{service.description}</p>
            <button
              className="btn btn-primary"
              onClick={() => handleDelete(service._id)}
            >
              DELETE
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default ManageServices;
