import Link from "next/link";

const ButtonRegister = ({
  text = "Register",
  extraStyle,
}: {
  text?: string;
  extraStyle?: string;
}) => {
  return (
    <Link href="/register" className={`btn ${extraStyle ? extraStyle : ""}`}>
      {text}
    </Link>
  );
};

export default ButtonRegister;
