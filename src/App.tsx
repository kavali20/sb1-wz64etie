import React, { useState } from 'react';
import { FileText, Briefcase, Send, PenTool, Crown, Home } from 'lucide-react';
import ResumeBuilder from './components/ResumeBuilder';
import JobTracker from './components/JobTracker';
import AiSuggestions from './components/AiSuggestions';
import PricingPlans from './components/PricingPlans';
import LandingPage from './components/LandingPage';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <FileText className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">JobSeekerX</span>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col gap-8">
          <div className="flex gap-4 overflow-x-auto pb-2">
            <button
              onClick={() => setActiveTab('home')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg ${
                activeTab === 'home'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              } transition-colors duration-200`}
            >
              <Home className="h-5 w-5" />
              Home
            </button>
            <button
              onClick={() => setActiveTab('resume')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg ${
                activeTab === 'resume'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              } transition-colors duration-200`}
            >
              <PenTool className="h-5 w-5" />
              Resume Builder
            </button>
            <button
              onClick={() => setActiveTab('applications')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg ${
                activeTab === 'applications'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              } transition-colors duration-200`}
            >
              <Briefcase className="h-5 w-5" />
              Job Applications
            </button>
            <button
              onClick={() => setActiveTab('suggestions')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg ${
                activeTab === 'suggestions'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              } transition-colors duration-200`}
            >
              <Send className="h-5 w-5" />
              AI Suggestions
            </button>
            <button
              onClick={() => setActiveTab('pricing')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg ${
                activeTab === 'pricing'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              } transition-colors duration-200`}
            >
              <Crown className="h-5 w-5" />
              Pricing
            </button>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            {activeTab === 'home' && <LandingPage />}
            {activeTab === 'resume' && <ResumeBuilder />}
            {activeTab === 'applications' && <JobTracker />}
            {activeTab === 'suggestions' && <AiSuggestions />}
            {activeTab === 'pricing' && <PricingPlans />}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;