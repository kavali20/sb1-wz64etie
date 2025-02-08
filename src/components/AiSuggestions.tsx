import React, { useState } from 'react';
import { Sparkles, MessageSquare, RefreshCw } from 'lucide-react';

export default function AiSuggestions() {
  const [jobDescription, setJobDescription] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const generateSuggestions = () => {
    setLoading(true);
    // Simulating AI response
    setTimeout(() => {
      setSuggestions([
        'Highlight your experience with React and TypeScript in your resume summary',
        'Add specific metrics and achievements from your previous roles',
        'Include relevant certifications and technical skills',
        'Customize your cover letter to emphasize project management experience',
      ]);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">AI Suggestions</h2>
        <p className="text-gray-600">Get personalized suggestions to improve your resume and application.</p>
      </div>

      <div className="space-y-4">
        <label className="block text-sm font-medium text-gray-700">
          Paste Job Description
        </label>
        <textarea
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent h-48"
          placeholder="Paste the job description here to get tailored suggestions..."
        />
        <button
          onClick={generateSuggestions}
          disabled={!jobDescription.trim() || loading}
          className="flex items-center gap-2 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200 disabled:bg-gray-400"
        >
          {loading ? (
            <RefreshCw className="h-5 w-5 animate-spin" />
          ) : (
            <Sparkles className="h-5 w-5" />
          )}
          Generate Suggestions
        </button>
      </div>

      {suggestions.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-900">Suggestions</h3>
          <div className="space-y-3">
            {suggestions.map((suggestion, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-indigo-50 rounded-lg">
                <MessageSquare className="h-5 w-5 text-indigo-600 mt-0.5" />
                <p className="text-gray-800">{suggestion}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}