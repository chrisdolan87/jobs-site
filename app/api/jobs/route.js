import connectMongoDB from "@/libs/mongodb";
import { NextResponse } from "next/server";
import Job from "@/models/Job";

export async function POST(request) {
    const {title, description} = await request.json();
    await connectMongoDB();
    await Job.create({title, description});
    return NextResponse.json({message: "Job Created"}, {status: 201})
}

export async function GET() {
    await connectMongoDB();
    const jobs = await Job.find();
    return NextResponse.json({jobs});
}

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Job.findByIdAndDelete(id);
    return NextResponse.json({message: "Job Deleted"}, {status: 200});
}