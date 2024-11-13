import { Task } from "@/state/api";
import { format } from "date-fns";
import Image from "next/image";
import React from "react";

type Props = {
  task: Task;
};

const TaskCard = ({ task }: Props) => {
  return (
    <div className="mb-3 rounded flex-col flex justify-between bg-white p-4 shadow dark:bg-dark-secondary dark:text-white">
      {task.attachments && task.attachments.length > 0 && (
        <div>
          <strong>Attachments:</strong>
          <div className="flex flex-wrap">
            {task.attachments && task.attachments.length > 0 && (
              <Image
                src={`/${task.attachments[0].fileURL}`}
                alt={task.attachments[0].fileName}
                width={400}
                height={200}
                className="rounded-md"
              />
            )}
          </div>
        </div>
      )}
      <div className="flex-wrap flex my-6 dark:text-white">
        <p className="p-2 border-blue-500 border m-1 rounded-xl text-black">
          <strong>ID:</strong> {task.id}
        </p>
        <p className="p-2 border-blue-500 border m-1 rounded-xl text-black">
          <strong>Title:</strong> {task.title}
        </p>
        <p className="p-2 border-blue-500 border m-1 rounded-xl text-black">
          <strong>Description:</strong>{" "}
          {task.description || "No description provided"}
        </p>
        <p className="p-2 border-blue-500 border m-1 rounded-xl text-black">
          <strong>Status:</strong> {task.status}
        </p>
        <p className="p-2 border-blue-500 border m-1 rounded-xl text-black">
          <strong>Priority:</strong> {task.priority}
        </p>
        <p className="p-2 border-blue-500 border m-1 rounded-xl text-black">
          <strong>Tags:</strong> {task.tags || "No tags"}
        </p>

        <p className="p-2 border-blue-500 border m-1 rounded-xl text-black">
          <strong>Author:</strong>{" "}
          {task.author ? task.author.username : "Unknown"}
        </p>
        <p className="p-2 border-blue-500 border m-1 rounded-xl text-black">
          <strong>Assignee:</strong>{" "}
          {task.assignee ? task.assignee.username : "Unassigned"}
        </p>
      </div>
      <div className="flex justify-between ">
        <p className="p-2   rounded-xl text-black dark:text-white">
          <strong>Start Date:</strong>{" "}
          {task.startDate ? format(new Date(task.startDate), "P") : "Not set"}
        </p>
        <p className="p-2 bg-red-500  rounded-xl text-white">
          <strong>Due Date:</strong>{" "}
          {task.dueDate ? format(new Date(task.dueDate), "P") : "Not set"}
        </p>
      </div>
    </div>
  );
};

export default TaskCard;