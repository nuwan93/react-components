import Accordion from "../components/Accordion";

const AccordionPage = () => {
  const items = [
    {
      id: "12esd",
      label: "1st titile",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
    },
    {
      id: "23rn2",
      label: "2st titile",
      content:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000",
    },
    {
      id: "2btsrdaw",
      label: "3st titile",
      content:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum",
    },
  ];
  return <Accordion items={items} />;
};

export default AccordionPage;
