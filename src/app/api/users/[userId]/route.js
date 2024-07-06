import { User } from "@/models/user";
import { CommandSucceededEvent } from "mongodb";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  const { userId } = params;
  const user = await User.findById(userId).select("-password");
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

export const PUT = async (request, { params }) => {
  const { userId } = params;
  const { name, about, profileURL, email } = await request.json();
  try {
    const user = await User.findById(userId);
    user.name = name;
    user.about = about;
    user.email = email;
    user.profileURL = profileURL;
    const updatedUser = await user.save();
    return NextResponse.json({
      message: "User updated !",
      success: false,
    });
  } catch (err) {
    return NextResponse.json({
      message: "user not updated",
    });
  }
};
