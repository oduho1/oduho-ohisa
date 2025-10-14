import image1 from "../../assets/sebit.png";
import image2 from "../../assets/mokhali.png";
import image3 from "../../assets/Alfred taban.png";
import image4 from "../../assets/Addicted.png";

type Testimonial = {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number; // 1-5
  avatar: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Emmanuel sebit",
    role: "Brand Manager and Art, kakuma Refugee camp.",
    quote:
      "Their design instincts are stellar. We saw engagement jump within weeks.",
    rating: 5,
    avatar: image1,
  },
  {
    id: "t2",
    name: "Emmanuel obura",
    role: "Founder, Verde Studio",
    quote:
      "Fast, collaborative, and pixel‑perfect. Couldn’t have shipped without them.",
    rating: 5,
    avatar: image2,
  },
  {
    id: "t3",
    name: "Alfred taban",
    role: "Marketing Lead, canada",
    quote:
      "A rare mix of creativity and engineering. The site feels premium and fast.",
    rating: 4,
    avatar: image3,
  },
  {
    id: "t4",
    name: "Addicted",
    role: "Product Owner and digital marketing, Waveform",
    quote:
      "Clear communication, strong UX sense, and timely delivery. Highly recommended.",
    rating: 5,
    avatar: image4,
  },
];

function Star({ filled }: { filled: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="18"
      height="18"
      className={filled ? "text-yellow-400" : "text-gray-300"}
      fill={filled ? "currentColor" : "none"}
      stroke={filled ? "none" : "currentColor"}
    >
      <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  );
}

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-white relative">
      <div className="container mx-auto px-5 md:px-8">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <span className="inline-block text-sm font-semibold text-blue-600 tracking-wide mb-2">
            What clients say
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Trusted by brands and teams
          </h2>
          <p className="text-gray-600 mt-3">
            Real feedback from recent collaborations across web, brand, and product.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {TESTIMONIALS.map((t) => (
            <article
              key={t.id}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="h-12 w-12 rounded-full object-cover border border-gray-200"
                />
                <div>
                  <p className="font-semibold text-gray-900 leading-tight">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>

              <div className="flex items-center gap-0.5 mt-4" aria-label={`Rating: ${t.rating} out of 5`}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} filled={i < t.rating} />
                ))}
              </div>

              <p className="mt-4 text-gray-700 leading-relaxed">“{t.quote}”</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;



