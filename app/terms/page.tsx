import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="flex flex-col py-12">
      <section className="container max-w-4xl">
        <div className="text-center mb-12 space-y-4">
          <Badge className="bg-primary/10 text-primary">
            <FileText className="w-3 h-3 mr-1 inline" />
            Legal
          </Badge>
          <h1 className="text-4xl font-bold">Terms of Service</h1>
          <p className="text-muted-foreground">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </div>

        <Card>
          <CardContent className="prose prose-neutral dark:prose-invert max-w-none pt-6">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
              <p className="text-muted-foreground">
                Welcome to Water Wise, an educational eTwinning project. By accessing and using this
                website, you agree to these terms of service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Purpose</h2>
              <p className="text-muted-foreground">
                This website is an educational resource designed to raise awareness about water
                conservation and promote sustainable water usage practices. All content is provided
                for educational purposes only.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Use of Content</h2>
              <p className="text-muted-foreground mb-4">
                The content on this website, including text, graphics, and interactive tools, is
                provided for educational purposes. You may:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Use the tools and resources for personal education</li>
                <li>Share links to this website for educational purposes</li>
                <li>Reference the information with proper attribution</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Accuracy of Information</h2>
              <p className="text-muted-foreground">
                While we strive to provide accurate and up-to-date information about water
                conservation, the content is for educational purposes. Statistics and data are based
                on available research and may vary by region and source.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Calculator and Tools</h2>
              <p className="text-muted-foreground">
                The water usage calculator and other interactive tools provide estimates based on
                average values. Actual water consumption may vary based on individual circumstances,
                location, and specific fixtures used.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">eTwinning Project</h2>
              <p className="text-muted-foreground">
                This website is part of an eTwinning educational project. It is designed for
                learning purposes and to promote environmental awareness among students and the
                broader community.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
              <p className="text-muted-foreground">
                This website is provided "as is" for educational purposes. We make no warranties
                about the completeness or accuracy of the information. Use of any information is at
                your own risk.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Changes to Terms</h2>
              <p className="text-muted-foreground">
                We reserve the right to modify these terms at any time. Continued use of the website
                after changes constitutes acceptance of the modified terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Contact</h2>
              <p className="text-muted-foreground">
                For questions about these terms or the Water Wise project, please contact us through
                the eTwinning platform.
              </p>
            </section>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
