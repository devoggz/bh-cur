import Login from "@/components/auth/login";
import Register from "@/components/auth/register";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <div className="container p-4 h-screen align-middle ">
      <Register />
      <Footer />
    </div>
  );
};

export default page;
