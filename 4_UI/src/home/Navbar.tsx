import profileImage from "../assets/profile-image.jpg";

export const Navbar = () => {
  return (
    <>
      <div className="flex justify-between items-center">
        <p className="font-bold text-3xl">My Notes</p>
        <img
          className="w-14 h-14 object-cover mr-2 rounded-full"
          src={profileImage}
          alt="profile-image"
        />
      </div>
    </>
  );
};
