import connectMongoDB from "@/libs/mongodb";
import { NextResponse } from "next/server";
import Job from "@/models/job";

export async function PUT(request, {params}) {
    const { id } = params;
    const {newTitle: title, newDescription: description} = await request.json();
    await connectMongoDB();
    await Job.findByIdAndUpdate(id, {title, description});
    return NextResponse.json({message: "Job Updated"}, {status: 200});
}

export async function GET(request, {params}) {
    const { id } = params;
    await connectMongoDB();
    const job = await Job.findOne({ _id: id });
    return NextResponse.json({ job }, {status: 200});
}