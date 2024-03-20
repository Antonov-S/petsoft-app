import Link from "next/link";

import { CONTACT_PAGE_ADDRESS } from "@/lib/constants";

export default function AppFooter() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="mt-auto border-t border-black/5 py-5">
      <small className="opacity-50">
        &copy; {currentYear}{" "}
        <Link href={CONTACT_PAGE_ADDRESS}>
          <span className="font-extrabold">Svetlozar Antonov</span>
        </Link>
        . All rights reserved.
      </small>
    </footer>
  );
}
