import { useSession, signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import config from "@/config";
import Image from "next/image"; // Import Image

// Een simpele knop voor inloggen met ondersteuning voor Google & Magic Links.
const ButtonSignIn = ({
  text = "Sign In",
  extraStyle,
}: {
  text?: string;
  extraStyle?: string;
}) => {
  const router = useRouter();
  const { data: session, status } = useSession();

  const handleClick = () => {
    if (status === "authenticated") {
      router.push(config.auth.callbackUrl);
    } else {
      signIn(undefined, { callbackUrl: config.auth.callbackUrl });
    }
  };

  if (status === "authenticated") {
    return (
      <Link
        href={config.auth.callbackUrl}
        className={`border border-gray-500 text-gray-500 rounded px-4 py-2 hover:bg-gray-100 flex items-center gap-2 ${
          extraStyle ? extraStyle : ""
        }`}
      >
        {session.user?.image ? (
          <Image
          src={session.user?.image}
          alt={session.user?.name || "Account"}
          className="w-6 h-6 rounded-full shrink-0"
          referrerPolicy="no-referrer"
          width={24} // Nodig bij Next.js Image
          height={24} // Nodig bij Next.js Image
        />
        ) : (
          <span className="w-6 h-6 bg-base-300 flex justify-center items-center rounded-full shrink-0">
            {session.user?.name?.charAt(0) || session.user?.email?.charAt(0)}
          </span>
        )}
        {session.user?.name || session.user?.email || "Account"}
      </Link>
    );
  }

  return (
    <button
      className={`border border-black text-black rounded px-4 py-2 hover:bg-gray-100 ${
        extraStyle ? extraStyle : ""
      }`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default ButtonSignIn;

