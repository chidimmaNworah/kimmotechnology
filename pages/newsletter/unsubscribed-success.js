import { CareersFooter, JobNavbar } from "@/components";
import Link from "next/link";

const UnsubscribeSuccess = () => {
  return (
    <>
      <JobNavbar />
      <div className="flex flex-col items-center justify-center min-h-screen">
        <p className="text-[4rem]">🔕</p>
        <h2 className="text-2xl font-bold text-green-600">
          Successfully Unsubscribed
        </h2>
        <p className="text-gray-600 mt-2">
          You have been removed from our newsletter list.
        </p>
        <Link
          href="/careers/jobs"
          className="mt-4 text-blue-500 hover:underline"
        >
          Go Back to Homepage
        </Link>
      </div>
      <CareersFooter />
    </>
  );
};

export default UnsubscribeSuccess;
