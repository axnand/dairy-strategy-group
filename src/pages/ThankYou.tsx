import { Link } from "react-router-dom";
import { CheckCircle, Home, ArrowRight, Mail, Phone } from "lucide-react";
import PageHero from "@/components/PageHero";

const ThankYou = () => {
  return (
    <>
      <PageHero
        title="Thank You"
        subtitle="Your submission has been received."
      />
      <section className="py-16 lg:py-24 bg-card">
        <div className="container-narrow max-w-4xl text-center space-y-16">
          
          {/* Success Icon & Message */}
          <div className="flex flex-col items-center space-y-6">
            <div className="h-24 w-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-2 shadow-sm">
              <CheckCircle className="h-12 w-12" />
            </div>
            <h2 className="text-4xl font-heading font-bold text-foreground tracking-tight">Submission Received!</h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed">
              Thank you for reaching out to Nextgen Dairy Solution. We have received your inquiry and will get back to you shortly to schedule your consultation.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/" 
              className="inline-flex items-center px-8 py-3.5 bg-secondary text-secondary-foreground font-semibold text-sm tracking-wide rounded-md transition-opacity hover:opacity-90 shadow-sm"
            >
              <Home className="mr-2 h-4 w-4" /> Back to Home
            </Link>
            <Link 
              to="/services" 
              className="inline-flex items-center px-8 py-3.5 bg-primary text-primary-foreground font-semibold text-sm tracking-wide rounded-md transition-opacity hover:opacity-90 shadow-sm"
            >
              View Services <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          {/* Contact Methods (White Boxes) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 text-left">
            <div className="bg-white border rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between items-start space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  <Mail className="h-6 w-6" />
                </div>
                <span className="font-semibold text-xl text-foreground">Email Us</span>
              </div>
              <p className="text-muted-foreground">
                Prefer email? Drop us a line anytime and we'll reply as soon as possible.
              </p>
              <div className="bg-zinc-50 px-5 py-3 rounded-lg w-full font-mono text-base border text-zinc-800 text-center font-medium tracker-wide">
                info@nextgendairysolution.in
              </div>
              <a 
                href="mailto:info@nextgendairysolution.in"
                className="w-full inline-flex justify-center items-center px-6 py-3 bg-primary text-primary-foreground font-semibold text-sm tracking-wide rounded-md transition-opacity hover:opacity-90"
              >
                Send Email
              </a>
            </div>

            <div className="bg-white border rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between items-start space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  <Phone className="h-6 w-6" />
                </div>
                <span className="font-semibold text-xl text-foreground">Call Us</span>
              </div>
              <p className="text-muted-foreground">
                Need immediate assistance? Give us a call to speak with an expert right away.
              </p>
              <div className="bg-zinc-50 px-5 py-3 rounded-lg w-full font-mono text-base border text-zinc-800 text-center font-medium tracker-wide">
                +91 8802459999
              </div>
              <a 
                href="tel:+918802459999"
                className="w-full inline-flex justify-center items-center px-6 py-3 bg-primary text-primary-foreground font-semibold text-sm tracking-wide rounded-md transition-opacity hover:opacity-90"
              >
                Call Now
              </a>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default ThankYou;
