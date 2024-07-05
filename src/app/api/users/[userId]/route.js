import { User } from "@/models/user";
import { CommandSucceededEvent } from "mongodb";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  const { userId } = params;
  const user = await User.findById(userId);
  return NextResponse.json(user);
};

export const DELETE = async (request, { params }) => {
  const { userId } = params;
  try {
    await User.deleteOne({
      _id: userId,
    });
    return NextResponse.json({
      message: "User deleted",
      success: true,
    });
  } catch (err) {
    console.log(`ERROR while deleting id : ${userId}`);
    return NextResponse.json({
      message: "User deleted",
      success: true,
    });
  }
};
