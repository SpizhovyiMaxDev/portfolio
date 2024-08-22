import { v4 as createId } from 'uuid';

export const contacts = [
    {
      icon: "location",
      title: "YouTube",
      text: "maxweb.studio",
      url: "https://www.youtube.com/@user-zp8mn3fp8o",
      id:createId(),
    },
    {
      icon: "phone",
      title: "Phone",
      text: "+1 (778) 214 9938",
      url: "tel:+17782149938",
      id:createId(),
    },
    {
      icon: "gmail",
      title: "Gmail",
      text: "max.spizhovyi@gmail.com",
      url: "mailto:max.spizhovyi@gmail.com",
      id:createId(),
    },
  ];
