import Button from "../components/Button";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="m-[3rem] flex flex-col justify-center items-center gap-6 min-h-screen">
      <h1 className="font-semibold text-3xl">Error Trouble Loading Page</h1>
      <p>Please click the back button or go to / url</p>
      <p>Page may have an error or the page does not exist</p>
      <p>Link to my about page:</p>
      <Button>
        <Link to="about">MY RESUME</Link>
      </Button>
    </div>
  );
}
