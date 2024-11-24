import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail } from 'lucide-react';
import toast from 'react-hot-toast';

export default function VerifyEmail() {
  const [verificationCode, setVerificationCode] = useState('');
  const navigate = useNavigate();

  const handleVerification = (e: React.FormEvent) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const userIndex = users.findIndex((user: any) => user.verificationCode === verificationCode);

    if (userIndex !== -1) {
      // Update user verification status
      users[userIndex].verified = true;
      localStorage.setItem('users', JSON.stringify(users));

      // Set current user
      localStorage.setItem('currentUser', JSON.stringify(users[userIndex]));

      toast.success('Email verified successfully!');
      navigate('/');
    } else {
      toast.error('Invalid verification code');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      <div className="max-w-md mx-auto px-4 py-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <div className="flex items-center justify-center mb-6">
            <Mail className="h-12 w-12 text-blue-600" />
          </div>
          <h1 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-4">
            Verify Your Email
          </h1>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-6">
            Please enter the verification code sent to your email address.
          </p>

          <form onSubmit={handleVerification} className="space-y-4">
            <div>
              <input
                type="text"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
                placeholder="Enter verification code"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
            >
              Verify Email
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}