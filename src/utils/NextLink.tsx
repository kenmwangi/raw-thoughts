import NextLink, { LinkProps } from "next/link";
import { useRouter } from "next/router";

interface ActiveLinkProps extends LinkProps {
  activeClassName?: string;
  className?: string;
}

export function Link({
  href,
  children,
  className: targetClassName = "",
  activeClassName,
  prefetch = false,
  ...props
}: React.PropsWithChildren<ActiveLinkProps>) {
  const { asPath } = useRouter();
  const className =
    targetClassName +
    (asPath === href && activeClassName ? " " + activeClassName : "");

  return (
    <NextLink href={href} {...props} className={className} prefetch={prefetch}>
      {children}
    </NextLink>
  );
}
