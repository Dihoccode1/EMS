import React from "react";

const Bio = ({ initialData }) => {
  return (
    <div className="sm:col-span-2">
      <label className="block mb-2">Bio (Optional)</label>
      <textarea
        name="bio"
        defaultChecked={initialData?.bio}
        rows={3}
        className="resize-none"
        placeholder="Brief description...."
      />
    </div>
  );
};

export default Bio;
