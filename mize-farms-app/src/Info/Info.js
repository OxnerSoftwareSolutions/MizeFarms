import React from "react";

const Info = () => {
  const info = {
    name: "Mize Farms",
    contact: "businessemail@mail.com",
    address: "123 Main St, Anytown USA",
    phone: "(123) 456-7890",
    socials: [
      {
        name: "Facebook",
        link: "https://www.facebook.com/mizefarms/",
        icon: "fa fa-facebook",
      },
      {
        name: "Instagram",
        link: "https://www.instagram.com/mizefarms/",
        icon: "fa fa-instagram",
      },
      {
        name: "Twitter",
        link: "https://twitter.com/mizefarms",
        icon: "fa fa-twitter",
      },
    ],
    description:
      "At Mize Farms, we specialize in providing high-quality, locally sourced grass-fed beef. Our cattle are raised with care and respect, ensuring a superior taste and texture that our customers can enjoy with confidence. Contact us today to learn more about our products and services!",
  };

  return (
    <div>
      <h1>{info.name}</h1>
      <p>{info.contact}</p>
      <p>{info.address}</p>
      <p>{info.phone}</p>
      {info.socials.map((social) => (
        <a key={social.name} href={social.link}>
          <i className={social.icon} />
        </a>
      ))}
      <p>{info.description}</p>
    </div>
  );
};

export default Info;