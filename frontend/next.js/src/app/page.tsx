import Image from "next/image";

const imageUrl =
  "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20150913_174%2Fvslash007_1442149732248Uqtb7_JPEG%2F1396313857865_1_100812.jpg&type=sc960_832";

export default function Home() {
  return (
    <main>
      <Image src={imageUrl} width={100} height={100} alt="naver" />
      <img src={imageUrl} alt="naver" width={100} height={100} />
    </main>
  );
}
