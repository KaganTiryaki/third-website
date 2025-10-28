import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="flex flex-col py-12">
      <section className="container max-w-4xl">
        <div className="text-center mb-12 space-y-4">
          <Badge className="bg-primary/10 text-primary">
            <Shield className="w-3 h-3 mr-1 inline" />
            Legal
          </Badge>
          <h1 className="text-4xl font-bold">Privacy Policy</h1>
          <p className="text-muted-foreground">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </div>

        <Card>
          <CardContent className="prose prose-neutral dark:prose-invert max-w-none pt-6">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
              <p className="text-muted-foreground">
                Water Wise is an educational eTwinning project dedicated to raising awareness about
                water conservation. This privacy policy explains how we handle information in relation
                to this educational website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Information Collection</h2>
              <p className="text-muted-foreground mb-4">
                This website is designed as an educational resource and does not collect, store, or
                process personal data. We do not:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Require user registration or accounts</li>
                <li>Collect personal information</li>
                <li>Use cookies for tracking</li>
                <li>Store user data on servers</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Local Data</h2>
              <p className="text-muted-foreground">
                Any calculations or quiz results you generate remain on your device only and are not
                transmitted to our servers. This data exists only in your browser session and is cleared
                when you close the page or clear your browser data.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">External Links</h2>
              <p className="text-muted-foreground">
                This website may contain links to external websites (such as eTwinning). We are not
                responsible for the privacy practices of these external sites.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Children's Privacy</h2>
              <p className="text-muted-foreground">
                As an educational project, this website is designed to be safe for all ages. We do not
                knowingly collect any information from children or adults.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Contact</h2>
              <p className="text-muted-foreground">
                If you have questions about this privacy policy or the Water Wise project, please
                contact us through the eTwinning platform.
              </p>
            </section>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
