"use client";
import Link from "next/link";
export default function Footer() {
  return (
    <div>
      <div className="bg-sky-400 flex justify-around items-center px-4 h-16">
        <Link
          href="/about"
          className="text-white text-base no-underline font-medium"
        >
          درباره ما
        </Link>
        <Link
          href="/contact"
          className="text-white text-base no-underline font-medium"
        >
          ارتباط با ما
        </Link>
      </div>
      <div className="bg-twitter-blue text-white text-base flex justify-around items-center px-4 h-10">
        مطالب جذاب و برگزیده توییتر فارسی
      </div>
    </div>
  );
}
