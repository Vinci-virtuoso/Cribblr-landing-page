import React from 'react';
import IntegrationLogo from '@/components/ui/IntegrationLogo';

const integrations = [
  {
    name: "Make",
    imageUrl: "https://www.make.com/en/help/css/image/corporate-logo.svg"
  },
  {
    name: "HighLevel",
    imageUrl: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://cdn.filesafe.space/location%2FknES3eSWYIsc5YSZ3YLl%2Fimages%2F63413f4d-3691-4d3e-8e9c-31ba9bd55cf9.png?alt=media"
  },
  {
    name: "Relevance AI",
    imageUrl: "https://cdn.prod.website-files.com/636cad09a1159553a45e8ba1/644115acae03075e832ca73e_logo.svg"
  },
  {
    name: "Vapi",
    imageUrl: "https://vapi.ai/assets/logo-6813a1b5.png"
  },
  {
    name: "Claude",
    imageUrl: "https://storage.googleapis.com/organization-image-assets/anthropic-botAvatarDarkSrcUrl-1715877068491.svg"
  },
  {
    name: "OpenAI",
    imageUrl: "https://openai.com/favicon.ico"
  },
  {
    name: "Langchain",
    imageUrl: "https://blog.langchain.dev/content/images/2024/03/LangChain-logo.png"
  }
];

const Integrations = () => {
  return (
    <section className="py-20 bg-black dot-pattern">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-5xl font-bold text-center text-white mb-16">
          We Integrate With
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {integrations.map((integration) => (
            <IntegrationLogo
              key={integration.name}
              name={integration.name}
              imageUrl={integration.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Integrations;