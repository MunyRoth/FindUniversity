import Link from "next/link";
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Khmer&display=swap" rel="stylesheet"></link>

function Header() {
  return (
    <div className="flex flex-col bg-black text-white py-3 gap-5 ">
      <div className="flex justify-between bg-black text-white items-center px-5">
        <img className="h-12 w-15 " src="./logo/logo.png" />
        <div>
          <form>
            <div>
              <input placeholder="ស្វែងរកឈ្មោះសាកលវិទ្យាល័យ" />
            </div>
            <button type="submit"></button>
          </form>
        </div>

        <div>Login</div>
      </div>

      <div className="flex list-none gap-10 text-base px-5 m-auto">
        <li>
          <Link href="">ទំព័រដើម</Link>
        </li>
        <li>
          <Link href="">ណែនាំជំនាញ</Link>
        </li>
        <li>
          <Link href="">ជំនាញ</Link>
        </li>
        <li>
          <Link href="">អំពីយើង</Link>
        </li>
      </div>
    </div>
  );
}

export default Header;
