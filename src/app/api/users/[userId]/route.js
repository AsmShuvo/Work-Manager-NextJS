import { NextResponse } from "next/server";

export const DELETE = (request, { params }) => {
  const { userId } = params;
  return NextResponse.json({
    message: `id is ${userId}`,
  });
};
