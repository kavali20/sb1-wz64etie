import React, { useState } from 'react';
import { Plus, Edit2, Trash2 } from 'lucide-react';

interface Job {
  id: string;
  company: string;
  position: string;
  status: 'applied' | 'interviewing' | 'offered' | 'rejected';
  date: string;
  notes: string;
}

export default function JobTracker() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [currentJob, setCurrentJob] = useState<Job>({
    id: '',
    company: '',
    position: '',
    status: 'applied',
    date: '',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentJob.id) {
      setJobs(jobs.map(job => job.id === currentJob.id ? currentJob : job));
    } else {
      setJobs([...jobs, { ...currentJob, id: Date.now().toString() }]);
    }
    setShowForm(false);
    setCurrentJob({
      id: '',
      company: '',
      position: '',
      status: 'applied',
      date: '',
      notes: '',
    });
  };

  const deleteJob = (id: string) => {
    setJobs(jobs.filter(job => job.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">Job Applications</h2>
          <p className="text-gray-600">Track your job applications and their status.</p>
        </div>
        <button
          onClick={() => setShowForm(true)}
          className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200"
        >
          <Plus className="h-5 w-5" />
          Add Application
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="space-y-4 bg-gray-50 p-6 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Company"
              value={currentJob.company}
              onChange={(e) => setCurrentJob({ ...currentJob, company: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              required
            />
            <input
              type="text"
              placeholder="Position"
              value={currentJob.position}
              onChange={(e) => setCurrentJob({ ...currentJob, position: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              required
            />
            <select
              value={currentJob.status}
              onChange={(e) => setCurrentJob({ ...currentJob, status: e.target.value as Job['status'] })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            >
              <option value="applied">Applied</option>
              <option value="interviewing">Interviewing</option>
              <option value="offered">Offered</option>
              <option value="rejected">Rejected</option>
            </select>
            <input
              type="date"
              value={currentJob.date}
              onChange={(e) => setCurrentJob({ ...currentJob, date: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              required
            />
          </div>
          <textarea
            placeholder="Notes"
            value={currentJob.notes}
            onChange={(e) => setCurrentJob({ ...currentJob, notes: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent h-32"
          />
          <div className="flex gap-4">
            <button
              type="submit"
              className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200"
            >
              Save
            </button>
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200"
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      <div className="space-y-4">
        {jobs.map(job => (
          <div key={job.id} className="bg-white p-4 rounded-lg shadow border border-gray-200">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-medium text-gray-900">{job.position}</h3>
                <p className="text-gray-600">{job.company}</p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    setCurrentJob(job);
                    setShowForm(true);
                  }}
                  className="p-2 text-gray-600 hover:text-indigo-600"
                >
                  <Edit2 className="h-5 w-5" />
                </button>
                <button
                  onClick={() => deleteJob(job.id)}
                  className="p-2 text-gray-600 hover:text-red-600"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            </div>
            <div className="mt-2 flex items-center gap-4">
              <span className={`px-3 py-1 rounded-full text-sm font-medium
                ${job.status === 'applied' ? 'bg-blue-100 text-blue-800' : ''}
                ${job.status === 'interviewing' ? 'bg-yellow-100 text-yellow-800' : ''}
                ${job.status === 'offered' ? 'bg-green-100 text-green-800' : ''}
                ${job.status === 'rejected' ? 'bg-red-100 text-red-800' : ''}
              `}>
                {job.status.charAt(0).toUpperCase() + job.status.slice(1)}
              </span>
              <span className="text-gray-500">{job.date}</span>
            </div>
            {job.notes && <p className="mt-2 text-gray-700">{job.notes}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}