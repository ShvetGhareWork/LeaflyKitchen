import React from "react";
import { useState } from "react";

const FAQs = () => {
  const DeliveryFAQs = [
    {
      Question: "What are your delivery hours?",
      Answer: ["Our delivery service operates from 9:00 AM to 10:00 PM daily."],
    },
    {
      Question: "Do you offer same-day delivery?",
      Answer: [
        "Yes, we offer same-day delivery for orders placed before 6:00 PM.",
      ],
    },
    {
      Question: "How can I track my order?",
      Answer: [
        "Once your order is shipped, you will receive a tracking link via email or SMS.",
      ],
    },
    {
      Question: "What is the estimated delivery time?",
      Answer: [
        "Delivery times vary based on location but typically range from 30 minutes to 3 days.",
      ],
    },
    {
      Question: "Do you deliver on weekends and holidays?",
      Answer: ["Yes, we deliver on weekends and most public holidays."],
    },
    {
      Question: "Is there a delivery fee?",
      Answer: [
        "Delivery fees vary based on distance and order amount. Free delivery may apply for eligible orders.",
      ],
    },
    {
      Question: "What should I do if my order is delayed?",
      Answer: [
        "You can track your order status or contact our support team for updates.",
      ],
    },
    {
      Question: "Do you offer express or priority delivery?",
      Answer: [
        "Yes, we offer express delivery options at an additional charge.",
      ],
    },
    {
      Question: "Can I change my delivery address after placing an order?",
      Answer: [
        "Address changes are possible within 30 minutes of order placement. Contact support immediately.",
      ],
    },
    {
      Question: "What happens if I’m not available at the time of delivery?",
      Answer: [
        "Our delivery partner will attempt redelivery or leave the package at a secure location if instructed.",
      ],
    },
    {
      Question: "Do you offer international delivery?",
      Answer: [
        "Currently, we only deliver within select regions. Check our website for more details.",
      ],
    },
    {
      Question: "Can I schedule a delivery for a specific time?",
      Answer: [
        "Yes, you can select a preferred delivery slot during checkout.",
      ],
    },
    {
      Question: "What if my order arrives damaged?",
      Answer: [
        "Please contact us within 24 hours with photos, and we will arrange a replacement or refund.",
      ],
    },
    {
      Question: "Do you require a signature upon delivery?",
      Answer: [
        "For high-value orders, a signature may be required for security purposes.",
      ],
    },
    {
      Question: "Can someone else receive my order on my behalf?",
      Answer: [
        "Yes, as long as they provide the correct order details at the time of delivery.",
      ],
    },
    {
      Question: "What if my package is lost?",
      Answer: [
        "If your package is lost, contact our support team for investigation and resolution.",
      ],
    },
    {
      Question: "Do you provide contactless delivery?",
      Answer: ["Yes, we offer contactless delivery upon request."],
    },
    {
      Question: "Can I cancel my order after it has been shipped?",
      Answer: [
        "Orders cannot be canceled after shipping, but you may request a return or refund if eligible.",
      ],
    },
    {
      Question: "Do you deliver to remote areas?",
      Answer: [
        "Yes, but delivery times may be longer depending on the location.",
      ],
    },
    {
      Question: "How do I report a missing item in my order?",
      Answer: [
        "If an item is missing, contact us immediately, and we will resolve the issue.",
      ],
    },
  ];

  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };
  return (
    <div>
      <div className="max-w-4xl mx-auto mt-8">
        <div className="w-[700px] h-[470px] overflow-y-auto no-scrollbar">
          <div className="space-y-4">
            {DeliveryFAQs.map((Question, index) => (
              <div
                key={index}
                className="border w-11/12 border-gray-300 rounded-lg overflow-hidden"
              >
                {/* Question Header */}
                <button
                  onClick={() => toggleQuestion(index)}
                  className="w-full text-left px-4 py-3 font-semibold text-lg bg-gray-200 flex justify-between Answer-center"
                >
                  {Question.Question}
                  <span className="text-xl">
                    {openQuestion === index ? "−" : "+"}
                  </span>
                </button>

                {/* Answer List (Collapsible) */}
                <div
                  className={`transition-all duration-500 ease-in-out ${
                    openQuestion === index ? "max-h-40 p-4" : "max-h-0 p-0"
                  } overflow-hidden`}
                >
                  <ul className="list-disc list-inside space-y-2">
                    {Question.Answer.map((item, i) => (
                      <li key={i} className="text-gray-700">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
