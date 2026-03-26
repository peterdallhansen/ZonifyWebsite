import { Card, CardContent, CardHeader } from "@/components/ui/card";

const termsSections = [
  {
    id: "acceptance-of-terms",
    title: "1. Acceptance of Terms",
    content: `By accessing or using Zonify.ai, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any part of these terms, you may not use our services.`,
  },
  {
    id: "use-of-services",
    title: "2. Use of Services",
    content: `You agree to use Zonify.ai for lawful purposes only and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the website. You are prohibited from engaging in activities such as:
    - Uploading or distributing viruses, malware, or any harmful code.
    - Attempting to access unauthorized areas of the website.
    - Exploiting the platform for any fraudulent or illegal activities.`,
  },
  {
    id: "user-accounts",
    title: "3. User Accounts",
    content: `To access certain features of Zonify.ai, you may be required to create an account. You are responsible for maintaining the confidentiality of your account and password. You agree to:
    - Provide accurate and current information during registration.
    - Notify us immediately if you suspect any unauthorized access or use of your account.`,
  },
  {
    id: "intellectual-property",
    title: "4. Intellectual Property",
    content: `The content, organization, graphics, design, and other matters related to Zonify.ai are protected under applicable copyrights and other proprietary laws. Unauthorized use, copying, redistribution, or publication of any materials from the platform without explicit permission is strictly prohibited.`,
  },
  {
    id: "privacy-policy",
    title: "5. Privacy Policy",
    content: `Your use of Zonify.ai is also governed by our Privacy Policy, which explains how we collect, use, and protect your personal information. Please review the Privacy Policy to understand your rights and responsibilities.`,
  },
  {
    id: "limitation-of-liability",
    title: "6. Limitation of Liability",
    content: `Zonify.ai shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or goodwill, arising from your use or inability to use the platform. This limitation applies even if we have been advised of the possibility of such damages.`,
  },
  {
    id: "third-party-links",
    title: "7. Third-Party Links",
    content: `Zonify.ai may include links to third-party websites or services for your convenience. We do not endorse or assume responsibility for any third-party content or services. Accessing these links is at your own risk, and you should review the terms and privacy policies of any third-party websites you visit.`,
  },
  {
    id: "termination",
    title: "8. Termination",
    content: `We reserve the right to suspend or terminate your access to Zonify.ai at any time, with or without notice, for any breach of these Terms of Service or other misconduct. Upon termination, your right to use the platform will cease immediately.`,
  },
  {
    id: "changes-to-terms",
    title: "9. Changes to Terms",
    content: `Zonify.ai reserves the right to update or modify these Terms of Service at any time. Changes will be effective immediately upon posting. It is your responsibility to review the terms periodically. Continued use of the platform constitutes acceptance of any updates.`,
  },
  {
    id: "contact-information",
    title: "10. Contact Information",
    content: `If you have any questions or concerns about these Terms of Service, please contact us at contact@zonify.ai.`,
  },
];

export default function TermsAndConditions() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-[900px]">
      <Card className="bg-transparent border-none shadow-none ">
        <CardHeader>
          <h2 className="text-2xl md:text-3xl xl:text-5xl  leading-tight text-primary text-center">
            Terms & Conditions
          </h2>
          <h2 className="text-xl md:text-lg xl:text-2xl mb-8 leading-tight text-primary text-center max-w-[750px] text-opacity-60">
            By using our services, you agree to these terms. <br />
            Please read them carefully.
          </h2>
        </CardHeader>
        <CardContent className="space-y-6">
          {termsSections.map((section, index) => (
            <section id={section.id} key={index}>
              <h2 className="text-xl font-semibold mb-2">{section.title}</h2>
              <p>{section.content}</p>
            </section>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
