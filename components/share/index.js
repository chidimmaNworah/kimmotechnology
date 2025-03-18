import React, { useEffect, useState } from "react";
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  PinterestIcon,
  PinterestShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";
import styles from "./styles.module.scss";
import { HiShare } from "react-icons/hi";

export default function Share({ post }) {
  const [shareUrl, setShareUrl] = useState("");

  useEffect(() => {
    setShareUrl(window.location.href);
  }, []);

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: post.title,
          url: shareUrl,
        })
        .then(() => console.log("Shared successfully"))
        .catch((error) => console.error("Error sharing:", error));
    } else {
      console.log(
        "Share API not supported, fallback to traditional share link"
      );
    }
  };

  return (
    <div className={styles.share}>
      <span onClick={handleShare}>
        <HiShare
          className="text-[2.4rem] text-center bg-[#c9454b] p-2 text-gray-100"
          title="share"
        />
      </span>
      {shareUrl && (
        <>
          <FacebookShareButton url={shareUrl}>
            <FacebookIcon size={38} />
          </FacebookShareButton>
          <TwitterShareButton url={shareUrl}>
            <TwitterIcon size={38} />
          </TwitterShareButton>
          <TelegramShareButton url={shareUrl}>
            <TelegramIcon size={38} />
          </TelegramShareButton>
          <WhatsappShareButton url={shareUrl}>
            <WhatsappIcon size={38} />
          </WhatsappShareButton>
          <PinterestShareButton url={shareUrl}>
            <PinterestIcon size={38} />
          </PinterestShareButton>
          <EmailShareButton url={shareUrl}>
            <EmailIcon size={38} />
          </EmailShareButton>
        </>
      )}
    </div>
  );
}
