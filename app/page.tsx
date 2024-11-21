import Image from "next/image";
import { ArrowDown } from "./arrow";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowLR } from "./arrow-lr";

export default function Home() {
  return (
    <div className="text-lg text-pretty pb-16 w-screen overflow-hidden mt-12 leading-relaxed container mx-auto max-w-3xl px-4">
      <div className="flex justify-center">
        <Image src="/산타-레이저.jpeg" width={80} height={80} alt="산타" />
        <Image src="/산타-레이저.jpeg" width={80} height={80} alt="산타" />
        <Image src="/산타-레이저.jpeg" width={80} height={80} alt="산타" />
        <Image src="/산타-레이저.jpeg" width={80} height={80} alt="산타" />
      </div>

      <h1 className="text-4xl text-red-500 text-center mb-8 mt-2">
        여기 모두 주목!!!
      </h1>
      <div className=" border-red-500 gsfont p-2 pb-4 border-4">
        {" "}
        <p className="text-sm text-center">동아리명:</p>
        <div className="flex w-full ">
          <span className="text-2xl">⭐</span>{" "}
          <div className="text-6xl flex-1 mt-1 font-bold text-center">
            자수
            <br /> 박물관{" "}
          </div>
          <span className="text-2xl">⭐</span>{" "}
        </div>
      </div>
      <div className="text-xl  text-center mt-2">
        {" "}
        - 수학자 보석십자수 하는 동아리 -{" "}
      </div>

      <Carousel className="max-h-[26rem] overflow-y-clip">
        <CarouselContent>
          <CarouselItem>
            <Image src="/라이프니츠.png" width={800} height={800} alt="" />
          </CarouselItem>
          <CarouselItem>
            <Image src="/오일러.png" width={800} height={800} alt="" />
          </CarouselItem>
          <CarouselItem>
            <Image src="/데카르트.png" width={800} height={800} alt="" />
          </CarouselItem>
          <CarouselItem>
            <Image src="/페르마.png" width={800} height={800} alt="" />
          </CarouselItem>
          <CarouselItem>
            <Image src="/피타고라스.png" width={800} height={800} alt="" />
          </CarouselItem>
          <CarouselItem>
            <Image src="/베로.png" width={800} height={800} alt="" />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <div className="text-gray-300 mt-4 text-center text-sm mx-auto">
        <ArrowLR /> 옆으로 넘겨 십자수 도안들을 볼 수 있어요.
      </div>

      <div className="mt-12">
        <h2 className="text-2xl">우리 동아리만의 장점</h2>
        <ul className="mt-4 space-y-2">
          <li>- 보석십자수 달인이 될 수 있음</li>
          <li>- 수학쌤과 끈끈한 연을 맺을 수 있음</li>
          <li>- 수학자들을 저주로부터 구해줄 수 있음</li>
          <li>- 코코아 제공 !!!</li>
        </ul>
      </div>
      <p className="text-3xl mb-8 mt-16 font-bold"> 때는 11월 22일...</p>
      <Image src="/산타-레이저.jpeg" width={800} height={800} alt="산타" />
      <div className="content">
        <p className="mt-8">
          {" "}
          크리스마스를 약 한 달 앞두고, 산타 할아버지는 올해도 착한 아이와 나쁜
          아이를 분류하느라 분주했습니다.
        </p>
        <br />
        <p>
          {" "}
          커다란 장부를 펼쳐놓고, 천사 같은 미소로 친구를 도운 아이들, 부모님
          말씀을 잘 들은 아이들 이름 옆에는 예쁜 별표를 그려 넣고 있었습니다.
        </p>
        <br />
        <p>
          반대로, 장난을 심하게 치거나 거짓말을 한 아이들 이름 옆에는 작은
          얼룩을 표시하며, "이 아이는 조금 더 노력하면 좋겠구나," 하고
          중얼거렸습니다.
        </p>
        <br />
        <p>
          하지만 목록을 검토하던 산타 할아버지는 고개를 갸웃하며 한 무리를
          발견했습니다. 이들은 단순히 장난을 치는 정도가 아니라,{" "}
          <span className="font-bold text-red-500">
            수 만명의 친구들을 괴롭히고, 상처를 주며, 다른 사람의 행복을 빼앗는
            행동을 반복하고 있었습니다.
          </span>
        </p>
        <br />
        <p>
          "이 사람들은 단순히 말썽꾸러기의 수준을 넘어서는군..." 할아버지는
          난감한 표정으로 말했습니다.
        </p>
        <br />
        <p className="my-12">그들은 누구였을까요?</p>
        <ArrowDown />
        <p className="mt-[36rem] mb-12 text-4xl">
          그들은 바로 <span className="font-bold">수학자들</span>!!
          <br />
        </p>
        <br />
        <p>
          괴상한 수학 문제로 학생들을 괴롭히는 수학자들을 보며, 그들에게 내릴
          새로운 벌을 생각해낸다!
        </p>
        <br />
        <p>
          {" "}
          산타할아버지는 나쁜 아이들(수학자들)에게 보석 십자수도안으로 바뀌는
          저주를 내리게 되는데..
        </p>
        <br />
        <p className="underline">
          {" "}
          저주를 풀기 위해서는 수학 문제를 풀어야 한다!!
        </p>
        <br />

        <img src="https://s3.orbi.kr/data/file/united2/83b4c9fa71154e77b2c13852d33958a8.png" />

        <br />
        <br />
        <p className="text-2xl">
          뭐?? <br />
          <span>
            <Image
              className="inline"
              src="/seomigo logo.webp"
              alt="서미고 로고"
              width={64}
              height={64}
              quality={100}
            />
            서미고인들은
          </span>{" "}
          수학 문제만 보면 자는 마법에 걸렸다고??
        </p>
        <br />
        <p className="text-xl mt-12">어쩔 수 없지!</p>
        <br />
        <p className="text-xl font-bold mt-8">
          보석십자수 작품을 완성시켜 수학자를 구하자!{" "}
        </p>
        <br />
        <p className="text-2xl font-bold">
          산타할아버지가 주는 코코아를 먹고, 수학자를 구해보자!
        </p>
      </div>

      <div className="mt-12">
        <h2 className="font-bold text-3xl">보석십자수의 효능</h2>
        <ul className="mt-2">
          <li>기억력 향상</li>
          <li>심리적 안정감</li>
          <li>치매 예방!!</li>
        </ul>

        <Image src="/산타-레이저.jpeg" width={800} height={800} alt="산타" />
      </div>
      <div className="flex justify-center">
        <Image src="/산타-레이저.jpeg" width={80} height={80} alt="산타" />
        <Image src="/산타-레이저.jpeg" width={80} height={80} alt="산타" />
        <Image src="/산타-레이저.jpeg" width={80} height={80} alt="산타" />
        <Image src="/산타-레이저.jpeg" width={80} height={80} alt="산타" />
      </div>
      <div className="flex justify-center">
        <Image src="/산타-레이저.jpeg" width={80} height={80} alt="산타" />
        <Image src="/산타-레이저.jpeg" width={80} height={80} alt="산타" />
        <Image src="/산타-레이저.jpeg" width={80} height={80} alt="산타" />
        <Image src="/산타-레이저.jpeg" width={80} height={80} alt="산타" />
      </div>

      <h2 className="font-bold text-5xl text-red-500 leading-relaxed ">
        지금 바로{" "}
        <div>
          <span className="font-bold">자수 박물관</span>에
        </div>{" "}
        가입하세요!
      </h2>
      <div className="mt-12  text-sm">
        메이드 바이{" "}
        <a
          href="https://jcde.xyz"
          rel="noopener noreferrer"
          target="_blank"
          className="underline"
        >
          지호 안
        </a>{" "}
        <br />
        아이 메이드 디스 웹사이트 온 11.21.2024
        <br />
      </div>
    </div>
  );
}

export const metadata = {
  title: "동아리 \"자수 박물관\"",
  
};
