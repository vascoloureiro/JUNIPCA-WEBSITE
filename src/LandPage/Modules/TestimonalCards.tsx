// components/TestimonialCard.tsx
import { Star } from "lucide-react";
import "./testimonialCard.css"; // Estilos só para os cards

type Testimonial = {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  delay?: number;
};

const TestimonialCard = ({ name, role, company, content, rating, delay = 0 }: Testimonial) => {
  return (
    <div
      className="testimonial-card"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="testimonial-card-content">
        <div className="testimonial-rating">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
          ))}
        </div>

        <blockquote className="testimonial-text">
          "{content}"
        </blockquote>

        <div className="testimonial-user">
          <div className="testimonial-avatar">
            <span className="avatar-initials">
              {name.split(' ').map(n => n[0]).join('')}
            </span>
          </div>
          <div>
            <div className="testimonial-name">{name}</div>
            <div className="testimonial-role">
              {role} • {company}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
