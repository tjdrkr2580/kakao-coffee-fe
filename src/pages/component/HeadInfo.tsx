import { headInfoProps } from "@/types/props";
import Head from "next/head";

const HeadInfo = ({ title, description }: headInfoProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Head>
  );
};

HeadInfo.defaultProps = {
  title: "카카오 커피",
  description: "카카오 커피에 어서오세요!",
};

export default HeadInfo;
