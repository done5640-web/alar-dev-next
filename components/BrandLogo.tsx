import Image from "next/image";

export function BrandLogo() {
  return <Image src="/alar-dev-logo.png" alt="ALAR DEV" width={36} height={36} style={{ objectFit: "contain" }} />;
}
