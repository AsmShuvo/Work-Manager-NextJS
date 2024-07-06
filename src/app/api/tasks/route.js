import { Task } from "@/models/task";
import { NextResponse } from "next/server";

export const GET = async () => {};
export const POST = async (req) => {
  const { title, content, userId } = await req.json();
  console.log(title);
  try {
    const task = new Task({
      title,
      content,
      userId,
    });
    const newTask = await task.save();
    console.log(newTask);
    return NextResponse.json(newTask, {
      status: 201,
    });
  } catch (err) {
    console.log(err);
    return NextResponse.json({
      message: "failed to create task",
      success: false,
    });
  }
};
