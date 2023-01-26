import Link from "next/link";

export default function StyledLink(props: any) {
  return (
    <Link className="link" href={props.href}>
      {props.children}
    </Link>
  );
}
