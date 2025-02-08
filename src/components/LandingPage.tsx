import React from 'react';
import { FileText, Briefcase, Brain, Rocket, Upload, Sparkles, MousePointer } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
          Land Your Dream Job <span className="text-indigo-600">10x Faster</span> with AI!
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
          Smart Resume Builder + AI Job Assistant + Auto-Apply – All in One Platform!
        </p>
        <div className="space-y-4">
          <button className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-lg font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg">
            Get Started for Free
          </button>
          <p className="text-gray-500">
            Trusted by 50,000+ job seekers | Featured on TechCrunch, Forbes, Bloomberg
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-indigo-100 rounded-lg">
              <FileText className="h-6 w-6 text-indigo-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">AI-Powered Resume Builder</h3>
              <p className="text-gray-600 mt-2">Instantly Create a Professional Resume with AI Suggestions.</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-purple-100 rounded-lg">
              <Briefcase className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Smart Job Matching & Auto-Apply</h3>
              <p className="text-gray-600 mt-2">Let AI Find & Apply to Jobs for You.</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-blue-100 rounded-lg">
              <Brain className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">AI Interview Coach</h3>
              <p className="text-gray-600 mt-2">Practice & Get Feedback Before the Big Interview.</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-green-100 rounded-lg">
              <Rocket className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Resume & LinkedIn Optimization</h3>
              <p className="text-gray-600 mt-2">Boost Your Profile & Get More Recruiter Calls.</p>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="space-y-12">
        <h2 className="text-3xl font-bold text-center text-gray-900">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center space-y-4">
            <div className="bg-indigo-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center">
              <Upload className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold">Upload Your Resume or Start from Scratch</h3>
            <p className="text-gray-600">Import your existing resume or create a new one with our templates.</p>
          </div>
          <div className="text-center space-y-4">
            <div className="bg-purple-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center">
              <Sparkles className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold">Let AI Optimize Everything</h3>
            <p className="text-gray-600">Our AI enhances your resume and customizes it for each job.</p>
          </div>
          <div className="text-center space-y-4">
            <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center">
              <MousePointer className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold">Apply with One Click</h3>
            <p className="text-gray-600">Automatically apply to matching jobs with your optimized resume.</p>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="space-y-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Success Stories</h2>
          <p className="text-xl text-gray-600 mt-4">95% of users got more interviews</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Sarah Johnson",
              role: "Software Engineer",
              image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
              quote: "JobSeekerX helped me land my dream job at Google in just 3 weeks!"
            },
            {
              name: "Michael Chen",
              role: "Product Manager",
              image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
              quote: "The AI suggestions were spot-on. I got 5 interview calls in my first week!"
            },
            {
              name: "Emily Rodriguez",
              role: "Marketing Director",
              image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
              quote: "From application to offer in 2 weeks. This platform is a game-changer!"
            }
          ].map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>

      {/* Final CTA */}
      <div className="text-center space-y-6 bg-gradient-to-r from-indigo-50 to-purple-50 p-12 rounded-2xl">
        <h2 className="text-3xl font-bold text-gray-900">Start Your Job Search the Smart Way</h2>
        <p className="text-xl text-gray-600">Join thousands of successful job seekers who found their dream jobs</p>
        <button className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-lg font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg">
          Create My Resume Now
        </button>
      </div>
    </div>
  );
}