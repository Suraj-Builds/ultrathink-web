import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Brain, Shield, Gauge } from "lucide-react";
import { useEffect, useRef } from "react";

export default function Home() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("[data-animate]").forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">NK</span>
            </div>
            <span className="font-bold text-lg">UltraThin-K</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm hover:text-accent transition">
              Features
            </a>
            <a href="#capabilities" className="text-sm hover:text-accent transition">
              Capabilities
            </a>
            <a href="#pricing" className="text-sm hover:text-accent transition">
              Pricing
            </a>
          </div>
          <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:opacity-90">
            Get Started
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
          <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-600 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
        </div>

        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div data-animate className="opacity-0 translate-y-8 transition-all duration-700">
              <div className="inline-block mb-4 px-4 py-2 bg-purple-900/30 border border-purple-500/50 rounded-full">
                <span className="text-sm text-purple-200">✨ Enterprise Intelligence</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Connect. Automate. <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Learn.</span>
              </h1>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Give every business a digital workforce that thinks, learns, and works across all your systems—without replacing anything you already have.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:opacity-90 text-white">
                  Start Free Trial <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-purple-500/50 hover:bg-purple-900/20">
                  Watch Demo
                </Button>
              </div>
            </div>

            <div data-animate className="opacity-0 translate-x-8 transition-all duration-700 delay-200">
              <img
                src="/images/ultrathink_nexus_platform.webp"
                alt="UltraThin-K Nexus Platform"
                className="w-full rounded-2xl shadow-2xl border border-purple-500/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section id="features" className="py-20 px-4 relative">
        <div className="container">
          <div data-animate className="opacity-0 translate-y-8 transition-all duration-700 mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">The Challenge</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Your critical data is trapped in 10+ different systems. Processes require manual handoffs. Tasks take days instead of minutes.
            </p>
          </div>

          <div data-animate className="opacity-0 translate-y-8 transition-all duration-700">
            <img
              src="/images/ultrathink_nexus_platform_2.webp"
              alt="Problem vs Solution"
              className="w-full rounded-2xl shadow-2xl border border-purple-500/20"
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4">
        <div className="container">
          <div data-animate className="opacity-0 translate-y-8 transition-all duration-700 mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">How Nexus Works</h2>
            <p className="text-xl text-gray-400">Three simple steps to intelligent automation</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Connect",
                desc: "Point Nexus to your systems—Snowflake, Salesforce, APIs, databases. One-time setup, secure connections.",
              },
              {
                icon: Brain,
                title: "Create",
                desc: "Describe your process in plain English. Nexus breaks it into steps and handles the complexity.",
              },
              {
                icon: Gauge,
                title: "Deploy & Learn",
                desc: "Your intelligent agent goes live, learning from every decision and improving autonomously.",
              },
            ].map((step, i) => (
              <div
                key={i}
                data-animate
                className="opacity-0 translate-y-8 transition-all duration-700"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-900/20 to-cyan-900/20 border border-purple-500/20 hover:border-cyan-500/40 transition-all">
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center mb-6">
                    <step.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                  <p className="text-gray-300">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section id="capabilities" className="py-20 px-4">
        <div className="container">
          <div data-animate className="opacity-0 translate-y-8 transition-all duration-700 mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Core Capabilities</h2>
            <p className="text-xl text-gray-400">Enterprise-grade features built for scale</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Universal Connectivity",
                desc: "Pre-built connectors to 100+ enterprise platforms. Works with Snowflake, Salesforce, SAP, Oracle, and more.",
              },
              {
                title: "Intelligent Orchestration",
                desc: "Multi-step workflows that make context-aware decisions and handle exceptions automatically.",
              },
              {
                title: "Complete Visibility",
                desc: "Every decision logged and explainable. Full audit trails for compliance and transparency.",
              },
              {
                title: "Auto-Learning Intelligence",
                desc: "Agents learn from every execution and human decision, getting smarter without manual retraining.",
              },
            ].map((cap, i) => (
              <div
                key={i}
                data-animate
                className="opacity-0 translate-y-8 transition-all duration-700"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="p-8 rounded-2xl bg-gradient-to-br from-cyan-900/20 to-purple-900/20 border border-cyan-500/20 hover:border-purple-500/40 transition-all">
                  <h3 className="text-2xl font-bold mb-4">{cap.title}</h3>
                  <p className="text-gray-300">{cap.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Paradigm Shift */}
      <section className="py-20 px-4">
        <div className="container">
          <div data-animate className="opacity-0 translate-y-8 transition-all duration-700 mb-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">The Paradigm Shift</h2>
          </div>

          <div data-animate className="opacity-0 translate-y-8 transition-all duration-700">
            <img
              src="/images/ultrathink_nexus_paradigm_shift.webp"
              alt="Old Paradigm vs New Era"
              className="w-full rounded-2xl shadow-2xl border border-purple-500/20"
            />
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-4">
        <div className="container">
          <div data-animate className="opacity-0 translate-y-8 transition-all duration-700 mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-400">Choose the plan that fits your needs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Nexus Connect",
                price: "Custom",
                desc: "For teams getting started",
                features: [
                  "Pre-built process templates",
                  "10 system integrations",
                  "Basic monitoring dashboard",
                  "Agent building service",
                  "Email & chat support",
                ],
              },
              {
                name: "Nexus Orchestrate",
                price: "Custom",
                desc: "For scaling organizations",
                features: [
                  "Everything in Connect, plus:",
                  "Natural language agent creation",
                  "Unlimited integrations",
                  "Advanced Command Center",
                  "Priority support",
                ],
                highlight: true,
              },
              {
                name: "Nexus Enterprise",
                price: "Custom",
                desc: "For enterprise transformation",
                features: [
                  "Everything in Orchestrate, plus:",
                  "Custom Skill Modules",
                  "Pattern learning engine",
                  "A/B testing capabilities",
                  "Dedicated success manager",
                ],
              },
            ].map((plan, i) => (
              <div
                key={i}
                data-animate
                className="opacity-0 translate-y-8 transition-all duration-700"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div
                  className={`p-8 rounded-2xl border transition-all h-full flex flex-col ${
                    plan.highlight
                      ? "bg-gradient-to-br from-purple-900/40 to-cyan-900/40 border-cyan-500/50 ring-2 ring-cyan-500/30"
                      : "bg-gradient-to-br from-purple-900/20 to-cyan-900/20 border-purple-500/20 hover:border-cyan-500/40"
                  }`}
                >
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-6">{plan.desc}</p>
                  <p className="text-3xl font-bold mb-8">{plan.price}</p>
                  <ul className="space-y-3 mb-8 flex-grow">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="text-gray-300 flex items-start gap-3">
                        <span className="text-cyan-400 mt-1">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${
                      plan.highlight
                        ? "bg-gradient-to-r from-cyan-500 to-purple-600 hover:opacity-90"
                        : "bg-purple-900/50 border border-purple-500/50 hover:bg-purple-900/70"
                    }`}
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600 mix-blend-multiply filter blur-3xl" />
        </div>

        <div className="container relative z-10 text-center">
          <div data-animate className="opacity-0 translate-y-8 transition-all duration-700">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Enterprise?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join leading organizations automating complex processes with intelligent agents.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:opacity-90 text-white">
                Start Your Free Trial <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-purple-500/50 hover:bg-purple-900/20">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-4">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">NK</span>
                </div>
                <span className="font-bold">UltraThin-K</span>
              </div>
              <p className="text-sm text-gray-400">Intelligent automation for enterprise systems.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-cyan-400 transition">Features</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition">Pricing</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition">Security</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-cyan-400 transition">About</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition">Blog</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-cyan-400 transition">Privacy</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition">Terms</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition">Compliance</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-gray-500">
            <p>&copy; 2026 UltraThin-K. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(32px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        [data-animate].animate-in {
          animation: fadeInUp 0.7s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
