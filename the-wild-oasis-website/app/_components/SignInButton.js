import Image from "next/image";
import { signInActions } from "../_lib/actions";

function SignInButton() {
  return (
    <form action={signInActions}>
      <button className="relative flex items-center gap-6 border border-primary-300 px-10 py-4 text-lg font-medium">
        <Image
          // fill
          className="object-cover"
          src="https://authjs.dev/img/providers/google.svg"
          alt="Google logo"
          height="24"
          width="24"
        />
        <span>Continue with Google</span>
      </button>
    </form>
  );
}

export default SignInButton;
