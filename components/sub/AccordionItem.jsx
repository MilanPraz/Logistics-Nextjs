import { Collapse } from "react-collapse";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

function AccordionItem({ open, toggle, title, answer }) {
  return (
    <div className=" pt-4 cursor-pointer ">
      <div
        onClick={toggle}
        className=" flex justify-between items-center rounded-t-lg px-8  bg-white py-2"
      >
        <p className=" text-md font-light   text-mylightpurple">{title}</p>
        <div>{open ? <AiOutlineMinus /> : <AiOutlinePlus />}</div>
      </div>
      <Collapse isOpened={open}>
        <div className=" rounded-b-lg text-sm bg-white px-8 pb-2">{answer}</div>
      </Collapse>
    </div>
  );
}

export default AccordionItem;
