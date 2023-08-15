import Job from "../models/JobModel.js";
import { StatusCodes } from "http-status-codes";
import mongoose from "mongoose";
import day from "dayjs";

//Get All Jobs
export const getAllJobs = async (req, res) => {
  const jobs = await Job.find({ createdBy: req.user.userId });
  res.status(StatusCodes.OK).json({ jobs });
};

//Create Job
export const createJob = async (req, res) => {
  req.body.createdBy = req.user.userId;
  const job = await Job.create(req.body);
  res.status(StatusCodes.CREATED).json({ job });
};

// Get Job
export const getJob = async (req, res) => {
  const job = await Job.findById(req.params.id);

  res.status(StatusCodes.OK).json({ job });
};

// Update Job
export const updateJob = async (req, res) => {
  const updatedJob = await Job.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(StatusCodes.OK).json({ msg: "job modified", job: updatedJob });
};

// Delete Job
export const deleteJob = async (req, res) => {
  const removedJob = await Job.findByIdAndDelete(req.params.id);

  res.status(StatusCodes.OK).json({ msg: "job deleted", job: removedJob });
};

export const showStats = async (req, res) => {
  const defaultStats = {
    pending: 22,
    interview: 11,
    declined: 4,
  };
  let monthlyApplications = [
    {
      date: "May 23",
      count: 12,
    },
    {
      date: "june 23",
      count: 12,
    },
    {
      date: "july 23",
      count: 12,
    },
  ];
  res.status(StatusCodes.OK).json({ defaultStats, monthlyApplications });
};
