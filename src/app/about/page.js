import Background from "@/components/background";

export default function AboutPage() {
  return (
    <Background>
      <h1 className="text-right pb-2 px-2 text-base">درباره ما</h1>
      <p className="text-right text-base">
        سایت توییترفا در تلاش است که جذاب ترین و مفید ترین توییت های فارسی را
        برای شما گردآوری کند.
        <br />
        همچنین لازم به ذکر است که توییت های گردآوری شده در زمینه های مختلف دسته
        بندی شده اند که عبارت اند از:
        <br />
        <ul>
          <li>- اجتماعی</li>
          <li>- سیاسی</li>
          <li>- نظامی</li>
          <li>- ورزشی</li>
          <li>- اقتصادی</li>
          <li>- تکنولوژی</li>
          <li>- هنر</li>
          <li>- گردشگری</li>
        </ul>
      </p>
    </Background>
  );
}
