import { TestimonialCarousel } from "./components/TestimonialCarousel";
import { testimonials } from "./data/testimonials";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4 md:p-8">
      <div className="w-full max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-2">What Our Clients Say</h1>
        <p className="text-gray-500 text-center mb-8 max-w-2xl mx-auto">
          Discover why businesses trust us with their most important projects and how we've helped them achieve their goals.
        </p>
        <TestimonialCarousel testimonials={testimonials} />
      </div>
    </div>
  );
}

export default App;