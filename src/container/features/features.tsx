import {
    BookOpenIcon,
    ChevronRightIcon,
    MessagesSquareIcon,
    ThumbsUpIcon,
  } from "lucide-react";
  
  export default function IconSectionDescriptionOnLeftIconBlocksOnRight() {
    return (
      <>
        {/* Icon Blocks */}
        <div className="container py-24 lg:py-32">
          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-12">
            <div className="lg:w-3/4">
              <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
              <strong>서비스이름(주)</strong>
            </h2>
              <p className="mt-3 text-muted-foreground">
              <br></br>저희는 고객의 성공이 곧 우리의 성공이라고 믿습니다. 언제든지 문의해 주시면 최선을 다해 도와드리겠습니다.
              고객응대 : 고객의 신뢰와 만족을 위해 항상 노력하는 저희 IC 부품 판매 업체를 선택해 주셔서 감사합니다.  
              </p>
              <p className="mt-5">
                <a
                  className="inline-flex items-center gap-x-1 group font-medium hover:underline underline-offset-4 "
                  href="#"
                >
                 서비스이름를 소개합니다
                  <ChevronRightIcon className="flex-shrink-0 w-4 h-4 transition ease-in-out group-hover:translate-x-1" />
                </a>
              </p>
            </div>
            {/* End Col */}
            <div className="space-y-6 lg:space-y-10">
              {/* Icon Block */}
              <div className="flex">
                {/* Icon */}
                <span className="flex-shrink-0 inline-flex justify-center items-center w-[46px] h-[46px] rounded-full border bg-primary text-primary-foreground">
                  <BookOpenIcon className="flex-shrink-0 w-5 h-5" />
                </span>
                <div className="ms-5 sm:ms-8">
                  <h3 className="text-base sm:text-lg font-semibold">
                  품질과 신뢰성
                  </h3>
                  <p className="mt-1 text-muted-foreground">
                    Our documentation and extensive Client libraries contain
                    everything a business needs to build a custom integration in a
                    fraction of the time.
                  </p>
                </div>
              </div>
              {/* End Icon Block */}
              {/* Icon Block */}
              <div className="flex">
                {/* Icon */}
                <span className="flex-shrink-0 inline-flex justify-center items-center w-[46px] h-[46px] rounded-full border  bg-primary text-primary-foreground">
                  <MessagesSquareIcon className="flex-shrink-0 w-5 h-5" />
                </span>
                <div className="ms-5 sm:ms-8">
                  <h3 className="text-base sm:text-lg font-semibold">
                  맞춤형 솔루션
                  </h3>
                  <p className="mt-1 text-muted-foreground">
                    We actively contribute to open-source projects—giving back to
                    the community through development, patches, and sponsorships.
                  </p>
                </div>
              </div>
              {/* End Icon Block */}
              {/* Icon Block */}
              <div className="flex">
                {/* Icon */}
                <span className="flex-shrink-0 inline-flex justify-center items-center w-[46px] h-[46px] rounded-full border bg-primary text-primary-foreground">
                  <ThumbsUpIcon className="flex-shrink-0 w-5 h-5" />
                </span>
                <div className="ms-5 sm:ms-8">
                  <h3 className="text-base sm:text-lg font-semibold">
                  환경 친화적이고 지속 가능한 제품
                  </h3>
                  <p className="mt-1 text-muted-foreground">
                    From boarding passes to movie tickets, there&apos;s pretty
                    much nothing you can&apos;t do.
                  </p>
                </div>
              </div>
              {/* End Icon Block */}
              {/* Icon Block */}
              <div className="flex">
                {/* Icon */}
                <span className="flex-shrink-0 inline-flex justify-center items-center w-[46px] h-[46px] rounded-full border bg-primary text-primary-foreground">
                  <ThumbsUpIcon className="flex-shrink-0 w-5 h-5" />
                </span>
                <div className="ms-5 sm:ms-8">
                  <h3 className="text-base sm:text-lg font-semibold">
                  경쟁력 있는 가격
                  </h3>
                  <p className="mt-1 text-muted-foreground">
                    From boarding passes to movie tickets, there&apos;s pretty
                    much nothing you can&apos;t do.
                  </p>
                </div>
              </div>
              {/* End Icon Block */}
            </div>
            {/* End Col */}
          </div>
          {/* End Grid */}
        </div>
        {/* End Icon Blocks */}
      </>
    );
  }