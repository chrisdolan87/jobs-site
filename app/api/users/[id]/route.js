import connectMongoDB from "@/libs/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
    const { newEmail } = params;
    const { newName: name, newEmail: email } = await request.json();
    await connectMongoDB();
    await User.findOneAndUpdate({ newEmail }, {name, email}) ;
    // await User.findByIdAndUpdate(id, {name, email}) ;
    return NextResponse.json({ message: "User details updated."}, {status: 200});    
}

export async function GET(request, {params}) {
    const { id } = params;
    await connectMongoDB();
    const user  = await User.findOne({ email: id });
    return NextResponse.json({ user }, { status: 200 });    
}