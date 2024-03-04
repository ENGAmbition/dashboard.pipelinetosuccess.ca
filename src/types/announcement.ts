export interface Announcement {
  id: string;
  //
  // Modifyable fields for the announcement
  //
  title: string;
  content: string;
  //
  // The date the announcement was created and last updated
  //
  createdAt: string;
  updatedAt: string;

  //
  // The author that wrote the announcement
  //
  authorId: string;
}
