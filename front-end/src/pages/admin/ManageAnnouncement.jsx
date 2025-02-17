import React, { useEffect, useState } from "react";
import {
  getAnnouncements,
  createAnnouncement,
} from "../../services/announcementServices";
import { errors } from "../../constants/Errors";
import { Button } from "../../components/UI/Button";
import { Add } from "../../components/Modals/Add";
import { Announcement } from "../../components/App/Announcement";

export const ManageAnnouncement = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [newAnnouncement, setNewAnnouncement] = useState({
    title: "",
    message: "",
    receiver: "",
  });
  const [pagination, setPagination] = useState({
    currentPage: 0,
    lastPage: 0,
    total: 0,
  });

  const nextData = async () => {
    if (pagination.lastPage <= pagination.currentPage) return;
    await getAnnouncements_FUNCTION(pagination.currentPage + 1);
  };

  const prevData = async () => {
    if (pagination.currentPage === 1) return;
    await getAnnouncements_FUNCTION(pagination.currentPage - 1);
  };

  const [openModalAddAnnouncement, setOpenModalAddAnnouncement] =
    useState(false);

  const getAnnouncements_FUNCTION = async (page) => {
    const response = await getAnnouncements(
      localStorage.getItem("token"),
      page
    );
    if (response.status === 200) {
      setAnnouncements(response.data.announcements.data);
      setPagination({
        currentPage: response.data.announcements.current_page,
        lastPage: response.data.announcements.last_page,
        total: response.data.announcements.total,
      });
    } else {
      setErrorMessage(errors.tryAgain);
    }
  };

  const createAnnouncement_FUNCTION = async () => {
    const response = await createAnnouncement(
      localStorage.getItem("token"),
      newAnnouncement
    );
    if (response.status === 201) {
      setNewAnnouncement({ title: "", message: "", receiver: "" });
      getAnnouncements_FUNCTION(pagination.currentPage);
    } else {
      setErrorMessage(errors.tryAgain);
    }
  };

  useEffect(() => {
    getAnnouncements_FUNCTION(1);
  }, []);

  return (
    <div className="ml-6 mt-6 w-[81%]">
      <div className="w-full px-2">
        <h1 className="text-3xl font-semibold">Manage Announcements</h1>
        <br />

        {/* Add Announcement Button */}
        <div className="flex justify-start mb-4">
          <Button
            text="Add Announcement"
            width="20%"
            onClick={() => setOpenModalAddAnnouncement(true)}
          />
        </div>

        {/* Announcements List */}
        <div className="border p-4 rounded-md shadow-md">
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}

          {announcements.length > 0 ? (
            <div className="flex flex-col gap-4">
              {announcements.map((announcement) => (
                <Announcement key={announcement.id} announcement={announcement} />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">No announcements found.</p>
          )}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center items-center mt-6 gap-4">
          <Button text="Previous" width="20%" onClick={prevData} />
          <span className="text-lg font-medium">
            Page {pagination.currentPage} of {pagination.lastPage}
          </span>
          <Button text="Next" width="20%" onClick={nextData} />
        </div>

        {openModalAddAnnouncement && (
          <Add
            toAdd="announcement"
            setOpen={setOpenModalAddAnnouncement}
            onSave={createAnnouncement_FUNCTION}
          />
        )}
      </div>
    </div>
  );
};
