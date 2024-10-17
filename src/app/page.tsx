import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { GoFileDirectory } from "react-icons/go";
import { BsDot } from "react-icons/bs";
import { Input } from "@/components/ui/input";
import { BsArrowRight } from "react-icons/bs";
import { RiArrowRightSLine } from "react-icons/ri";
import { ImFileText } from "react-icons/im";

export default function Home() {
  return (
    <>
      <div className="flex items-center h-16 border-b-2 border-gray-300">
        <p className="ml-6">Secure Store</p>
      </div>
      <div>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="ml-6">
              <div className="flex gap-2 items-center">
                <GoFileDirectory className="text-xl" />
                <p className="text-sm font-semibold text-[#242424]">E-commerce Website</p>
                <BsDot className="text-xl" />
                <p className="text-sm">Processed 157 of 160 files</p>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="relative ml-6 w-1/2">
                <Input className="bg-[#F9FAF8] pr-10" placeholder="Search File" />
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                  < BsArrowRight className="text-black text-base" />
                </div>
              </div>

              <div>
                <div className="flex gap-4 mt-8">
                  <div className="w-1/3 ml-6 border-r-2 pr-8">
                    <div className="flex justify-between items-center mb-4 p-2 hover:rounded-sm hover:border-[#B486FF] hover:bg-gray-300">
                      <div className="flex gap-2">
                        <GoFileDirectory className="text-xl" />
                        <p>Folder 1</p>
                      </div>
                      <RiArrowRightSLine />
                    </div>
                    <div className="flex justify-between items-center mb-4 p-2 hover:rounded-sm hover:bg-[#B486FF]">
                      <div className="flex gap-2">
                        <GoFileDirectory className="text-xl" />
                        <p>Folder 1</p>
                      </div>
                      <RiArrowRightSLine />
                    </div>
                    <div className="flex justify-between items-center mb-4 p-2 hover:rounded-sm hover:border-[#B486FF] hover:bg-gray-300">
                      <div className="flex gap-2">
                        <GoFileDirectory className="text-xl" />
                        <p>Folder 2</p>
                      </div>
                      <RiArrowRightSLine />
                    </div>
                    <div className="flex justify-between items-center mb-4 p-2 hover:rounded-sm hover:border-[#B486FF] hover:bg-gray-300">
                      <div className="flex gap-2">
                        <GoFileDirectory className="text-xl" />
                        <p>Folder 3</p>
                      </div>
                      <RiArrowRightSLine />
                    </div>
                    <div className="flex justify-between items-center mb-4 p-2 hover:rounded-sm hover:border-[#B486FF] hover:bg-gray-300">
                      <div className="flex gap-2">
                        <GoFileDirectory className="text-xl" />
                        <p>Folder 4</p>
                      </div>
                      <RiArrowRightSLine />
                    </div>
                    <div className="flex justify-between items-center mb-4 p-2 hover:rounded-sm hover:border-[#B486FF] hover:bg-gray-300">
                      <div className="flex gap-2">
                        <GoFileDirectory className="text-xl" />
                        <p>Folder 5</p>
                      </div>
                      <RiArrowRightSLine />
                    </div>
                    <div className="flex justify-between items-center mb-4 p-2 hover:rounded-sm hover:border-[#B486FF] hover:bg-gray-300">
                      <div className="flex gap-2">
                        <GoFileDirectory className="text-xl" />
                        <p>Folder 6</p>
                      </div>
                      <RiArrowRightSLine />
                    </div>
                    <div className="flex justify-between items-center mb-4 p-2 hover:rounded-sm hover:border-[#B486FF] hover:bg-gray-300">
                      <div className="flex gap-2">
                        <GoFileDirectory className="text-xl" />
                        <p>Folder 7</p>
                      </div>
                      <RiArrowRightSLine />
                    </div>
                  </div>

                  <div className="w-1/3 ml-6 pr-8">
                    <div className="flex justify-between items-center mb-4 p-2 hover:rounded-sm hover:border-[#B486FF] hover:bg-gray-300">
                      <div className="flex gap-2">
                        <GoFileDirectory className="text-xl" />
                        <p>Folder 1</p>
                      </div>
                      <RiArrowRightSLine />
                    </div>
                    <div className="flex justify-between items-center mb-4 p-2 hover:rounded-sm hover:border-[#B486FF] hover:bg-gray-300">
                      <div className="flex gap-2">
                        <GoFileDirectory className="text-xl" />
                        <p>Folder 2</p>
                      </div>
                      <RiArrowRightSLine />
                    </div>
                    <div className="flex justify-between items-center mb-4 p-2 hover:rounded-sm hover:border-[#B486FF] hover:bg-gray-300">
                      <div className="flex gap-2">
                        <GoFileDirectory className="text-xl" />
                        <p>Folder 3</p>
                      </div>
                      <RiArrowRightSLine />
                    </div>
                    <div className="flex justify-between items-center mb-4 p-2 hover:rounded-sm hover:border-[#B486FF] hover:bg-gray-300">
                      <div className="flex gap-2">
                        <GoFileDirectory className="text-xl" />
                        <p>Folder 4</p>
                      </div>
                      <RiArrowRightSLine />
                    </div>
                    <div className="flex justify-between items-center mb-4 p-2 hover:rounded-sm hover:border-[#B486FF] hover:bg-gray-300">
                      <div className="flex gap-2">
                        <ImFileText className="text-xl" />
                        <p>privacy</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mb-4 p-2 hover:rounded-sm hover:border-[#B486FF] hover:bg-gray-300">
                    <div className="flex gap-2">
                        <ImFileText className="text-xl" />
                        <p>Terms & conditions</p>
                      </div>
                    </div>
                  </div>

                  <div className="w-1/3 ml-6 border-r-2 pr-8">
                    <div className="flex justify-between items-center mb-4 p-2 hover:rounded-sm hover:border-[#B486FF] hover:bg-gray-300">
                      <div className="flex gap-2">
                        <GoFileDirectory className="text-xl" />
                        <p>Folder 1</p>
                      </div>
                      <RiArrowRightSLine />
                    </div>
                    <div className="flex justify-between items-center mb-4 p-2 hover:rounded-sm hover:border-[#B486FF] hover:bg-gray-300">
                      <div className="flex gap-2">
                        <GoFileDirectory className="text-xl" />
                        <p>Folder 2</p>
                      </div>
                      <RiArrowRightSLine />
                    </div>
                    <div className="flex justify-between items-center mb-4 p-2 hover:rounded-sm hover:border-[#B486FF] hover:bg-gray-300">
                      <div className="flex gap-2">
                        <GoFileDirectory className="text-xl" />
                        <p>Folder 3</p>
                      </div>
                      <RiArrowRightSLine />
                    </div>
                    <div className="flex justify-between items-center mb-4 p-2 hover:rounded-sm hover:border-[#B486FF] hover:bg-gray-300">
                      <div className="flex gap-2">
                        <GoFileDirectory className="text-xl" />
                        <p>Folder 4</p>
                      </div>
                      <RiArrowRightSLine />
                    </div>
                    <div className="flex justify-between items-center mb-4 p-2 hover:rounded-sm hover:border-[#B486FF] hover:bg-gray-300">
                    <div className="flex gap-2">
                        <ImFileText className="text-xl" />
                        <p>privacy</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mb-4 p-2 hover:rounded-sm hover:border-[#B486FF] hover:bg-gray-300">
                    <div className="flex gap-2">
                        <ImFileText className="text-xl" />
                        <p>File2</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mb-4 p-2 hover:rounded-sm hover:border-[#B486FF] hover:bg-gray-300">
                    <div className="flex gap-2">
                        <ImFileText className="text-xl" />
                        <p>Presentation2</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mb-4 p-2 hover:rounded-sm hover:border-[#B486FF] hover:bg-gray-300">
                    <div className="flex gap-2">
                        <ImFileText className="text-xl" />
                        <p>Spreadsheet2</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mb-4 p-2 hover:rounded-sm hover:border-[#B486FF] hover:bg-gray-300">
                    <div className="flex gap-2">
                        <ImFileText className="text-xl" />
                        <p>Video1</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mb-4 p-2 hover:rounded-sm hover:border-[#B486FF] hover:bg-gray-300">
                    <div className="flex gap-2">
                        <ImFileText className="text-xl" />
                        <p>Image2</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mb-4 p-2 hover:rounded-sm hover:border-[#B486FF] hover:bg-gray-300">
                    <div className="flex gap-2">
                        <ImFileText className="text-xl" />
                        <p>Image2</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mb-4 p-2 hover:rounded-sm hover:border-[#B486FF] hover:bg-gray-300">
                    <div className="flex gap-2">
                        <ImFileText className="text-xl" />
                        <p>Image2</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="ml-6">
              <div className="flex gap-2 items-center">
                <GoFileDirectory className="text-xl" />
                <p className="text-sm font-semibold text-[#242424]">Blog Website</p>
                <BsDot className="text-xl" />
                <p className="text-sm">Processed 157 of 160 files</p>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="relative ml-6 w-1/2">
                <Input className="bg-[#F9FAF8] pr-10" placeholder="Search File" />
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                  < BsArrowRight className="text-black text-base" />
                </div>
              </div>

              <div>
                <div className="flex gap-4 mt-8">
                  <div className="w-1/3 ml-6 border-r-2 pr-8">
                    <div className="flex justify-between items-center mb-4 p-2 hover:rounded-sm hover:border-[#B486FF] hover:bg-gray-300">
                      <div className="flex gap-2">
                        <GoFileDirectory className="text-xl" />
                        <p>Folder 1</p>
                      </div>
                      <RiArrowRightSLine />
                    </div>
                    <div className="flex justify-between items-center mb-4 p-2 hover:rounded-sm hover:border-[#B486FF] hover:bg-gray-300">
                      <div className="flex gap-2">
                        <GoFileDirectory className="text-xl" />
                        <p>Folder 1</p>
                      </div>
                      <RiArrowRightSLine />
                    </div>
                    <div className="flex justify-between items-center mb-4 p-2 hover:rounded-sm hover:border-[#B486FF] hover:bg-gray-300">
                      <div className="flex gap-2">
                        <GoFileDirectory className="text-xl" />
                        <p>Folder 2</p>
                      </div>
                      <RiArrowRightSLine />
                    </div>
                    <div className="flex justify-between items-center mb-4 p-2 hover:rounded-sm hover:border-[#B486FF] hover:bg-gray-300">
                      <div className="flex gap-2">
                        <GoFileDirectory className="text-xl" />
                        <p>Folder 3</p>
                      </div>
                      <RiArrowRightSLine />
                    </div>
                    <div className="flex justify-between items-center mb-4 p-2 hover:rounded-sm hover:border-[#B486FF] hover:bg-gray-300">
                      <div className="flex gap-2">
                        <GoFileDirectory className="text-xl" />
                        <p>Folder 4</p>
                      </div>
                      <RiArrowRightSLine />
                    </div>
                    <div className="flex justify-between items-center mb-4 p-2 hover:rounded-sm hover:border-[#B486FF] hover:bg-gray-300">
                      <div className="flex gap-2">
                        <GoFileDirectory className="text-xl" />
                        <p>Folder 5</p>
                      </div>
                      <RiArrowRightSLine />
                    </div>
                    <div className="flex justify-between items-center mb-4 p-2 hover:rounded-sm hover:border-[#B486FF] hover:bg-gray-300">
                      <div className="flex gap-2">
                        <GoFileDirectory className="text-xl" />
                        <p>Folder 6</p>
                      </div>
                      <RiArrowRightSLine />
                    </div>
                    <div className="flex justify-between items-center mb-4 p-2 hover:rounded-sm hover:border-[#B486FF] hover:bg-gray-300">
                      <div className="flex gap-2">
                        <GoFileDirectory className="text-xl" />
                        <p>Folder 7</p>
                      </div>
                      <RiArrowRightSLine />
                    </div>
                  </div>

                  <div className="w-1/3 ml-6 pr-8">
                    <div className="flex justify-between items-center mb-4 p-2 hover:rounded-sm hover:border-[#B486FF] hover:bg-gray-300">
                      <div className="flex gap-2">
                        <GoFileDirectory className="text-xl" />
                        <p>Folder 1</p>
                      </div>
                      <RiArrowRightSLine />
                    </div>
                    <div className="flex justify-between items-center mb-4 p-2 hover:rounded-sm hover:border-[#B486FF] hover:bg-gray-300">
                      <div className="flex gap-2">
                        <GoFileDirectory className="text-xl" />
                        <p>Folder 2</p>
                      </div>
                      <RiArrowRightSLine />
                    </div>
                    <div className="flex justify-between items-center mb-4 p-2 hover:rounded-sm hover:border-[#B486FF] hover:bg-gray-300">
                      <div className="flex gap-2">
                        <GoFileDirectory className="text-xl" />
                        <p>Folder 3</p>
                      </div>
                      <RiArrowRightSLine />
                    </div>
                    <div className="flex justify-between items-center mb-4 p-2 hover:rounded-sm hover:border-[#B486FF] hover:bg-gray-300">
                      <div className="flex gap-2">
                        <GoFileDirectory className="text-xl" />
                        <p>Folder 4</p>
                      </div>
                      <RiArrowRightSLine />
                    </div>
                    <div className="flex justify-between items-center mb-4 p-2 hover:rounded-sm hover:border-[#B486FF] hover:bg-gray-300">
                      <div className="flex gap-2">
                        <ImFileText className="text-xl" />
                        <p>privacy</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mb-4 p-2 hover:rounded-sm hover:border-[#B486FF] hover:bg-gray-300">
                    <div className="flex gap-2">
                        <ImFileText className="text-xl" />
                        <p>Terms & conditions</p>
                      </div>
                    </div>
                  </div>

                  <div className="w-1/3 ml-6 border-r-2 pr-8">
                    <div className="flex justify-between items-center mb-4 p-2 hover:rounded-sm hover:border-[#B486FF] hover:bg-gray-300">
                      <div className="flex gap-2">
                        <GoFileDirectory className="text-xl" />
                        <p>Folder 1</p>
                      </div>
                      <RiArrowRightSLine />
                    </div>
                    <div className="flex justify-between items-center mb-4 p-2 hover:rounded-sm hover:border-[#B486FF] hover:bg-gray-300">
                      <div className="flex gap-2">
                        <GoFileDirectory className="text-xl" />
                        <p>Folder 2</p>
                      </div>
                      <RiArrowRightSLine />
                    </div>
                    <div className="flex justify-between items-center mb-4 p-2 hover:rounded-sm hover:border-[#B486FF] hover:bg-gray-300">
                      <div className="flex gap-2">
                        <GoFileDirectory className="text-xl" />
                        <p>Folder 3</p>
                      </div>
                      <RiArrowRightSLine />
                    </div>
                    <div className="flex justify-between items-center mb-4 p-2 hover:rounded-sm hover:border-[#B486FF] hover:bg-gray-300">
                      <div className="flex gap-2">
                        <GoFileDirectory className="text-xl" />
                        <p>Folder 4</p>
                      </div>
                      <RiArrowRightSLine />
                    </div>
                    <div className="flex justify-between items-center mb-4 p-2 hover:rounded-sm hover:border-[#B486FF] hover:bg-gray-300">
                    <div className="flex gap-2">
                        <ImFileText className="text-xl" />
                        <p>privacy</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mb-4 p-2 hover:rounded-sm hover:border-[#B486FF] hover:bg-gray-300">
                    <div className="flex gap-2">
                        <ImFileText className="text-xl" />
                        <p>File2</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mb-4 p-2 hover:rounded-sm hover:border-[#B486FF] hover:bg-gray-300">
                    <div className="flex gap-2">
                        <ImFileText className="text-xl" />
                        <p>Presentation2</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mb-4 p-2 hover:rounded-sm hover:border-[#B486FF] hover:bg-gray-300">
                    <div className="flex gap-2">
                        <ImFileText className="text-xl" />
                        <p>Spreadsheet2</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mb-4 p-2 hover:rounded-sm hover:border-[#B486FF] hover:bg-gray-300">
                    <div className="flex gap-2">
                        <ImFileText className="text-xl" />
                        <p>Video1</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mb-4 p-2 hover:rounded-sm hover:border-[#B486FF] hover:bg-gray-300">
                    <div className="flex gap-2">
                        <ImFileText className="text-xl" />
                        <p>Image2</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mb-4 p-2 hover:rounded-sm hover:border-[#B486FF] hover:bg-gray-300">
                    <div className="flex gap-2">
                        <ImFileText className="text-xl" />
                        <p>Image2</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mb-4 p-2 hover:rounded-sm hover:border-[#B486FF] hover:bg-gray-300">
                    <div className="flex gap-2">
                        <ImFileText className="text-xl" />
                        <p>Image2</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="ml-6">
              <div className="flex gap-2 items-center">
                <GoFileDirectory className="text-xl" />
                <p className="text-sm font-semibold text-[#242424]">Bitcoin</p>
                <BsDot className="text-xl" />
                <p className="text-sm">Processed 157 of 160 files</p>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="relative ml-6 w-1/2">
                <Input className="bg-[#F9FAF8] pr-10" placeholder="Search File" />
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                  < BsArrowRight className="text-black text-base" />
                </div>
              </div>

              <div>
                <div className="flex gap-4 mt-8">
                  <div className="w-1/3 ml-6 border-r-2 pr-8">
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex gap-2">
                        <GoFileDirectory className="text-xl" />
                        <p>Folder 1</p>
                      </div>
                      <RiArrowRightSLine />
                    </div>
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex gap-2">
                        <GoFileDirectory className="text-xl" />
                        <p>Folder 1</p>
                      </div>
                      <RiArrowRightSLine />
                    </div>
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex gap-2">
                        <GoFileDirectory className="text-xl" />
                        <p>Folder 2</p>
                      </div>
                      <RiArrowRightSLine />
                    </div>
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex gap-2">
                        <GoFileDirectory className="text-xl" />
                        <p>Folder 3</p>
                      </div>
                      <RiArrowRightSLine />
                    </div>
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex gap-2">
                        <GoFileDirectory className="text-xl" />
                        <p>Folder 4</p>
                      </div>
                      <RiArrowRightSLine />
                    </div>
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex gap-2">
                        <GoFileDirectory className="text-xl" />
                        <p>Folder 5</p>
                      </div>
                      <RiArrowRightSLine />
                    </div>
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex gap-2">
                        <GoFileDirectory className="text-xl" />
                        <p>Folder 6</p>
                      </div>
                      <RiArrowRightSLine />
                    </div>
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex gap-2">
                        <GoFileDirectory className="text-xl" />
                        <p>Folder 7</p>
                      </div>
                      <RiArrowRightSLine />
                    </div>
                  </div>

                  <div className="w-1/3 ml-6 pr-8">
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex gap-2">
                        <GoFileDirectory className="text-xl" />
                        <p>Folder 1</p>
                      </div>
                      <RiArrowRightSLine />
                    </div>
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex gap-2">
                        <GoFileDirectory className="text-xl" />
                        <p>Folder 2</p>
                      </div>
                      <RiArrowRightSLine />
                    </div>
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex gap-2">
                        <GoFileDirectory className="text-xl" />
                        <p>Folder 3</p>
                      </div>
                      <RiArrowRightSLine />
                    </div>
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex gap-2">
                        <GoFileDirectory className="text-xl" />
                        <p>Folder 4</p>
                      </div>
                      <RiArrowRightSLine />
                    </div>
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex gap-2">
                        <ImFileText className="text-xl" />
                        <p>privacy</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                    <div className="flex gap-2">
                        <ImFileText className="text-xl" />
                        <p>Terms & conditions</p>
                      </div>
                    </div>
                  </div>

                  <div className="w-1/3 ml-6 border-r-2 pr-8">
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex gap-2">
                        <GoFileDirectory className="text-xl" />
                        <p>Folder 1</p>
                      </div>
                      <RiArrowRightSLine />
                    </div>
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex gap-2">
                        <GoFileDirectory className="text-xl" />
                        <p>Folder 2</p>
                      </div>
                      <RiArrowRightSLine />
                    </div>
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex gap-2">
                        <GoFileDirectory className="text-xl" />
                        <p>Folder 3</p>
                      </div>
                      <RiArrowRightSLine />
                    </div>
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex gap-2">
                        <GoFileDirectory className="text-xl" />
                        <p>Folder 4</p>
                      </div>
                      <RiArrowRightSLine />
                    </div>
                    <div className="flex justify-between items-center mb-4">
                    <div className="flex gap-2">
                        <ImFileText className="text-xl" />
                        <p>privacy</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                    <div className="flex gap-2">
                        <ImFileText className="text-xl" />
                        <p>File2</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                    <div className="flex gap-2">
                        <ImFileText className="text-xl" />
                        <p>Presentation2</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                    <div className="flex gap-2">
                        <ImFileText className="text-xl" />
                        <p>Spreadsheet2</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                    <div className="flex gap-2">
                        <ImFileText className="text-xl" />
                        <p>Video1</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                    <div className="flex gap-2">
                        <ImFileText className="text-xl" />
                        <p>Image2</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                    <div className="flex gap-2">
                        <ImFileText className="text-xl" />
                        <p>Image2</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                    <div className="flex gap-2">
                        <ImFileText className="text-xl" />
                        <p>Image2</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="ml-6">
              <div className="flex gap-2 items-center">
                <GoFileDirectory className="text-xl" />
                <p className="text-sm font-semibold text-[#242424]">Cryptography</p>
                <BsDot className="text-xl" />
                <p className="text-sm">Processed 157 of 160 files</p>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="relative ml-6 w-1/2">
                <Input className="bg-[#F9FAF8] pr-10" placeholder="Search File" />
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                  < BsArrowRight className="text-black text-base" />
                </div>
              </div>

              <div>
                <div className="flex gap-4 mt-8">
                  <div className="w-1/3 ml-6 border-r-2 pr-8">
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex gap-2">
                        <GoFileDirectory className="text-xl" />
                        <p>Folder 1</p>
                      </div>
                      <RiArrowRightSLine />
                    </div>
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex gap-2">
                        <GoFileDirectory className="text-xl" />
                        <p>Folder 1</p>
                      </div>
                      <RiArrowRightSLine />
                    </div>
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex gap-2">
                        <GoFileDirectory className="text-xl" />
                        <p>Folder 2</p>
                      </div>
                      <RiArrowRightSLine />
                    </div>
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex gap-2">
                        <GoFileDirectory className="text-xl" />
                        <p>Folder 3</p>
                      </div>
                      <RiArrowRightSLine />
                    </div>
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex gap-2">
                        <GoFileDirectory className="text-xl" />
                        <p>Folder 4</p>
                      </div>
                      <RiArrowRightSLine />
                    </div>
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex gap-2">
                        <GoFileDirectory className="text-xl" />
                        <p>Folder 5</p>
                      </div>
                      <RiArrowRightSLine />
                    </div>
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex gap-2">
                        <GoFileDirectory className="text-xl" />
                        <p>Folder 6</p>
                      </div>
                      <RiArrowRightSLine />
                    </div>
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex gap-2">
                        <GoFileDirectory className="text-xl" />
                        <p>Folder 7</p>
                      </div>
                      <RiArrowRightSLine />
                    </div>
                  </div>

                  <div className="w-1/3 ml-6 pr-8">
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex gap-2">
                        <GoFileDirectory className="text-xl" />
                        <p>Folder 1</p>
                      </div>
                      <RiArrowRightSLine />
                    </div>
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex gap-2">
                        <GoFileDirectory className="text-xl" />
                        <p>Folder 2</p>
                      </div>
                      <RiArrowRightSLine />
                    </div>
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex gap-2">
                        <GoFileDirectory className="text-xl" />
                        <p>Folder 3</p>
                      </div>
                      <RiArrowRightSLine />
                    </div>
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex gap-2">
                        <GoFileDirectory className="text-xl" />
                        <p>Folder 4</p>
                      </div>
                      <RiArrowRightSLine />
                    </div>
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex gap-2">
                        <ImFileText className="text-xl" />
                        <p>privacy</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                    <div className="flex gap-2">
                        <ImFileText className="text-xl" />
                        <p>Terms & conditions</p>
                      </div>
                    </div>
                  </div>

                  <div className="w-1/3 ml-6 border-r-2 pr-8">
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex gap-2">
                        <GoFileDirectory className="text-xl" />
                        <p>Folder 1</p>
                      </div>
                      <RiArrowRightSLine />
                    </div>
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex gap-2">
                        <GoFileDirectory className="text-xl" />
                        <p>Folder 2</p>
                      </div>
                      <RiArrowRightSLine />
                    </div>
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex gap-2">
                        <GoFileDirectory className="text-xl" />
                        <p>Folder 3</p>
                      </div>
                      <RiArrowRightSLine />
                    </div>
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex gap-2">
                        <GoFileDirectory className="text-xl" />
                        <p>Folder 4</p>
                      </div>
                      <RiArrowRightSLine />
                    </div>
                    <div className="flex justify-between items-center mb-4">
                    <div className="flex gap-2">
                        <ImFileText className="text-xl" />
                        <p>privacy</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                    <div className="flex gap-2">
                        <ImFileText className="text-xl" />
                        <p>File2</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                    <div className="flex gap-2">
                        <ImFileText className="text-xl" />
                        <p>Presentation2</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                    <div className="flex gap-2">
                        <ImFileText className="text-xl" />
                        <p>Spreadsheet2</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                    <div className="flex gap-2">
                        <ImFileText className="text-xl" />
                        <p>Video1</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                    <div className="flex gap-2">
                        <ImFileText className="text-xl" />
                        <p>Image2</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                    <div className="flex gap-2">
                        <ImFileText className="text-xl" />
                        <p>Image2</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                    <div className="flex gap-2">
                        <ImFileText className="text-xl" />
                        <p>Image2</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
}
