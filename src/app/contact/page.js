import Background from "@/components/background";

export default function ContactPage() {
  return (
    <Background>
      <h1 className="text-right pb-2 px-2 text-base font-medium">
        ارتباط با ما
      </h1>
      <p className="text-right text-base">
        مخاطبان عزیز جهت ارتباط با ما میتوانند به آیدی زیر در تلگرام پیام بدهند:
      </p>
      <div className="flex justify-center">
        <a href="https://t.me/NikHastamm" className="text-base">
          NikHastamm
        </a>
      </div>
    </Background>
  );
}
