import { useRouter } from "next/router";

function Header() {
  const router = useRouter();
  return (
    <div className=" font-medium text-lg justify-around p-5 flex">
      <div
        onClick={() => router.push("/")}
        className=" cursor-pointer text-center w-20 border rounded-md px-1"
      >
        Home
      </div>
      <div
        onClick={() => router.push("/feed/1")}
        className=" cursor-pointer text-center w-20 border rounded-md px-1"
      >
        Feed
      </div>
      <div
        onClick={() => router.push("/eom")}
        className=" cursor-pointer text-center w-20 border rounded-md px-1"
      >
        Eom
      </div>
      <div
        onClick={() =>
          (window.location.href = "https://twitter.com/Pawantamada21")
        }
        className=" cursor-pointer text-center w-20 border rounded-md px-1"
      >
        Twitter
      </div>
    </div>
  );
}

export default Header;
