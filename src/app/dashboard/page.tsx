"use client";

import React, { FC, JSX, useState } from "react";

/**
 * The user interface
 */
interface User {
  name: string;
  email: string;
  image: string;
  permissions: string[];
}

/**
 * The test users
 */
const testUsers: User[] = [
  {
    name: "AdminUser",
    email: "faiz@example.com",
    image: "https://via.placeholder.com/150",
    permissions: ["create", "edit", "delete"],
  },
  {
    name: "EmployeeUser",
    email: "tristian@example.com",
    image: "https://via.placeholder.com/150",
    permissions: ["edit", "delete"],
  },
];

/**
 * The dashboard page
 *
 * @returns JSX.Element
 */
const DashboardPage: FC = (): JSX.Element => {
  return (
    <>
      <Components />
    </>
  );
};

/**
 * The components for the dashboard page
 *
 * @returns JSX.Element
 */
const Components: FC = (): JSX.Element => {
  const [content, setContent] = useState<string>("");
  const [announcements, setAnnouncements] = useState<string[]>([]);

  /**
   * Handles the creation of an announcement
   *
   * @returns void
   */
  const handleCreateAnnouncement = (): void => {
    if (!content.trim()) {
      return;
    }

    setAnnouncements((prevAnnouncements) => [...prevAnnouncements, content]);
    setContent("");
  };

  return (
    <main className="container flex flex-col gap-8 p-24">
      {/**
       * Header section
       */}
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold">Dashboard</h1>
        <button className="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600">
          Logout
        </button>
      </div>

      {/**
       * User information section
       */}
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-0">
          <h2 className="text-xl font-semibold">User Information</h2>
          <p className="text-gray-600">
            Welcome back, <span className="font-semibold">AdminUser</span>
          </p>
        </div>

        {/**
         * Render the users
         */}
        {testUsers.map((user, index) => (
          <div key={index} className="flex items-center">
            <img
              src={user.image}
              alt="Profile"
              className="mr-4 h-12 w-12 rounded-full"
            />
            <div>
              <p className="text-lg font-semibold">{user.name}</p>
              <p className="text-gray-600">{user.email}</p>
              <p className="text-gray-600">
                Permissions: {user.permissions.join(", ")}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/**
       * Create announcement section
       */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-0">
          <h2 className="text-xl font-semibold">Create Announcement</h2>
          <p className="text-gray-600">
            Create an announcement to be displayed on the dashboard
          </p>
        </div>

        <textarea
          className="mt-1 block w-full rounded-md border border-gray-300 p-2 text-black"
          placeholder="Enter your announcement here"
          rows={2} // Adjust if needed
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>

        <button
          onClick={handleCreateAnnouncement}
          className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          Create
        </button>
      </div>

      {/**
       * Render the announcements
       */}
      {announcements.length > 0 && (
        <>
          {announcements.map((announcement) => (
            <div
              key={Math.random()}
              className="flex flex-col gap-2 rounded-md border-2 p-4"
            >
              <h1 className="text-xl font-semibold">Announcement</h1>
              {announcement}
            </div>
          ))}
        </>
      )}
    </main>
  );
};

export default DashboardPage;
