import { connectionStr } from "@/app/lib/db";
import { foodSchema } from "@/app/lib/foodsModel";
import mongoose from "mongoose";
import { Edu_AU_VIC_WA_NT_Dots } from "next/font/google";
import { NextResponse } from "next/server";

export async function POST(request) {
  const payload = await request.json();
  let success = false;
  await mongoose.connect(connectionStr);
  const food = new foodSchema(payload);
  const result = await food.save();
  if (result) {
    success = true;
  }
  return NextResponse.json({ result, success });
}
