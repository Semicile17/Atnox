
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";



const Header = ({ user }) => {
  return (
    <nav className="bg-transparent w-full z-30 h-16 flex  text-white items-center justify-between p-8 top-0 fixed">
      <div>Atnox.</div>
      <div>
      {user && (
        <div className="flex items-center space-x-4">
          <img
            src={user.imageUrl}
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
        </div>
      )}

      </div>
    </nav>
  );
}
export default Header;