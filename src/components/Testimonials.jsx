import { FaRegStar, FaStar } from "react-icons/fa";
import { LOGOS, TESTIMONIALS } from "../data/cards";

export default function Testimonials() {
  return (
    <section className="space-y-3 mb-10" id="reviews">
      <div className="w-full overflow-hidden border-y">
        <div className="flex items-center justify-start gap-10 w-full scroll-animation">
          {LOGOS.concat(LOGOS)
            .concat(LOGOS)
            .map((logo, index) => (
              <img
                src={logo.image}
                key={index}
                alt={logo.text}
                className="w-10 h-10 md:w-24 md:h-24"
              />
            ))}
        </div>
      </div>

      <div className="w-full overflow-hidden">
        <div className="flex items-start justify-end gap-5 w-full h-96 scroll-animation-testimonials cursor-grab">
          {/* Duplicate Testimonials for Seamless Scrolling */}
          {TESTIMONIALS.concat(TESTIMONIALS)
            .concat(TESTIMONIALS)
            .map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[300px] md:w-[448px] p-5 lg:p-12 flex flex-col justify-between gap-3 lg:gap-20 h-full"
                style={{ backgroundColor: testimonial.background }}
              >
                <div className="flex flex-col gap-5">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-500 text-sm">
                      {testimonial.rating}
                    </span>
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }, (_, i) =>
                        i < testimonial.rating - 0.5 ? (
                          <FaStar key={i} className="text-black" />
                        ) : (
                          <FaRegStar key={i} className="text-black/20" />
                        )
                      )}
                    </div>
                  </div>
                  <p className="text-sm leading-6">{testimonial.description}</p>
                </div>

                <div className="flex items-center gap-6">
                  <div className="w-[50px] h-[50px] lg:w-[70px] lg:h-[70px]">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="overflow-hidden bg-cover"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <span className="text-[15px]">{testimonial.name}</span>
                    <span className="text-black/60 text-[14px]">
                      {testimonial.job}
                    </span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
