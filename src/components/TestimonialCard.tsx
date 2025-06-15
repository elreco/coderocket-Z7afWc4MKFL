import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { StarRating } from "./StarRating";
import { Testimonial } from "@/types/testimonial";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const { 
    name, 
    role, 
    company, 
    companyLogo, 
    profileImage, 
    rating, 
    feedback,
    date
  } = testimonial;

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden p-6 md:p-8 mx-4 my-2 h-full flex flex-col">
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center">
          <Avatar className="h-12 w-12 mr-4 border-2 border-primary/10">
            <AvatarImage src={profileImage} alt={name} />
            <AvatarFallback>{name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-semibold text-lg">{name}</h3>
            <p className="text-sm text-gray-500">{role} at {company}</p>
          </div>
        </div>
        <div className="h-10 w-auto">
          {companyLogo && (
            <img 
              src={companyLogo} 
              alt={`${company} logo`} 
              className="h-full w-auto object-contain"
            />
          )}
        </div>
      </div>

      <div className="mb-4">
        <StarRating rating={rating} />
        <p className="text-xs text-gray-400 mt-1">{date}</p>
      </div>

      <blockquote className="text-gray-700 italic mb-4 flex-grow">
        "{feedback}"
      </blockquote>
    </div>
  );
}