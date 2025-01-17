import { Handshake, Building2, CalendarDays, Lightbulb, MapPin, Users, Printer, Phone, Mail, Cpu, User } from "lucide-react";
import AboutLayout from "./AboutLayout";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LogoCarousel } from "@/components/ui/logo-carousel";

export default function AboutPage() {
  const features = [
    {
      Icon: Handshake,
      name: "CEO 인사말",
      description: "대한플러스전자의 비전과 가치를 소개합니다",
      href: "/about/greeting",
      background: <div className="bg-blue-100 h-full w-full" />,
      cta: "자세히 보기",
      className: "md:col-span-2 md:row-span-1 md:h-[150px] h-[120px]",
      enableGroupHover: true,
    },
    {
      Icon: CalendarDays,
      name: "회사연혁",
      description: "Since 1997",
      href: "/about/history", 
      background: <div className="bg-yellow-100 h-full w-full" />,
      cta: "자세히 보기",
      className: "md:col-span-1 md:row-span-1 md:h-[150px] h-[120px]",
      enableGroupHover: true,
    },
    {
      Icon: Lightbulb,
      name: "사업 개요",
      description: "LED 드라이버 IC 및 전자부품 유통",
      href: "/about/business",
      background: <div className="bg-green-100 h-full w-full" />,
      cta: "자세히 보기", 
      className: "md:col-span-1 md:row-span-1 md:h-[150px] h-[120px]",
      enableGroupHover: true,
    },
    {
      Icon: MapPin,
      name: "찾아오시는 길",
      description: "주소 및 주차 안내",
      href: "/about/location",
      background: <div className="bg-blue-100 h-full w-full" />,
      cta: "자세히 보기",
      className: "md:col-span-2 md:row-span-1 md:h-[150px] h-[120px]",
      enableGroupHover: true,
    },
  ];

  return (
    <AboutLayout
      title="회사소개"
      icon={<Building2 className="w-4 h-4" />}
      breadcrumb={[
        { label: "홈", href: "/" },
        { label: "회사소개", href: "/about" },
      ]}
      description="대한플러스전자(주)의 회사 소개 페이지입니다."
      badges={[
        {
          text: "LED 드라이버 IC 전문",
          bgColor: "bg-blue-100",
          textColor: "text-blue-700",
          hoverColor: "hover:bg-blue-200"
        },
        {
          text: "전자부품 유통",
          bgColor: "bg-sky-100", 
          textColor: "text-sky-700",
          hoverColor: "hover:bg-sky-200"
        }
      ]}
    >
      <div className="space-y-6">
        {/* 회사 개요 섹션 */}
        <section className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="order-2 lg:order-1 lg:col-span-8 space-y-6">
              <div className="flex items-center gap-3">
                <h3 className="text-lg font-bold text-gray-900">개요</h3>
                <div className="h-1 w-16 bg-blue-500 rounded-full" />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {/* 기본 정보 카드 */}
                <div className="p-4 bg-gray-50 rounded-xl text-xs">
                  <div className="space-y-3">
                    {[
                      { label: "회사명", icon: Building2, value: "대한플러스전자(주)" },
                      { label: "대표이사", icon: User, value: "김영구" },
                      { label: "설립일", icon: CalendarDays, value: "1997년 11월" },
                      { label: "주력 사업", icon: Cpu, value: "LED 드라이버 IC & 반도체 부품 유통" }
                    ].map((item, i) => (
                      <div key={i} className="space-y-1">
                        <p className="font-medium text-gray-900">{item.label}</p>
                        <div className="flex items-center gap-1">
                          <item.icon className="w-3 h-3 text-blue-600" />
                          <p className="text-gray-700">{item.value}</p>
                        </div>
                        {i < 3 && <div className="h-px bg-gray-100" />}
                      </div>
                    ))}
                  </div>
                </div>

                {/* 연락처 정보 카드 */}
                <div className="p-4 bg-gray-50 rounded-xl text-xs">
                  <div className="space-y-3">
                    {[
                      { label: "전화", icon: Phone, value: ["02-6679-5025", "02-6679-5026"] },
                      { label: "이메일", icon: Mail, value: <a href="mailto:dhes@dhes.co.kr" className="text-blue-600 hover:underline">dhes@dhes.co.kr</a> },
                      { label: "주소", icon: MapPin, value: ["서울특별시 구로구 경인로 53길 15", "중앙유통단지 바동 3217 ~ 3218호"] }
                    ].map((item, i) => (
                      <div key={i} className="space-y-1">
                        <p className="font-medium text-gray-900">{item.label}</p>
                        <div className="flex items-center gap-1">
                          <item.icon className="w-3 h-3 text-blue-600" />
                          <div>
                            {Array.isArray(item.value) ? 
                              item.value.map((v, j) => (
                                <p key={j} className="text-gray-700">{v}</p>
                              )) : 
                              item.value
                            }
                          </div>
                        </div>
                        {i < 2 && <div className="h-px bg-gray-100" />}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* 오른쪽: 회사 이미지 */}
            <div className="order-1 lg:order-2 lg:col-span-4 px-8">
              <div className="sticky top-20">
                <div className="rounded-xl overflow-hidden">
                  <Image
                    src="/logos/dhp-logo.png"
                    alt="대한플러스전자(주)"
                    width={160}
                    height={80}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 회사 소개 및 특징 섹션 */}
        <section className="space-y-6">
          {/* 회사 소개 */}
          <div className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3 space-y-3 mb-6 md:mb-0">
                <h3 className="text-lg font-bold text-gray-900">회사 소개</h3>
                <div className="h-1 w-16 bg-blue-500 rounded-full" />
                <button className="group flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs transition-all">
                  회사소개서 다운로드
                  <ArrowRightIcon className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              
              <div className="md:w-2/3 md:pl-6 space-y-3">
                <p className="text-xs text-gray-600">
                  <strong className="text-gray-900">대한플러스전자(주)</strong>는 1997년 11월 설립된 LED 드라이버 IC 및 반도체 부품 유통 전문기업입니다. 서울특별시 구로구 중앙유통단지에 본사를 두고 있으며, Macroblock, Zowie 등 글로벌 기업들과의 파트너십을 통해 국내 시장을 선도하고 있습니다.
                </p>
                
                <ul className="grid grid-cols-2 gap-2 text-xs text-gray-600">
                  {[
                    "선제적 재고 확보 및 품질 관리",
                    "최적의 물류 창고 운영",
                    "신속한 납기 및 고객 대응",
                    "신뢰성 있는 협력 관계 구축",
                    "LED 클러스터 및 디스플레이 기술 R&D"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 성과 섹션들 */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* 글로벌 제조사 협력 */}
          <div className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
            <div className="flex flex-col gap-4 mb-6">
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-gray-900">글로벌 제조사와의 협력</h3>
                <p className="text-xs text-gray-600">
                  세계적인 LED 및 반도체 제조사들과의 전략적 파트너십을 통해 최신 기술과 고품질 제품을 안정적으로 공급하고 있습니다.
                </p>
                <div className="h-1 w-16 bg-blue-500 rounded-full" />
              </div>
              <div className="flex gap-3">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                  <span className="text-xs text-gray-500">Logo</span>
                </div>
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                  <span className="text-xs text-gray-500">Logo</span>
                </div>
              </div>
            </div>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="details">
                <AccordionTrigger className="text-sm font-medium">
                  상세 협력 현황
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <p className="text-xs text-gray-600">
                      대한플러스전자(주)는 25년 이상의 신뢰를 바탕으로 Macroblock, Zowie 등 글로벌 제조사들과 독점 유통 계약을 체결하여 국내 시장에 프리미엄 LED 드라이버 IC와 반도체 부품을 공급하고 있습니다.
                    </p>
                    <div className="grid gap-4">
                      <Card className="border">
                        <CardHeader className="p-4">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                              <span className="text-xs text-gray-500">Logo</span>
                            </div>
                            <CardTitle className="text-sm">Macroblock</CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent className="p-4 pt-0">
                          <p className="text-xs text-gray-600">대만 최대 LED 드라이버 IC 제조사로서, 연간 1억개 이상의 IC를 생산하며 글로벌 시장 점유율 35%를 차지하고 있습니다. 당사는 한국 독점 공급권을 보유하고 있습니다.</p>
                        </CardContent>
                      </Card>
                      <Card className="border">
                        <CardHeader className="p-4">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                              <span className="text-xs text-gray-500">Logo</span>
                            </div>
                            <CardTitle className="text-sm">XLSEMI</CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent className="p-4 pt-0">
                          <p className="text-xs text-gray-600">고성능 전력 관리 IC 전문 제조사로서, 자동차 및 산업용 장비에 사용되는 고신뢰성 제품을 생산하며 ISO 9001/14001 인증을 보유하고 있습니다.</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* LED 기술 개발 */}
          <div className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
            <div className="flex flex-col gap-4 mb-6">
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-gray-900">LED 기술 개발</h3>
                <p className="text-xs text-gray-600">
                  지속적인 R&D 투자와 혁신을 통해 LED 디스플레이 및 조명 분야에서 독보적인 기술력을 확보하고 있습니다.
                </p>
                <div className="h-1 w-16 bg-blue-500 rounded-full" />
              </div>
              <div className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-xs text-gray-500">Tech Image</span>
              </div>
            </div>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="details">
                <AccordionTrigger className="text-sm font-medium">
                  기술 개발 현황
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-6">
                    <p className="text-xs text-gray-600">
                      28년간의 LED 기술 연구개발 경험을 바탕으로, 연간 매출액의 15% 이상을 R&D에 투자하여 혁신적인 디스플레이와 조명 솔루션을 개발하고 있습니다.
                    </p>

                    <div className="grid gap-6">
                      <Card className="border">
                        <CardHeader className="p-4">
                          <CardTitle className="text-sm">LED RGB 클러스터 개발</CardTitle>
                        </CardHeader>
                        <CardContent className="p-4 pt-0">
                          <div className="space-y-3">
                            <div className="w-full h-32 bg-gray-100 rounded-lg flex items-center justify-center">
                              <span className="text-xs text-gray-500">Product Image</span>
                            </div>
                            <p className="text-xs text-gray-600">특허 등록된 RBS-8E 클러스터 기술을 통해 전력 소비 30% 감소, 휘도 20% 향상을 달성했으며, 현재 글로벌 기업들과 기술 제휴를 확대하고 있습니다.</p>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="border">
                        <CardHeader className="p-4">
                          <CardTitle className="text-sm">기술 전시 및 성과</CardTitle>
                        </CardHeader>
                        <CardContent className="p-4 pt-0">
                          <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-3">
                              <div className="w-full h-20 bg-gray-100 rounded-lg flex items-center justify-center">
                                <span className="text-xs text-gray-500">LED EXPO</span>
                              </div>
                              <div className="w-full h-20 bg-gray-100 rounded-lg flex items-center justify-center">
                                <span className="text-xs text-gray-500">OLED EXPO</span>
                              </div>
                            </div>
                            <ul className="space-y-3">
                              <li className="flex items-start gap-2">
                                <Badge className="mt-0.5 text-[10px]">LED EXPO 2023</Badge>
                                <span className="text-xs text-gray-600">혁신적인 3D LED 디스플레이 시스템으로 기술혁신상 수상</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <Badge className="mt-0.5 text-[10px]">OLED EXPO 2023</Badge>
                                <span className="text-xs text-gray-600">초고효율 마이크로 LED 기술 발표로 산업통상자원부 장관상 수상</span>
                              </li>
                            </ul>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* 다양한 어플리케이션 적용 */}
          <div className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
            <div className="flex flex-col gap-4 mb-6">
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-gray-900">S사와 L사와의 성공적인 적용</h3>
                <p className="text-xs text-gray-600">
                  가전제품(에어컨, 공기청정기, CCTV, 냉장고, 정수기), 전광판, 디스플레이 등 다양한 어플리케이션에 성공적으로 적용되고 있습니다.
                </p>
                <div className="h-1 w-16 bg-blue-500 rounded-full" />
              </div>
              <div className="flex gap-3">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                  <span className="text-xs text-gray-500">Logo</span>
                </div>
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                  <span className="text-xs text-gray-500">Logo</span>
                </div>
              </div>
            </div>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="details">
                <AccordionTrigger className="text-sm font-medium">
                  적용 현황 및 성과
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-6">
                    <p className="text-xs text-gray-600">
                      가전제품, 전광판, 디스플레이 분야에서 S사와 L사와의 협력을 통해 성공적인 적용을 이루었으며, 높은 품질과 신뢰성을 바탕으로 지속적인 성과를 달성하고 있습니다.
                    </p>

                    <div className="grid gap-4">
                      <Card className="border">
                        <CardHeader className="p-4">
                          <CardTitle className="flex items-center gap-2 text-sm">
                            <Badge variant="secondary" className="text-[10px]">가전제품</Badge>
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="p-4 pt-0">
                          <p className="text-xs text-gray-600">에어컨, 공기청정기, CCTV, 냉장고, 정수기 등 다양한 가전제품에 성공적으로 적용되어 높은 신뢰성을 확보하였습니다.</p>
                        </CardContent>
                      </Card>
                      <Card className="border">
                        <CardHeader className="p-4">
                          <CardTitle className="flex items-center gap-2 text-sm">
                            <Badge variant="secondary" className="text-[10px]">전광판</Badge>
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="p-4 pt-0">
                          <p className="text-xs text-gray-600">전광판 분야에서의 혁신적인 기술 적용으로 에너지 효율성을 극대화하였습니다.</p>
                        </CardContent>
                      </Card>
                      <Card className="border">
                        <CardHeader className="p-4">
                          <CardTitle className="flex items-center gap-2 text-sm">
                            <Badge variant="secondary" className="text-[10px]">디스플레이</Badge>
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="p-4 pt-0">
                          <p className="text-xs text-gray-600">디스플레이 기술의 발전을 통해 다양한 산업에 걸쳐 적용 범위를 확장하고 있습니다.</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* 파트너사 로고 */}
        <section className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-gray-900">파트너사</h3>
              <div className="h-1 w-16 bg-blue-500 rounded-full" />
            </div>
          </div>
          <div className="flex justify-center overflow-hidden">
            <LogoCarousel
              columnCount={3}
              logos={[
                { name: "Macroblock", id: 1, img: "/logos/macroblock-logo.png" },
                { name: "XLSEMI", id: 2, img: "/logos/xlsemi-logo.png" },
                { name: "DHP", id: 3, img: "/logos/dhp-logo.png" },
                { name: "GTM", id: 4, img: "/logos/GTM-logo.png" },
                { name: "Kube", id: 5, img: "/logos/kube-logo.png" },
                { name: "LLT", id: 6, img: "/logos/llt-logo.png" },
                { name: "MoreThanAll", id: 7, img: "/logos/morethanall-logo.png" },
                { name: "Powtech", id: 8, img: "/logos/powtech-logo.png" },
                { name: "Zowie", id: 9, img: "/logos/zowie-logo.png" }
              ]}
            />
          </div>
        </section>

        {/* 하위페이지 네비게이션 */}
        <section className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-gray-900">회사소개 메뉴</h3>
              <div className="h-1 w-16 bg-blue-500 rounded-full" />
            </div>
          </div>
          <BentoGrid className="flex flex-col md:grid md:grid-rows-2">
            {features.map((feature) => (
              <BentoCard key={feature.name} {...feature} />
            ))}
          </BentoGrid>
        </section>
      </div>
    </AboutLayout>
  );
}
