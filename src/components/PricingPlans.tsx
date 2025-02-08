import React from 'react';
import { Check, Zap, Crown, Star } from 'lucide-react';

export default function PricingPlans() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Choose Your Plan</h2>
        <p className="text-gray-600">Select the perfect plan to accelerate your job search journey.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Free Plan */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 hover:border-indigo-300 transition-colors duration-200">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold text-gray-900">Free</h3>
              <span className="text-gray-500">$0/mo</span>
            </div>
            <p className="text-sm text-gray-600">Perfect for getting started</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-500 mt-0.5" />
                <span className="text-gray-700">Basic Resume Builder</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-500 mt-0.5" />
                <span className="text-gray-700">Basic AI Cover Letter</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-500 mt-0.5" />
                <span className="text-gray-700">Limited Job Recommendations</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-500 mt-0.5" />
                <span className="text-gray-700">Basic ATS Score Check</span>
              </li>
            </ul>
            <button className="w-full px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200">
              Get Started
            </button>
          </div>
        </div>

        {/* Standard Plan */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 hover:border-indigo-300 transition-colors duration-200">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-semibold text-gray-900">Standard</h3>
                <Star className="h-5 w-5 text-yellow-500" />
              </div>
              <span className="text-gray-500">$9.99/mo</span>
            </div>
            <p className="text-sm text-gray-600">For active job seekers</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-500 mt-0.5" />
                <span className="text-gray-700">Unlimited Resume & Cover Letter Downloads</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-500 mt-0.5" />
                <span className="text-gray-700">AI-Powered Customization</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-500 mt-0.5" />
                <span className="text-gray-700">Multiple Templates & Designs</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-500 mt-0.5" />
                <span className="text-gray-700">Auto-Apply (5 jobs/day)</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-500 mt-0.5" />
                <span className="text-gray-700">Resume & LinkedIn Tips</span>
              </li>
            </ul>
            <button className="w-full px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200">
              Upgrade to Standard
            </button>
          </div>
        </div>

        {/* Pro Plan */}
        <div className="bg-white rounded-xl shadow-sm p-6 border-2 border-indigo-500 hover:border-indigo-600 transition-colors duration-200">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-semibold text-gray-900">Pro</h3>
                <Zap className="h-5 w-5 text-indigo-500" />
              </div>
              <span className="text-gray-500">$19.99/mo</span>
            </div>
            <p className="text-sm text-gray-600">For career accelerators</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-500 mt-0.5" />
                <span className="text-gray-700">All Standard Features</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-500 mt-0.5" />
                <span className="text-gray-700">AI Mock Interviews</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-500 mt-0.5" />
                <span className="text-gray-700">Advanced ATS Optimization</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-500 mt-0.5" />
                <span className="text-gray-700">Auto-Apply (10 jobs/day)</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-500 mt-0.5" />
                <span className="text-gray-700">Salary Negotiation Guide</span>
              </li>
            </ul>
            <button className="w-full px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200">
              Upgrade to Pro
            </button>
          </div>
        </div>

        {/* VIP Plan */}
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl shadow-sm p-6 border border-gray-200 hover:border-purple-300 transition-colors duration-200">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-semibold text-gray-900">VIP</h3>
                <Crown className="h-5 w-5 text-purple-500" />
              </div>
              <span className="text-gray-500">$49.99/mo</span>
            </div>
            <p className="text-sm text-gray-600">For career excellence</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-500 mt-0.5" />
                <span className="text-gray-700">All Pro Features</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-500 mt-0.5" />
                <span className="text-gray-700">1-on-1 Expert Review</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-500 mt-0.5" />
                <span className="text-gray-700">AI Networking Assistant</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-500 mt-0.5" />
                <span className="text-gray-700">Career Roadmap</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-500 mt-0.5" />
                <span className="text-gray-700">Priority Support</span>
              </li>
            </ul>
            <button className="w-full px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-colors duration-200">
              Upgrade to VIP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}