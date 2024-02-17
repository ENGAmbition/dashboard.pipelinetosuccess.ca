// pages/dashboard.tsx
'use client';
import React, { useState } from 'react';

interface IUser {
  username: string;
  email: string;
  profileImage: string;
  permissions: string[];
}

const Dashboard: React.FC = () => {
  const [announcementContent, setAnnouncementContent] = useState<string>('');
  const [announcements, setAnnouncements] = useState<string[]>([]);

  const user: IUser = {
    username: 'AdminUser',
    email: 'faiz@example.com',
    profileImage: 'https://via.placeholder.com/150', 
    permissions: ['create', 'edit', 'delete'] // 
  };
  const user1: IUser = {
    username: 'EmployeeUser',
    email: 'tristian@example.com',
    profileImage: 'https://via.placeholder.com/150', 
    permissions: ['edit', 'delete'] 
  };
  const handleCreateAnnouncement = () => {
    if (announcementContent.trim() !== '') {
      setAnnouncements(prevAnnouncements => [...prevAnnouncements, announcementContent]);
      setAnnouncementContent('');
    }
  };

  const handleAnnouncementInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setAnnouncementContent(event.target.value);
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mt-8 mb-4">Dashboard</h1>

      {/* User information section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">User Information</h2>
        <div className="flex items-center mb-4">
          <img src={user.profileImage} alt="Profile" className="w-12 h-12 rounded-full mr-4" />
          <div>
            <p className="text-lg font-semibold">{user.username}</p>
            <p className="text-gray-600">{user.email}</p>
            <p className="text-gray-600">Permissions: {user.permissions.join(', ')}</p>
          </div>
        </div>
        <div className="flex items-center mb-4">
          <img src={user1.profileImage} alt="Profile" className="w-12 h-12 rounded-full mr-4" />
          <div>
            <p className="text-lg font-semibold">{user1.username}</p>
            <p className="text-gray-600">{user1.email}</p>
            <p className="text-gray-600">Permissions: {user1.permissions.join(', ')}</p>
          </div>
        </div>
      </div>

      {/* Announcement creation section */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Create Announcement</h2>
        <div className="mb-4">
          <textarea
            id="announcementContent"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md text-black"
            rows={2} //adjust if needed
            value={announcementContent}
            onChange={handleAnnouncementInputChange}
          ></textarea>
        </div>
        <button onClick={handleCreateAnnouncement} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded">Create</button>
      </div>

      {/* Display announcements */}
      {announcements.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Announcements</h2>
          {announcements.map((announcement, index) => (
            <div key={index} className="border border-gray-300 p-4 rounded-md mb-2">{announcement}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;

