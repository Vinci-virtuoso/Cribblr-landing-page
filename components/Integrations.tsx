'use client';

import React from 'react';

const integrations = [
  { name: 'Make', imageUrl: 'https://www.make.com/en/help/css/image/corporate-logo.svg' },
  {
    name: 'HighLevel',
    imageUrl:
      'https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://cdn.filesafe.space/location%2FknES3eSWYIsc5YSZ3YLl%2Fimages%2F63413f4d-3691-4d3e-8e9c-31ba9bd55cf9.png?alt=media',
  },
  {
    name: 'Relevance AI',
    imageUrl:
      'https://cdn.prod.website-files.com/636cad09a1159553a45e8ba1/644115acae03075e832ca73e_logo.svg',
  },
  { name: 'Vapi', imageUrl: 'https://vapi.ai/assets/logo-6813a1b5.png' },
  {
    name: 'Claude',
    imageUrl:
      'https://storage.googleapis.com/organization-image-assets/anthropic-botAvatarDarkSrcUrl-1715877068491.svg',
  },
  { name: 'OpenAI', imageUrl: 'https://openai.com/favicon.ico' },
  {
    name: 'Langchain',
    imageUrl: 'https://blog.langchain.dev/content/images/2024/03/LangChain-logo.png',
  },
];

const Integrations = () => {
  return (
    <section className="py-20 bg-black dot-pattern">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-5xl lg:text-4xl md:text-4xl sm:text-3xl font-bold text-center text-white mb-16"> {/* Reduced size for small screens */}
          We Integrate With
        </h2>
        <div className="relative overflow-hidden">
          <div className="flex items-center space-x-8 animate-scroll">
            {integrations.concat(integrations).map((integration, index) => (
              <div key={index} className="flex-shrink-0 flex items-center justify-center">
                <img
                  src={integration.imageUrl}
                  alt={integration.name}
                  className="h-auto w-auto max-h-16 max-w-32 md:max-h-12 md:max-w-24 sm:max-h-8 sm:max-w-16"
                  style={{ maxHeight: '4rem', maxWidth: '8rem' }}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .animate-scroll {
          display: flex;
          animation: scroll 20s linear infinite;
          width: max-content;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default Integrations;