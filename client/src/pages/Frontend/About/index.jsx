import { useEffect, useState } from "react";
import { Users, Target, Award, Zap } from "lucide-react";
import "./about.css";
import AlexImage from "../../../assets/Images/alex.jpg";
import SarahImage from "../../../assets/Images/sarah.jpg";
import MikeImage from "../../../assets/Images/mike.jpg";
import EmilyImage from "../../../assets/Images/emily.jpg";
import { useNavigate } from "react-router-dom";
import {useLoading} from '../../../contexts/LoaderContext'

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const { setLoading } = useLoading();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "CEO & Founder",
      description: "Visionary leader with 10+ years in AI technology",
      image: AlexImage,
    },
    {
      name: "Sarah Chen",
      role: "CTO",
      description: "Expert in computer vision and machine learning",
      image: SarahImage,
    },
    {
      name: "Mike Rodriguez",
      role: "Lead Developer",
      description: "Full-stack developer passionate about user experience",
      image: MikeImage,
    },
    {
      name: "Emily Davis",
      role: "Product Manager",
      description: "Strategic thinker focused on customer success",
      image: EmilyImage,
    },
  ];

  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Innovation",
      description: "Pushing the boundaries of AI-powered image processing",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "User-Centric",
      description: "Building tools that make creativity accessible to everyone",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Quality",
      description: "Delivering precise, professional-grade results every time",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Speed",
      description: "Lightning-fast processing without compromising quality",
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 animated-bg opacity-10"></div>

      {/* Floating Shapes */}
      <div
        className="absolute top-20 left-10 w-20 h-20 rounded-full floating-shape opacity-20"
        style={{ backgroundColor: "var(--primary-color)" }}
      ></div>
      <div
        className="absolute top-40 right-20 w-16 h-16 rounded-full floating-shape opacity-20 delay-200"
        style={{ backgroundColor: "var(--secondary-color)" }}
      ></div>
      <div
        className="absolute bottom-32 left-1/4 w-12 h-12 rounded-full floating-shape opacity-20 delay-400"
        style={{ backgroundColor: "var(--ter-color)" }}
      ></div>
      <div
        className="absolute bottom-20 right-1/3 w-24 h-24 rounded-full floating-shape opacity-20 delay-600"
        style={{ backgroundColor: "var(--tog-color)" }}
      ></div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div
          className={`text-center mb-20 ${
            isVisible ? "slide-in-up" : "opacity-0"
          }`}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[var(--primary-color)] to-[var(--tog-color)] bg-clip-text text-transparent">
            About Us
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're revolutionizing image editing with cutting-edge AI technology,
            making professional background removal accessible to everyone.
          </p>
        </div>

        {/* Mission Section */}
        <div
          className={`mb-20 ${
            isVisible ? "slide-in-left delay-200" : "opacity-0"
          }`}
        >
          <div
            className="hover-lift ripple-effect border-0 shadow-xl rounded-lg p-8"
            style={{
              background: `linear-gradient(135deg, var(--ter-color) 0%, rgba(255,255,255,0.9) 100%)`,
            }}
          >
            <div className="text-center mb-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Our Mission
              </h2>
            </div>
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed text-center max-w-4xl mx-auto">
                To democratize professional image editing by providing powerful,
                AI-driven background removal tools that are fast, accurate, and
                incredibly easy to use. We believe that everyone should have
                access to professional-quality image editing, regardless of
                their technical expertise.
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div
          className={`mb-20 ${
            isVisible ? "slide-in-up delay-400" : "opacity-0"
          }`}
        >
          <h2
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            style={{ color: "var(--primary-color)" }}
          >
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className={`hover-lift pulse-animation delay-${
                  index * 200
                } text-center border-0 shadow-lg rounded-lg bg-card p-6`}
              >
                <div className="mb-4">
                  <div
                    className="mx-auto p-3 rounded-full w-16 h-16 flex items-center justify-center"
                    style={{ backgroundColor: "var(--ter-color)" }}
                  >
                    <div style={{ color: "var(--tog-color)" }}>
                      {value.icon}
                    </div>
                  </div>
                  <h3
                    className="text-xl font-semibold mt-4"
                    style={{ color: "var(--primary-color)" }}
                  >
                    {value.title}
                  </h3>
                </div>
                <div>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div
          className={`mb-20 ${
            isVisible ? "slide-in-right delay-600" : "opacity-0"
          }`}
        >
          <h2
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            style={{ color: "var(--primary-color)" }}
          >
            Meet Our Team
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={`hover-lift text-center border-0 shadow-lg rounded-lg bg-card p-6 delay-${
                  index * 200
                }`}
              >
                <div className="mb-4">
                  <div
                    className="w-20 h-20 mx-auto rounded-full mb-4 overflow-hidden ring-2 ring-[var(--primary-color)]"
                    style={{
                      background: `linear-gradient(135deg, var(--secondary-color), var(--primary-color))`,
                    }}
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>

                  <h3
                    className="text-xl font-semibold"
                    style={{ color: "var(--primary-color)" }}
                  >
                    {member.name}
                  </h3>

                  <p
                    className="font-semibold text-sm mt-1"
                    style={{ color: "var(--secondary-color)" }}
                  >
                    {member.role}
                  </p>
                </div>

                <div>
                  <p className="text-muted-foreground text-sm">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div
          className={`text-center ${
            isVisible ? "slide-in-up delay-800" : "opacity-0"
          }`}
        >
          <div
            className="border-0 shadow-xl rounded-lg p-12"
            style={{
              background: `linear-gradient(135deg, var(--primary-color), var(--tog-color))`,
            }}
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Images?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Join thousands of creators who trust our AI-powered background
                removal tool.
              </p>
              <button
                className="bg-[var(--primary-color)] text-white  hover:bg-[var(--tog-color)] cursor-pointer px-8 py-3 rounded-md font-medium transition-all duration-200 ease-linear"
               onClick={()=>{navigate("/upload");setLoading(true)}}>
                Get Started Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
