"use client";
import Link from "next/link";
export default function Footer() {
  return (
    <div className="mt-3">
      <div className="bg-sky-400 flex flex-row-reverse justify-around items-center px-4 h-16">
        <Link
          href="/about-us"
          className="text-white text-base font-vazir no-underline font-medium"
        >
          درباره ما
        </Link>
        <Link
          href="/contact-us"
          className="text-white text-base font-vazir no-underline font-medium"
        >
          ارتباط با ما
        </Link>
        <Link
          href="/advertisement"
          className="text-white text-base font-vazir no-underline font-medium"
        >
          تبلیغات
        </Link>
      </div>
      <div className="bg-twitter-blue text-white text-base font-vazir flex justify-around items-center px-4 h-10">
        مطالب جذاب و برگزیده توییتر فارسی
      </div>
    </div>
  );
}
