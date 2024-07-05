import { NextResponse } from "next/server";

export const GET = (request, { params }) => {
  const { userId, postId } = params;
  console.log(userId, postId);
  return NextResponse.json({
    params: params,
  });
};

