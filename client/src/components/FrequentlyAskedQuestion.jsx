import React from 'react'

const FrequentlyAskedQuestion = () => {
    const [openIndex, setOpenIndex] = React.useState(null);

    const faqs = [
        {
            question: "How long does it typically take to develop a custom web or mobile application?",
            answer: "The timeline for development varies significantly based on the project's complexity, features, and design requirements. A simple website might take a few weeks, while a complex mobile app or web platform could take several months. We provide detailed project timelines after a thorough assessment of your needs.",
        },
        {
            question: "What platforms do you develop mobile applications for?",
            answer: "We develop native and cross-platform mobile applications for both iOS and Android. Our expertise allows us to create applications that are optimized for each platform, or build one code base that works for both.",
        },
        {
            question: "Do you provide website and app maintenance after launch?",
            answer: "Yes, we offer comprehensive maintenance and support packages to ensure your website or application remains secure, up-to-date, and performs optimally. This includes bug fixes, updates, and ongoing technical support.",
        },
        {
            question: "Can you integrate my existing business systems with the new website or app?",
            answer: "Absolutely. We specialize in integrating various business systems, such as CRM, ERP, and payment gateways, to create a seamless and efficient workflow. This allows for better data management and streamlined operations.",
        },
        {
            question: "How do you ensure the security of my website or application?",
            answer: "We prioritize security throughout the development process. We implement industry best practices, conduct regular security audits, and use robust encryption methods to protect your data and prevent vulnerabilities.",
        },
        {
            question: "What is the cost of developing a custom website or mobile application?",
            answer: "The cost of development is determined by several factors, including the project's complexity, features, design requirements, and integration needs. We provide detailed cost estimates after a thorough consultation to ensure transparency and clarity",
        }
    ];
    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-start justify-center gap-8 px-4 md:px-0">
                <img
                    className="max-w-sm w-full rounded-xl h-auto m-auto"
                    src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?q=80&w=830&h=844&auto=format&fit=crop"
                    alt=""
                />
                <div>
                <div className=''>
                    <h1 className='text-white font-bold text-4xl text-left leading-11 '> <span className='text-[#999999]'>Frequently</span>  <br />Asked Questions</h1>
                 </div>
                    <h1 className="text-3xl font-semibold text-white">Looking for answer?</h1>
                    <p className="text-sm text-[#999999] mt-2 pb-4">
                        Having Some Doubts. Come Here 
                    </p>
                    {faqs.map((faq, index) => (
                        <div className="border-b border-slate-200 py-4 cursor-pointer " key={index} onClick={() => setOpenIndex(openIndex === index ? null : index)}>
                            <div className="flex items-center justify-between">
                                <h3 className="text-base font-medium text-white">
                                    {faq.question}
                                </h3>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="#fee685"  xmlns="http://www.w3.org/2000/svg" className={`${openIndex === index ? "rotate-180" : ""} transition-all duration-500 ease-in-out`}>
                                    <path d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2" stroke="#1D293D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <p className={`text-sm text-[#999999] transition-all duration-500 ease-in-out max-w-md ${openIndex === index ? "opacity-100 max-h-[300px] translate-y-0 pt-4" : "opacity-0 max-h-0 -translate-y-2"}`} >
                                {faq.answer}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};
export default FrequentlyAskedQuestion