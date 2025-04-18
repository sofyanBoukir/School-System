import React, { useState } from "react";
import { Button } from "../UI/Button";
import { deleteUser } from "../../services/userServices";
import { errors } from "../../constants/Errors";
import { Notification } from "../UI/Notification";
import { deleteSubject } from "../../services/subjectServices";
import { deleteAnnouncement } from "../../services/announcementServices";
import { deleteClass } from "../../services/classServices";
import { deleteEvent } from "../../services/eventServices";
import { deleteNotification } from "../../services/notificationServices";
import { deleteTeacher } from "../../services/teacherServices";
import { deleteAttendance } from "../../services/attendanceStudServices";
import { deleteSecret } from "../../services/secretsServices";
import { deleteExam } from "../../services/examServices";

export const Delete = ({ modal, setModal }) => {
  const [loading, setLoading] = useState(false);
  const [notificaton, setNotification] = useState(null);

  const deleteUser_FUNCTION = async () => {
    setNotification(null);
    try {
      setLoading(true);
      const response = await deleteUser(
        localStorage.getItem("token"),
        modal.data.user.id
      );
      setLoading(false);
      response.status === 200
        ? response.data.message
          ? (setNotification({
              type: "success",
              message: response.data.message,
            }),
            setTimeout(() => {
              setModal({ type: "" });
            }, 3000))
          : setNotification({ type: "error", message: errors.tryAgain })
        : setNotification({ type: "error", message: errors.notFound });
    } catch (error) {
      setLoading(false);
      if (error.response.data.message) {
        setNotification({
          type: "error",
          message: error.response.data.message,
        });
      } else {
        setNotification({ type: "error", message: errors.tryAgain });
      }
    }
  };

  const deleteSubject_FUNCTION = async () => {
    setNotification(null);
    setLoading(true);
    const response = await deleteSubject(
      localStorage.getItem("token"),
      modal.data.id
    );
    setLoading(false);

    response.status === 200
      ? response.data.message
        ? (setNotification({ type: "success", message: response.data.message }),
          setTimeout(() => {
            setModal({ type: "" });
          }, 3000))
        : setNotification({ type: "error", message: errors.tryAgain })
      : setNotification({ type: "error", message: errors.notFound });
  };

  const deleteTeacher_FUNCTION = async () => {
    setNotification(null);
    setLoading(true);

    const response = await deleteTeacher(
      localStorage.getItem("token"),
      modal.data.id
    );
    setLoading(false);
    response.status === 200
      ? response.data.message
        ? (setNotification({ type: "success", message: response.data.message }),
          setTimeout(() => {
            setModal({ type: "" });
          }, 1000))
        : setNotification({ type: "error", message: errors.tryAgain })
      : setNotification({ type: "error", message: errors.notFound });
  };

  const deleteClass_FUNCTION = async () => {
    setNotification(null);
    setLoading(true);
    const response = await deleteClass(
      localStorage.getItem("token"),
      modal.data.id
    );
    setLoading(false);
    response.status === 200
      ? response.data.message
        ? (setNotification({ type: "success", message: response.data.message }),
          setTimeout(() => {
            setModal({ type: "" });
          }, 1000))
        : setNotification({ type: "error", message: errors.tryAgain })
      : setNotification({ type: "error", message: errors.notFound });
  };

  const deleteAnnouncement_FUNCTION = async () => {
    setNotification(null);
    setLoading(true);
    const response = await deleteAnnouncement(
      localStorage.getItem("token"),
      modal.data.id
    );
    setLoading(false);
    response.status === 200
      ? response.data.message
        ? (setNotification({ type: "success", message: response.data.message }),
          setTimeout(() => {
            setModal({ type: "" });
          }, 3000))
        : setNotification({ type: "error", message: errors.tryAgain })
      : setNotification({ type: "error", message: errors.notFound });
  };

  const deleteNotification_FUNCTION = async () => {
    setNotification(null);
    setLoading(true);
    const response = await deleteNotification(
      localStorage.getItem("token"),
      modal.data.id
    );
    setLoading(false);
    response.status === 200
      ? response.data.message
        ? (setNotification({ type: "success", message: response.data.message }),
          setTimeout(() => {
            setModal({ type: "" });
          }, 3000))
        : setNotification({ type: "error", message: errors.tryAgain })
      : setNotification({ type: "error", message: errors.notFound });
  };
  const deleteEvent_FUNCTION = async () => {
    setNotification(null);
    setLoading(true);
    const response = await deleteEvent(
      localStorage.getItem("token"),
      modal.data.id
    );
    setLoading(false);
    response.status === 200
      ? response.data.message
        ? (setNotification({ type: "success", message: response.data.message }),
          setTimeout(() => {
            setModal({ type: "" });
          }, 3000))
        : setNotification({ type: "error", message: errors.tryAgain })
      : setNotification({ type: "error", message: errors.notFound });
  };
  const deleteAttendance_FUNCTION = async () => {
    setNotification(null);
    setLoading(false);
    const response = await deleteAttendance(
      localStorage.getItem("token"),
      modal.data.id
    );
    response.status === 200
      ? response.data.message
        ? (setNotification({ type: "success", message: response.data.message }),
          setTimeout(() => {
            setModal({ type: "" });
          }, 3000))
        : setNotification({ type: "error", message: errors.tryAgain })
      : setNotification({ type: "error", message: errors.notFound });
  };

  const deleteSecretKey_FUNCTION = async () => {
    setNotification(null);
    try {
      setLoading(true);
      const response = await deleteSecret(
        localStorage.getItem("token"),
        modal.data.id
      );
      setLoading(false);
      response.status === 200
        ? response.data.message
          ? (setNotification({
              type: "success",
              message: response.data.message,
            }),
            setTimeout(() => {
              setModal({ type: "" });
            }, 3000))
          : setNotification({ type: "error", message: errors.tryAgain })
        : setNotification({ type: "error", message: errors.notFound });
    } catch (error) {
      setLoading(false);
      if (error.response.data.message) {
        setNotification({
          type: "error",
          message: error.response.data.message,
        });
      } else {
        setNotification({ type: "error", message: errors.tryAgain });
      }
    }
  };

  const deleteExam_FUNCTION = async () => {
    setNotification(null);
    try {
      setLoading(true);
      const response = await deleteExam(
        localStorage.getItem("token"),
        modal.data.id
      );
      setLoading(false);
      response.status === 200
        ? response.data.message
          ? (setNotification({
              type: "success",
              message: response.data.message,
            }),
            setTimeout(() => {
              setModal({ type: "" });
            }, 3000))
          : setNotification({ type: "error", message: errors.tryAgain })
        : setNotification({ type: "error", message: errors.notFound });
    } catch (error) {
      setLoading(false);
      if (error.response.data.message) {
        setNotification({
          type: "error",
          message: error.response.data.message,
        });
      } else {
        setNotification({ type: "error", message: errors.tryAgain });
      }
    }
  };

  const delete_FUNCTION = async (e) => {
    e.preventDefault();
    if (modal.toUpdateOrDelete === "User") {
      deleteUser_FUNCTION();
    } else if (modal.toUpdateOrDelete === "Subject") {
      deleteSubject_FUNCTION();
    } else if (modal.toUpdateOrDelete === "Announcement") {
      deleteAnnouncement_FUNCTION();
    } else if (modal.toUpdateOrDelete === "Classe") {
      deleteClass_FUNCTION();
    } else if (modal.toUpdateOrDelete === "Event") {
      deleteEvent_FUNCTION();
    } else if (modal.toUpdateOrDelete === "Notification") {
      deleteNotification_FUNCTION();
    } else if (modal.toUpdateOrDelete === "Teacher") {
      deleteTeacher_FUNCTION();
    } else if (modal.toUpdateOrDelete === "Attendance") {
      deleteAttendance_FUNCTION();
    } else if (modal.toUpdateOrDelete === "Secret") {
      deleteSecretKey_FUNCTION();
    } else if (modal.toUpdateOrDelete === "Exam") {
      deleteExam_FUNCTION();
    }
  };

  return (
    <div className="z-20 fixed inset-0 flex items-center justify-center bg-opacity-50 backdrop-blur-md">
      <div className="bg-white px-10 py-6 rounded-md shadow-lg">
        <div>
          <h1 className="text-2xl font-semibold text-black">
            Are you sure you want to delete this {modal.toUpdateOrDelete}
          </h1>
        </div>

        <div className="mt-4">
          <p className="text-gray-700">
            {modal.data.username ? (
              <>
                If you delete{" "}
                <span className="font-semibold text-lg">
                  {modal.data.username}
                </span>
                , it cannot be recovered. Are you sure you want to proceed?
              </>
            ) : (
              "Are you sure you want to delete it!"
            )}
          </p>
        </div>
        <form
          className="flex justify-end gap-3 mt-6 w-[40%] float-end"
          onSubmit={delete_FUNCTION}
        >
          <Button
            type={"button"}
            text={"Cancel"}
            onClick={() => setModal({ type: "" })}
            bg="bg-gray-200"
            color="text-gray-900"
            width={"25%"}
          />
          <Button
            type={"submit"}
            text={"Delete"}
            loading={loading}
            bg={"bg-red-600 px-3"}
            width={"25%"}
          />
        </form>
        {notificaton && (
          <Notification type={notificaton.type} message={notificaton.message} />
        )}
      </div>
    </div>
  );
};
