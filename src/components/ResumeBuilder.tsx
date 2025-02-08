import React, { useState } from 'react';
import { Plus, Save, Download } from 'lucide-react';

interface Section {
  id: string;
  title: string;
  content: string;
}

export default function ResumeBuilder() {
  const [personalInfo, setPersonalInfo] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
  });
  
  const [sections, setSections] = useState<Section[]>([
    { id: '1', title: 'Professional Summary', content: '' },
    { id: '2', title: 'Work Experience', content: '' },
    { id: '3', title: 'Education', content: '' },
    { id: '4', title: 'Skills', content: '' },
  ]);

  const handlePersonalInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPersonalInfo({
      ...personalInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSectionChange = (id: string, content: string) => {
    setSections(sections.map(section =>
      section.id === id ? { ...section, content } : section
    ));
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Resume Builder</h2>
        <p className="text-gray-600">Create your professional resume with our AI-powered builder.</p>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-900">Personal Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={personalInfo.name}
            onChange={handlePersonalInfoChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={personalInfo.email}
            onChange={handlePersonalInfoChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={personalInfo.phone}
            onChange={handlePersonalInfoChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={personalInfo.location}
            onChange={handlePersonalInfoChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>
      </div>

      {sections.map(section => (
        <div key={section.id} className="space-y-2">
          <h3 className="text-lg font-medium text-gray-900">{section.title}</h3>
          <textarea
            value={section.content}
            onChange={(e) => handleSectionChange(section.id, e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent h-32"
            placeholder={`Enter your ${section.title.toLowerCase()}...`}
          />
        </div>
      ))}

      <div className="flex gap-4">
        <button className="flex items-center gap-2 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200">
          <Save className="h-5 w-5" />
          Save Resume
        </button>
        <button className="flex items-center gap-2 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200">
          <Download className="h-5 w-5" />
          Download PDF
        </button>
      </div>
    </div>
  );
}