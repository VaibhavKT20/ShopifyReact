import SubHead from "../Atoms/subhead";
import Paragraph from "../Atoms/paragraph";
import { Button } from "../Atoms/button";

export default function Blog() {
  return (
    <div className="container mx-auto max-w-[1440px]">
      <div className="px-6 py-16 flex flex-col gap-10 lg:px-12 lg:py-20">
        {/* Head Content */}
        <div className="flex flex-col gap-8 md:flex-row md:justify-between md:items-center">
          <div className="flex flex-col gap-5 md:w-8/12 lg:w-7/12">
            <SubHead style="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              Discover Insights and Strategies for Business Success
            </SubHead>
            <Paragraph style="text-lg md:text-xl lg:text-2xl">
              Explore our blog to gain valuable insights, actionable strategies, and stay updated on the latest trends to elevate your business to new heights.
            </Paragraph>
          </div>
          <Button buttonStyle="bg-primary-500 hover:bg-primary-600 text-white">
            <div className="flex items-center">
              Explore More
              <img className="ml-2" src="/arrow-right.svg" alt="arrow" />
            </div>
          </Button>
        </div>

        {/* Blog Items */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <section className="flex flex-col gap-6">
            <div className="overflow-hidden rounded-lg">
              <img
                className="w-full h-auto object-cover transform scale-100 hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer rounded-lg"
                src="/blog-1.png"
                alt="thumbnail"
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Mastering Customer Engagement in Ecommerce</h3>
            <a className="text-primary-500 hover:underline" href="#">
              Read More
            </a>
          </section>
          <section className="flex flex-col gap-6">
            <div className="overflow-hidden rounded-lg">
              <img
                className="w-full h-auto object-cover transform scale-100 hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer rounded-lg"
                src="/blog-2.png"
                alt="thumbnail"
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">The Art of Crafting Compelling Product Descriptions</h3>
            <a className="text-primary-500 hover:underline" href="#">
              Read More
            </a>
          </section>
          <section className="hidden lg:flex flex-col gap-6">
            <div className="overflow-hidden rounded-lg">
              <img
                className="w-full h-auto object-cover transform scale-100 hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer rounded-lg"
                src="/blog-1.png"
                alt="thumbnail"
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Navigating the World of Social Media Advertising</h3>
            <a className="text-primary-500 hover:underline" href="#">
              Read More
            </a>
          </section>
        </div>
      </div>
    </div>
  );
}
