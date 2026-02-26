import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Sign Up | Property",
};

const SignupPage = () => {
  return (
    <>
      <Breadcrumb pageName="Sign Up Page" />
      <div className="max-w-2xl mx-auto">
        {/* Render your signup form component here instead of recursively calling SignupPage */}
      </div>
    </>
  );
};

export default SignupPage;
