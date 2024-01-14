import SubHead from "../Atoms/subhead";
import Paragraph from "../Atoms/paragraph";

export default function TestimonialItem() {
  return (
    <div className="flex flex-col gap-8 items-center md:flex-row md:items-end lg:gap-12 lg:items-center">
      <img
        className="w-full md:w-1/2 lg:w-2/5 rounded-md shadow-lg"
        src="/testimonial.png"
        alt="testimonial"
      />
      <div className="flex flex-col w-full md:w-1/2 lg:w-3/5 p-4 lg:p-8 bg-white rounded-md shadow-lg">
        <SubHead style="text-center md:text-left mb-4 text-xl lg:text-2xl">
          What Our Customers Say
        </SubHead>
        <Paragraph style="text-center md:text-left mb-6">
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis
          viverra amet elit est proin tgestas neque quis aliq vel. Viverra
          gravida orci vitae at aliquam sit accums rutrum ut convallis.”
        </Paragraph>
        <div className="flex flex-col font-body text-center md:text-left">
          <h5 className="text-primary-100 mb-2 font-medium text-lg lg:text-xl">
            John Carter
          </h5>
          <p className="text-black-300">Fashion Shoes Co.</p>
        </div>
      </div>
    </div>
  );
}
