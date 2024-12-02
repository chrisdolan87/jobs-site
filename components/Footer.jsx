export default function Footer() {
    return (
        <div className="w-full min-h-80 bg-slate-800 text-white flex justify-between items-center px-8 py-8 gap-8">
            <div className="w-1/4 text-2xl">Cyber Solutions</div>

            <div className="w-1/4 text-center text-sm">
                <p className="text-xl font-bold mb-4">
                    Legal
                </p>
                <p className="mb-2 underline hover:no-underline">Cookie Policy</p>
                <p className="mb-2 underline hover:no-underline">Privacy Policy</p>
                <p className="mb-2 underline hover:no-underline">Terms and Conditions</p>
                <p className="mb-2 underline hover:no-underline">Modern Slavery Statement</p>
                <p className="mb-2 underline hover:no-underline">Manage Your Preferences</p>
            </div>

            <div className="w-1/4 text-center text-sm">
                <p className="text-xl font-bold mb-4">
                    Recruiter
                </p>
                <p className="mb-2 underline hover:no-underline">Recruiter Login</p>
                <p className="mb-2 underline hover:no-underline">Advertise a Job</p>
                <p className="mb-2 underline hover:no-underline">Represent Your Company</p>
                <p className="mb-2 underline hover:no-underline">Get in Touch - Recruitment</p>
                <p className="mb-2 underline hover:no-underline">Recruitment Agencies</p>
            </div>

            <div className="w-1/4 text-center text-sm">
                <p className="text-xl font-bold mb-4">
                    About Us
                </p>
                <p className="mb-2 underline hover:no-underline">Work With Us</p>
                <p className="mb-2 underline hover:no-underline">Get in Touch</p>
                <p className="mb-2 underline hover:no-underline">Meet Our Partners</p>
                <p className="mb-2 underline hover:no-underline">Our Story</p>
                <p className="mb-2 underline hover:no-underline">Get Social</p>
            </div>

        </div>
    );
}
