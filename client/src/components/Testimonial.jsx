import { useEffect, useState } from 'react';

const  TestimonialsSection= () => {
  const [isVisible, setIsVisible] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CEO at TechVision',
      image: 'https://readdy.ai/api/search-image?query=Professional%20business%20woman%20CEO%20portrait%2C%20confident%20smile%2C%20modern%20office%20background%2C%20corporate%20headshot%2C%20clean%20professional%20lighting%2C%20business%20attire&width=80&height=80&seq=testimonial-001&orientation=squarish',
      content: 'Working with this team transformed our digital presence completely. Their innovative approach and attention to detail exceeded all our expectations.',
      rating: 5
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Founder at StartupLab',
      image: 'https://readdy.ai/api/search-image?query=Asian%20business%20man%20founder%20portrait%2C%20professional%20smile%2C%20modern%20startup%20office%20background%2C%20casual%20business%20attire%2C%20natural%20lighting&width=80&height=80&seq=testimonial-002&orientation=squarish',
      content: 'The mobile app they developed for us increased our user engagement by 300%. Absolutely incredible results and seamless development process.',
      rating: 5
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Marketing Director at GrowthCo',
      image: 'https://readdy.ai/api/search-image?query=Hispanic%20business%20woman%20marketing%20director%20portrait%2C%20professional%20appearance%2C%20bright%20modern%20office%2C%20business%20professional%20attire%2C%20confident%20expression&width=80&height=80&seq=testimonial-003&orientation=squarish',
      content: 'Their UI/UX design expertise helped us create a user experience that our customers absolutely love. Conversion rates improved significantly.',
      rating: 5
    },
    {
      id: 4,
      name: 'David Thompson',
      role: 'CTO at InnovateTech',
      image: 'https://readdy.ai/api/search-image?query=Professional%20business%20man%20CTO%20portrait%2C%20tech%20industry%20executive%2C%20modern%20corporate%20environment%2C%20smart%20casual%20attire%2C%20approachable%20smile&width=80&height=80&seq=testimonial-004&orientation=squarish',
      content: 'From concept to deployment, their technical expertise and project management were outstanding. Delivered on time and beyond expectations.',
      rating: 5
    },
    {
      id: 5,
      name: 'Lisa Wang',
      role: 'Product Manager at FutureSoft',
      image: 'https://readdy.ai/api/search-image?query=Asian%20business%20woman%20product%20manager%20portrait%2C%20tech%20industry%20professional%2C%20modern%20office%20setting%2C%20contemporary%20business%20attire%2C%20warm%20smile&width=80&height=80&seq=testimonial-005&orientation=squarish',
      content: 'The scalable architecture they built for us has supported our 10x growth seamlessly. Their forward-thinking approach is remarkable.',
      rating: 5
    },
    {
      id: 6,
      name: 'James Miller',
      role: 'VP of Engineering at CloudScale',
      image: 'https://readdy.ai/api/search-image?query=Professional%20business%20man%20VP%20engineering%20portrait%2C%20corporate%20executive%2C%20high-tech%20office%20background%2C%20business%20suit%2C%20confident%20leadership%20pose&width=80&height=80&seq=testimonial-006&orientation=squarish',
      content: 'Their development team integrated perfectly with ours. The code quality and documentation standards were exceptional throughout.',
      rating: 5
    },
    {
      id: 7,
      name: 'Rachel Green',
      role: 'Design Lead at CreativeStudio',
      image: 'https://readdy.ai/api/search-image?query=Creative%20professional%20woman%20design%20lead%20portrait%2C%20artistic%20modern%20studio%20background%2C%20stylish%20contemporary%20outfit%2C%20inspiring%20creative%20expression&width=80&height=80&seq=testimonial-007&orientation=squarish',
      content: 'They brought our wildest design concepts to life with pixel-perfect precision. The collaboration process was smooth and inspiring.',
      rating: 5
    },
    {
      id: 8,
      name: 'Alex Kumar',
      role: 'Co-founder at DataDriven',
      image: 'https://readdy.ai/api/search-image?query=Indian%20business%20man%20co-founder%20portrait%2C%20startup%20entrepreneur%2C%20modern%20tech%20office%2C%20smart%20casual%20business%20attire%2C%20innovative%20tech%20background&width=80&height=80&seq=testimonial-008&orientation=squarish',
      content: 'The analytics dashboard they created gives us insights we never had before. Data-driven decision making has never been easier.',
      rating: 5
    }
  ];

  // Duplicate testimonials for infinite scroll effect
  const infiniteTestimonials = [...testimonials, ...testimonials, ...testimonials];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <i
        key={index}
        className={`ri-star-${index < rating ? 'fill' : 'line'} text-yellow-400`}
      ></i>
    ));
  };

  return (
    <section className="relative py-24 px-4 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-black border border-t-black">
      
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h2 className="text-4xl md:text-6xl font-bold text-[#999999] mb-6">
            What Our <span className=" text-white">Clients Say</span>
          </h2>
          <p className="text-xl text-[#999999] max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our satisfied clients have to say about their experience working with us.
          </p>
        </div>

        {/* Infinite Scrolling Testimonials */}
        <div className="relative bg-black">
          {/* First Row - Left to Right */}
          <div className="flex overflow-hidden mb-8 py-[20px]">
        <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
            <div className="flex animate-scroll-left ">
              {infiniteTestimonials.slice(0, 12).map((testimonial, index) => (
                <div
                  key={`row1-${testimonial.id}-${index}`}
                  className="flex-shrink-0 w-96 mx-4 ">
                  <div className="bg-black rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-amber-200 hover:border-black ">
                    <div className="flex items-center mb-4">
                      {renderStars(testimonial.rating)}
                    </div>
                    
                    <p className="text-white mb-6 text-lg leading-relaxed italic">
                      "{testimonial.content}"
                    </p>
                    
                    <div className="flex items-center">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h4 className="font-semibold text-white">{testimonial.name}</h4>
                        <p className="text-sm text-white">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Second Row - Right to Left */}
          <div className="flex overflow-hidden ">
             <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
            <div className="flex animate-scroll-right py-[26px]">
              {infiniteTestimonials.slice(0, 12).reverse().map((testimonial, index) => (
                <div
                  key={`row2-${testimonial.id}-${index}`}
                  className="flex-shrink-0 w-96 mx-4"
                >
                  <div className="bg-black rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-amber-200 hover:border-black">
                    <div className="flex items-center mb-4">
                      {renderStars(testimonial.rating)}
                    </div>
                    
                    <p className="text-white mb-6 text-lg leading-relaxed italic">
                      "{testimonial.content}"
                    </p>
                    
                    <div className="flex items-center">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h4 className="font-semibold text-white">{testimonial.name}</h4>
                        <p className="text-sm text-white">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

       
       
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        
        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }
        
        .animate-scroll-right {
          animation: scroll-right 30s linear infinite;
        }
      `}</style>
    </section>
  );
}

export default TestimonialsSection;

